import { expect, test } from "bun:test";

import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createRouterClient } from "@orpc/server";
import type { RouterClient } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";

import { rpcRouter } from "@/server/orpc/router.server";
import { createRpcContext } from "@/server/request-context.server";

test("direct execution and Fetch transport share the typed contract", async () => {
  const context = createRpcContext(new Request("http://localhost/api/rpc"));
  const direct = createRouterClient(rpcRouter, { context });
  const handler = new RPCHandler(rpcRouter);
  const transport: RouterClient<typeof rpcRouter> = createORPCClient(
    new RPCLink({
      origin: "http://localhost",
      url: "/api/rpc",
      fetch: async (url, init) => {
        const { response } = await handler.handle(new Request(url, init), {
          prefix: "/api/rpc",
          context,
        });
        return response ?? new Response("Not found", { status: 404 });
      },
    })
  );

  const result = await direct.foundation.status({ view: "details" });
  expect(result).toEqual({
    status: "ready",
    view: "details",
    requestId: context.requestId,
  });
  expect(await transport.foundation.status({ view: "details" })).toEqual(
    result
  );
});
