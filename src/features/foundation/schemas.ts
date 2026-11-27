import { z } from "zod";

export const statusInput = z.object({
  view: z.enum(["summary", "details"]),
});

export const statusSearch = z.object({
  view: statusInput.shape.view.catch("summary").default("summary"),
});

export const statusOutput = z.object({
  status: z.literal("ready"),
  view: statusInput.shape.view,
  requestId: z.uuid(),
});
