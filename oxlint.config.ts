import { readdirSync } from "node:fs";

import { defineConfig } from "oxlint";
import type { OxlintOverride } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";
import tanstack from "ultracite/oxlint/tanstack";

const features = readdirSync(new URL("src/features", import.meta.url), {
  withFileTypes: true,
})
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

export default defineConfig({
  env: core.env,
  extends: [core, react, tanstack],
  ignorePatterns: [
    ...core.ignorePatterns,
    "**/test-results",
    "**/playwright-report",
  ],
  rules: {
    "import/no-cycle": "error",
  },
  overrides: [
    {
      files: ["src/features/**/*.{ts,tsx}", "src/components/**/*.{ts,tsx}"],
      rules: { "import/no-relative-parent-imports": "error" },
    },
    {
      files: ["src/components/**/*.{ts,tsx}"],
      rules: {
        "eslint/no-restricted-imports": [
          "error",
          {
            patterns: [
              "@/features/**",
              "@/lib/orpc/**",
              "@/server/**",
              "@/db/**",
              "@/routes/**",
            ],
          },
        ],
      },
    },
    ...features.map((feature): OxlintOverride => ({
      files: [`src/features/${feature}/**/*.{ts,tsx}`],
      rules: {
        "eslint/no-restricted-imports": [
          "error",
          {
            patterns: [
              "@/routes/**",
              "@/server/orpc/**",
              "@/server/mcp/**",
              {
                group: [
                  "@/features/**",
                  `!@/features/${feature}/**`,
                  "!@/features/*/schemas",
                  "!@/features/*/params",
                  "!@/features/*/public",
                  "!@/features/*/public.server",
                ],
                message:
                  "Use the owning feature's schemas, params or public interface.",
              },
            ],
          },
        ],
      },
    })),
  ],
});
