import { afterAll, afterEach, beforeAll, expect, test } from "bun:test";

import { GlobalRegistrator } from "@happy-dom/global-registrator";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { IOptionalBrowserSettings } from "happy-dom";

import { Button } from "./button";

beforeAll(() => {
  const settings: IOptionalBrowserSettings = {
    enableJavaScriptEvaluation: false,
  };
  GlobalRegistrator.register({ settings });
});
afterEach(cleanup);
afterAll(async () => {
  await GlobalRegistrator.unregister();
});

test("Base UI button is keyboard accessible and invokes its action", async () => {
  let presses = 0;
  const user = userEvent.setup({ document });
  const view = render(
    <Button
      onClick={() => {
        presses += 1;
      }}
    >
      Refresh
    </Button>
  );
  await user.tab();
  expect(document.activeElement).toBe(
    view.getByRole("button", { name: "Refresh" })
  );
  await user.keyboard("{Enter}");
  expect(presses).toBe(1);
});

test("disabled button does not invoke its action", async () => {
  let presses = 0;
  const user = userEvent.setup({ document });
  const view = render(
    <Button
      disabled
      onClick={() => {
        presses += 1;
      }}
    >
      Refresh
    </Button>
  );
  await user.click(view.getByRole("button", { name: "Refresh" }));
  expect(presses).toBe(0);
});
