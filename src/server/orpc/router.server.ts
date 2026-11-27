import "@tanstack/react-start/server-only";
import { status } from "@/features/foundation/public.server";

export const rpcRouter = { foundation: { status } };
