import { createServerFn } from "@tanstack/react-start";

export const getRuntime = createServerFn({ method: "GET" }).handler(() => ({
  runtime: "Bun",
  version: Bun.version,
}));
