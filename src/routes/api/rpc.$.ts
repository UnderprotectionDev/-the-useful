import { RPCHandler } from "@orpc/server/fetch";
import { createFileRoute } from "@tanstack/react-router";

import { rpcRouter } from "@/server/orpc/router.server";
import { createRpcContext } from "@/server/request-context.server";

const handler = new RPCHandler(rpcRouter);

export const Route = createFileRoute("/api/rpc/$")({
  server: {
    handlers: {
      ANY: async ({ request }) => {
        const { response } = await handler.handle(request, {
          prefix: "/api/rpc",
          context: createRpcContext(request),
        });
        return response ?? new Response("Not found", { status: 404 });
      },
    },
  },
});
