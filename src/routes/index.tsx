import { createFileRoute } from "@tanstack/react-router";

import { HomeView } from "@/features/foundation/ui/views/home-view";

export const Route = createFileRoute("/")({
  ssr: true,
  component: HomeView,
});
