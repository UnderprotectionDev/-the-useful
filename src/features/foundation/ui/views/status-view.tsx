import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, useHydrated } from "@tanstack/react-router";
import { CircleCheck, RefreshCw } from "lucide-react";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import type { statusSearch } from "@/features/foundation/schemas";
import { rpcQuery } from "@/lib/orpc/query";

export const StatusView = ({
  search,
  runtime,
}: {
  search: z.infer<typeof statusSearch>;
  runtime: { runtime: string; version: string };
}) => {
  const hydrated = useHydrated();
  const { data, refetch, isFetching } = useSuspenseQuery(
    rpcQuery.foundation.status.queryOptions({ input: search })
  );
  return (
    <section className="max-w-xl space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">
        Application status
      </h1>
      <p className="text-muted-foreground">
        Verify the application framework and API integration.
      </p>
      <div className="flex gap-4 text-sm" aria-label="Status view">
        <Link
          to="/status"
          search={{ view: "summary" }}
          activeProps={{ className: "text-primary font-semibold underline" }}
          activeOptions={{ includeSearch: true, exact: true }}
        >
          Summary
        </Link>
        <Link
          to="/status"
          search={{ view: "details" }}
          activeProps={{ className: "text-primary font-semibold underline" }}
          activeOptions={{ includeSearch: true, exact: true }}
        >
          Details
        </Link>
      </div>
      <div className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground">
        <p
          className="flex items-center gap-2 font-medium text-primary"
          aria-live="polite"
        >
          <CircleCheck aria-hidden="true" className="size-5" /> API{" "}
          {data.status}
        </p>
        <p>
          Runtime: {runtime.runtime} {runtime.version}
        </p>
        {data.view === "details" && (
          <p className="text-sm break-all text-muted-foreground">
            Request ID: <span data-testid="request-id">{data.requestId}</span>
          </p>
        )}
        <Button
          type="button"
          variant="outline"
          disabled={!hydrated || isFetching}
          onClick={() => {
            void refetch();
          }}
        >
          <RefreshCw aria-hidden="true" /> Refresh status
        </Button>
      </div>
    </section>
  );
};
