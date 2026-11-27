import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    devtools({
      removeDevtoolsOnBuild: true,
      eventBusConfig: { enabled: false },
      consolePiping: { enabled: false },
    }),
    tailwindcss(),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: { files: ["**/*.server.*", "**/server/**", "**/db/**"] },
        server: { files: ["**/*.client.*"] },
      },
    }),
    nitro({ preset: "bun" }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: { tsconfigPaths: true },
  optimizeDeps: { exclude: ["bun"] },
  ssr: { external: ["bun"] },
});
