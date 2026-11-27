import { createFileRoute, getRouteApi } from "@tanstack/react-router";

import { getRuntime } from "@/features/foundation/runtime";
import { statusSearch } from "@/features/foundation/schemas";
import { StatusView } from "@/features/foundation/ui/views/status-view";
import { rpcQuery } from "@/lib/orpc/query";

const statusRoute = getRouteApi("/status");

const StatusPage = () => (
  <StatusView
    search={statusRoute.useSearch()}
    runtime={statusRoute.useLoaderData()}
  />
);

export const Route = createFileRoute("/status")({
  ssr: true,
  validateSearch: statusSearch,
  loaderDeps: ({ search }) => ({ view: search.view }),
  loader: async ({ context, deps }) => {
    await context.queryClient.query(
      rpcQuery.foundation.status.queryOptions({ input: deps })
    );
    return await getRuntime();
  },
  component: StatusPage,
});
