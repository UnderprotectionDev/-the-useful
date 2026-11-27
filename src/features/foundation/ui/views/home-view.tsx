import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { publicEnv } from "@/env";

export const HomeView = () => (
  <section className="max-w-xl space-y-6">
    <p className="text-sm font-medium text-primary">Application foundation</p>
    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
      {publicEnv.VITE_APP_NAME}
    </h1>
    <p className="text-lg leading-relaxed text-muted-foreground">
      A personal library for knowledge and reusable parts. The foundation is in
      place; library features will follow.
    </p>
    <Link
      to="/status"
      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
    >
      Check application status{" "}
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  </section>
);
