import type { QueryClient } from "@tanstack/react-query";
import {
  ClientOnly,
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { createIsomorphicFn } from "@tanstack/react-start";
import { lazy, Suspense } from "react";
import type { ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { publicEnv } from "@/env";

import "@/styles.css";

const Devtools = createIsomorphicFn()
  .server(() => null)
  .client(() =>
    import.meta.env.DEV
      ? lazy(async () => await import("@/components/layout/devtools.client"))
      : null
  )();

const RootDocument = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <HeadContent />
    </head>
    <body>
      <AppShell>{children}</AppShell>
      {Devtools && (
        <ClientOnly>
          <Suspense>
            <Devtools />
          </Suspense>
        </ClientOnly>
      )}
      <Scripts />
    </body>
  </html>
);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: publicEnv.VITE_APP_NAME },
      ],
    }),
    shellComponent: RootDocument,
    component: () => <Outlet />,
    notFoundComponent: () => (
      <div>
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <Link to="/" className="text-primary underline">
          Return home
        </Link>
      </div>
    ),
  }
);
