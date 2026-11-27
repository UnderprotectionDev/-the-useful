import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  ignorePatterns: [
    ...ultracite.ignorePatterns,
    "docs/**",
    "GLOSSARY.md",
    "structure.md",
    "test-results/**",
    "playwright-report/**",
  ],
  sortTailwindcss: {
    ...ultracite.sortTailwindcss,
    stylesheet: "./src/styles.css",
  },
});
