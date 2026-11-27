import {
  createCsrfMiddleware,
  createMiddleware,
  createStart,
} from "@tanstack/react-start";
import { setResponseHeader } from "@tanstack/react-start/server";

import { logger, requestContext } from "@/server/logger.server";

const requestLogging = createMiddleware().server(async ({ next }) => {
  const requestId = crypto.randomUUID();
  setResponseHeader("x-request-id", requestId);
  return await requestContext.run({ requestId }, async () => {
    const started = performance.now();
    try {
      // oxlint-disable-next-line node/callback-return -- Start next returns a response, not an error-first callback.
      const result = await next();
      logger.info({
        operation: "request",
        status: result.response.status,
        durationMs: Math.round(performance.now() - started),
      });
      return result;
    } catch (error) {
      logger.error({
        operation: "request",
        code: "REQUEST_FAILED",
        durationMs: Math.round(performance.now() - started),
      });
      throw error;
    }
  });
});

const csrfMiddleware = createCsrfMiddleware({
  filter: ({ handlerType }) => handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  requestMiddleware: [requestLogging, csrfMiddleware],
}));
