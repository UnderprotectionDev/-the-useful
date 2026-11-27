# The Useful Parts

## Task context

- Feature work: find the ticket in the [spec index](docs/specs/README.md), read its spec and ticket, and keep implementation within its scope.
- UI work: use the [design map](docs/design/README.md) to find the screen docs covering the current ticket.
- Architecture or dependencies: read [Tech Stack](docs/TECH-STACK.md) and [Structure](structure.md) before changes. Add dependencies only when the current ticket needs them; use documented versions where specified.
- Collection hierarchy, Item state or Agent write permissions: read the matching [ADR](docs/adr/) before changes.
- Module boundaries, file placement and test layout: follow [Structure](structure.md).
- Domain terminology: use [Glossary](GLOSSARY.md) terms and English UI copy.
- TanStack, Ultracite or other Intent-enabled integrations: run `bun run intent list` and load applicable skills via `bun run intent load <package>#<skill>`. Verify dependency APIs against locked versions.

## Implementation

- Keep routes thin. Router owns URL state, Query owns server state, React owns local UI state. Create a QueryClient per SSR request. Prefer oRPC for application procedures and Start server functions for framework-local calls.
- Keep modules feature-local; cross-feature imports use schemas, params or public entry points. Keep shared UI feature-independent.
- Use `@/` for parent imports. Place server-only code in `*.server.*`, `server/` or `db/`; place client-only code in `*.client.*`.
- `src/routeTree.gen.ts` is generated output: change `src/routes/` and let Vite regenerate it.
- Log operational metadata only; exclude secrets, raw user content and payloads.

## Verification

- Set up the verification environment as needed using [README](README.md#verification).
- Before handoff, check every applicable ticket acceptance criterion and run `bun run verify`. Report any failed or unverified checks.
