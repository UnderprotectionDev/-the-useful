import "@tanstack/react-start/server-only";
import { requestContext } from "@/server/logger.server";

export const createRpcContext = (request: Request) => ({
  request,
  requestId: requestContext.getStore()?.requestId ?? crypto.randomUUID(),
});

export type RpcContext = ReturnType<typeof createRpcContext>;
