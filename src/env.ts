import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const publicEnv = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_APP_NAME: z.string().min(1).default("The Useful Parts"),
  },
  runtimeEnv: { VITE_APP_NAME: import.meta.env.VITE_APP_NAME },
  emptyStringAsUndefined: true,
});
