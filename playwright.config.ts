import { defineConfig, devices } from "@playwright/test";

const development = process.env.E2E_MODE === "development";
const port = development ? 4174 : 4173;
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  use: { baseURL, trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: development
      ? `bun run dev --host 127.0.0.1 --port ${port} --strictPort`
      : "bun run start",
    env: {
      PORT: String(port),
      HOST: "127.0.0.1",
      NODE_ENV: development ? "development" : "production",
    },
    url: `${baseURL}/api/health`,
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
