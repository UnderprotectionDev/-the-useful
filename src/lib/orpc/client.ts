import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createRouterClient } from "@orpc/server";
import type { RouterClient } from "@orpc/server";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { rpcRouter } from "@/server/orpc/router.server";
import { createRpcContext } from "@/server/request-context.server";

const getClient = createIsomorphicFn()
  .server(() =>
    createRouterClient(rpcRouter, {
      context: () => createRpcContext(getRequest()),
    })
  )
  .client((): RouterClient<typeof rpcRouter> =>
    createORPCClient(
      new RPCLink({
        origin: () => window.location.origin,
        url: "/api/rpc",
      })
    )
  );

export const rpc = getClient();
