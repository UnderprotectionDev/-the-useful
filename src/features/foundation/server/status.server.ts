import "@tanstack/react-start/server-only";
import { os } from "@orpc/server";

import { statusInput, statusOutput } from "@/features/foundation/schemas";
import type { RpcContext } from "@/server/request-context.server";

export const status = os
  .$context<RpcContext>()
  .input(statusInput)
  .output(statusOutput)
  .handler(({ input, context }) => ({
    status: "ready",
    view: input.view,
    requestId: context.requestId,
  }));
