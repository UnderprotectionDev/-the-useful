import { Link } from "@tanstack/react-router";
import { Layers } from "lucide-react";
import type { ReactNode } from "react";

import { publicEnv } from "@/env";

export const AppShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen">
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Layers aria-hidden="true" className="size-5 text-primary" />
          {publicEnv.VITE_APP_NAME}
        </Link>
        <nav aria-label="Main navigation" className="flex gap-5 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "font-semibold text-primary" }}
          >
            Home
          </Link>
          <Link
            to="/status"
            activeProps={{ className: "font-semibold text-primary" }}
          >
            Status
          </Link>
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-5xl px-6 py-14">{children}</main>
  </div>
);
