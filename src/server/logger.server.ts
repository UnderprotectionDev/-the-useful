import "@tanstack/react-start/server-only";
import { AsyncLocalStorage } from "node:async_hooks";

import pino from "pino";

import { serverEnv } from "@/env.server";

export const requestContext = new AsyncLocalStorage<{ requestId: string }>();

export const logger = pino({
  level: serverEnv.NODE_ENV === "test" ? "silent" : "info",
  redact: ["authorization", "cookie", "token", "secret", "password"],
  mixin: () => ({ ...requestContext.getStore() }),
});
