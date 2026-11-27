# The Useful Parts

Application foundation for a private personal library. Product behavior is defined in [the PRD](docs/PRD.md), with architecture and implementation conventions in [the tech stack](docs/TECH-STACK.md) and [project structure](structure.md).

## Local development

Use Bun 1.4.5 and Node.js 24 (for development CLI tools). No database, credentials or other services are required for the foundation.

```sh
bun install --frozen-lockfile
bun run hooks
bun run dev
```

Open the URL printed by Vite. The home page and `/status?view=details` exercise SSR, validated URL state, native Start server functions, and oRPC/Query. The status page is a temporary integration check, not library functionality. `/api/health` is a minimal process health endpoint.

Optional configuration is documented in `.env.example`. Only `VITE_` variables are public build inputs; server configuration is read and validated separately at runtime.

## Verification

```sh
bunx --no-install playwright install chromium
bun run verify
```

`verify` runs type-aware lint, formatting checks, strict TypeScript, Knip, Bun unit/integration tests, Nitro production build and Playwright against both production and development servers. Use `bun run fix` for lint/format fixes or `bun run format` for formatting alone. The pre-commit hook runs check and typecheck without changing or staging files.

## Production

```sh
bun run build
bun run start
```

Nitro emits a standalone Bun server under `.output/`. Set `HOST` and `PORT` as needed. No separate backend is required. The default Start server entry uses the framework's streaming SSR handler.

## Integration notes

- All versioned stack packages needed for this foundation use their documented versions. Unspecified versions are pinned in `package.json` and all resolutions are locked in `bun.lock`. Feature-specific tools (including auth, database and editor libraries) remain deferred.
- The shadcn Base UI button is registry-generated with the project's shared `cn` helper. Use the installed shadcn CLI and `components.json` when adding more components.
- TanStack Start creates the router and QueryClient per request; SSR calls oRPC directly with the active request context. Browser calls use the same typed router through Fetch.
- The status page and RPC procedure are intentionally unauthenticated and contain no user data. The private-access ticket governs the access boundary for product functionality.
