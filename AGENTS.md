# The Useful Parts

- Read [docs/TECH-STACK.md](docs/TECH-STACK.md) and [structure.md](structure.md) before architectural or dependency changes; use [GLOSSARY.md](GLOSSARY.md) for domain terms and [docs/adr/](docs/adr/) for decisions.
- Before feature work, read its spec and ticket in `docs/specs/`. Keep later tickets out of scope.
- For substantial integration work, run `bun run intent list` and load applicable installed skills with `bun run intent load <package>#<skill>`. Verify APIs against the locked package version.
- Keep routes thin: Router owns URL state, Query owns server state, React owns local UI state. Create a QueryClient per SSR request. Prefer oRPC for application procedures and Start server functions for framework-local calls.
- Use feature-local server, hooks and UI modules. Cross-feature imports use schemas, params or public entry points; shared UI has no feature dependencies. Use the `@/` alias for parent imports and environment-specific server/client boundaries.
- Keep English UI terminology and never log secrets, raw user content or payloads.
- Co-locate unit tests; use `tests/integration/` for cross-module tests and `tests/e2e/` for browser flows. Run `bun run verify` before handoff. Use `bun run hooks` to enable the native pre-commit hook.
- Preserve generated route tree ownership; regenerate through Vite, not manual edits. Add dependencies and directories when the current ticket needs them.
