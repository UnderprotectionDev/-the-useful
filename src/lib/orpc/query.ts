import { createRouterUtils } from "@orpc/tanstack-query";

import { rpc } from "./client";

export const rpcQuery = createRouterUtils(rpc);
