import { AxeBuilder } from "@axe-core/playwright";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import { expect, test } from "@playwright/test";

import type { rpcRouter } from "@/server/orpc/router.server";

test("full-document SSR renders validated route data without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
  });
  try {
    const page = await context.newPage();
    const response = await page.goto("/status?view=details");
    expect(response?.status()).toBe(200);
    await expect(
      page.getByRole("heading", { name: "Application status" })
    ).toBeVisible();
    await expect(page.getByText("API ready")).toBeVisible();
    await expect(
      page.getByText("Runtime: Bun", { exact: false })
    ).toBeVisible();
    const requestId = await response?.headerValue("x-request-id");
    expect(requestId).toBeTruthy();
    await expect(page.getByTestId("request-id")).toHaveText(requestId ?? "");
    const nextResponse = await page.reload();
    const nextId = await nextResponse?.headerValue("x-request-id");
    expect(nextId).not.toBe(requestId);
    await expect(page.getByTestId("request-id")).toHaveText(nextId ?? "");
    await page.goto("/status?view=invalid");
    await expect(page.getByText("API ready")).toBeVisible();
    await expect(page.getByTestId("request-id")).toHaveCount(0);
  } finally {
    await context.close();
  }
});

test("hydration reuses SSR query data, navigation and refresh use typed RPC", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const rpcRequests: string[] = [];
  page.on("request", (request) => {
    if (request.url().includes("/api/rpc/")) {
      rpcRequests.push(request.url());
    }
  });
  const initial = await page.goto("/status?view=details");
  const initialId = await initial?.headerValue("x-request-id");
  await expect(page.getByTestId("request-id")).toHaveText(initialId ?? "");
  const refresh = page.getByRole("button", { name: "Refresh status" });
  await expect(refresh).toBeEnabled();
  expect(rpcRequests).toHaveLength(0);
  const devtools = page.getByRole("button", { name: "Open TanStack Devtools" });
  await (process.env.E2E_MODE === "development"
    ? expect(devtools).toBeVisible()
    : expect(devtools).toHaveCount(0));
  const rpcResponse = page.waitForResponse((response) =>
    response.url().includes("/api/rpc/foundation/status")
  );
  await refresh.click();
  const refreshed = await rpcResponse;
  expect(refreshed.ok()).toBe(true);
  await expect(page.getByTestId("request-id")).not.toHaveText(initialId ?? "");
  const nativeResponse = page.waitForResponse((response) =>
    response.url().includes("/_serverFn/")
  );
  await page.getByRole("link", { name: "Summary" }).click();
  const nativeResult = await nativeResponse;
  expect(nativeResult.ok()).toBe(true);
  await expect(page).toHaveURL(/view=summary/u);
  await expect(page.getByTestId("request-id")).toHaveCount(0);
  await page.getByRole("link", { name: "Home" }).click();
  await expect(
    page.getByRole("heading", { name: "The Useful Parts" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Check application status" }).click();
  await expect(
    page.getByRole("heading", { name: "Application status" })
  ).toBeVisible();
  await expect(page.getByText("Runtime: Bun 1.4.5")).toBeVisible();
  expect(errors).toEqual([]);
});

test("SSR streams a complete HTML document with isolated concurrent contexts", async ({
  baseURL,
}) => {
  const url = new URL("/status?view=details", baseURL);
  const responses = await Promise.all([fetch(url), fetch(url)]);
  const documents = await Promise.all(
    responses.map(async (response) => ({
      id: response.headers.get("x-request-id"),
      encoding: response.headers.get("transfer-encoding"),
      type: response.headers.get("content-type"),
      body: await response.text(),
    }))
  );
  expect(documents[0]?.id).not.toBe(documents[1]?.id);
  for (const document of documents) {
    expect(document.id).toBeTruthy();
    expect(document.encoding).toBe("chunked");
    expect(document.type).toContain("text/html");
    expect(document.body).toMatch(/^<!DOCTYPE html>/iu);
    expect(document.body).toContain(document.id ?? "");
    expect(document.body).toContain("</html>");
  }
});

test("typed RPC HTTP client and health endpoint work", async ({
  baseURL,
  request,
}) => {
  const client: RouterClient<typeof rpcRouter> = createORPCClient(
    new RPCLink({
      origin: baseURL,
      url: "/api/rpc",
    })
  );
  const result = await client.foundation.status({ view: "details" });
  expect(result.status).toBe("ready");
  expect(result.view).toBe("details");
  expect(result.requestId).toBeTruthy();
  await expect(
    client.foundation.status({
      // @ts-expect-error -- invalid input must fail at compile time and at the HTTP boundary.
      view: "invalid",
    })
  ).rejects.toMatchObject({ code: "BAD_REQUEST" });
  const health = await request.get("/api/health");
  expect(health.ok()).toBe(true);
  expect(await health.json()).toEqual({ status: "ok" });
});

for (const path of ["/", "/status?view=details"]) {
  test(`no detectable accessibility violations on ${path}`, async ({
    page,
  }) => {
    await page.goto(path);
    const { violations } = await new AxeBuilder({ page }).analyze();
    expect(violations).toEqual([]);
  });
}
