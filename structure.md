# The Useful Parts — Proje yapısı

[PRD](docs/PRD.md) · [Tech Stack](docs/TECH-STACK.md)

Tek paketli, feature-based modüler monolit için hedef yapı. Dosya ve klasörler ilgili özellik geliştirilirken oluşturulur; boş şablon klasörler oluşturulmaz.

```text
.
├── .githooks/
│   └── pre-commit
├── docs/
│   ├── PRD.md
│   └── TECH-STACK.md
├── drizzle/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── db/
│   │   ├── schema/
│   │   └── client.server.ts
│   ├── features/
│   │   ├── agent-access/
│   │   │   ├── hooks/
│   │   │   ├── server/
│   │   │   ├── ui/
│   │   │   │   ├── components/
│   │   │   │   ├── forms/
│   │   │   │   └── views/
│   │   │   ├── public.server.ts
│   │   │   └── schemas.ts
│   │   ├── assets/
│   │   │   ├── hooks/
│   │   │   ├── server/
│   │   │   ├── public.ts
│   │   │   ├── public.server.ts
│   │   │   └── schemas.ts
│   │   ├── auth/
│   │   │   └── ui/
│   │   │       └── views/
│   │   ├── collections/
│   │   │   ├── hooks/
│   │   │   ├── server/
│   │   │   ├── ui/
│   │   │   │   ├── components/
│   │   │   │   ├── forms/
│   │   │   │   └── views/
│   │   │   ├── params.ts
│   │   │   ├── public.ts
│   │   │   ├── public.server.ts
│   │   │   └── schemas.ts
│   │   ├── export/
│   │   │   ├── server/
│   │   │   ├── ui/
│   │   │   │   └── components/
│   │   │   ├── public.ts
│   │   │   └── public.server.ts
│   │   ├── inbox/
│   │   │   ├── hooks/
│   │   │   ├── server/
│   │   │   └── ui/
│   │   │       └── views/
│   │   ├── items/
│   │   │   ├── content/
│   │   │   ├── hooks/
│   │   │   ├── server/
│   │   │   ├── ui/
│   │   │   │   ├── components/
│   │   │   │   │   ├── content/
│   │   │   │   │   └── editor/
│   │   │   │   ├── forms/
│   │   │   │   └── views/
│   │   │   ├── public.ts
│   │   │   ├── public.server.ts
│   │   │   └── schemas.ts
│   │   ├── library/
│   │   │   └── ui/
│   │   │       ├── components/
│   │   │       └── views/
│   │   ├── search/
│   │   │   ├── hooks/
│   │   │   ├── server/
│   │   │   ├── ui/
│   │   │   │   ├── components/
│   │   │   │   └── views/
│   │   │   ├── params.ts
│   │   │   ├── public.ts
│   │   │   ├── public.server.ts
│   │   │   └── schemas.ts
│   │   ├── settings/
│   │   │   └── ui/
│   │   │       └── views/
│   │   ├── spaces/
│   │   │   ├── hooks/
│   │   │   ├── server/
│   │   │   ├── ui/
│   │   │   │   ├── components/
│   │   │   │   ├── forms/
│   │   │   │   └── views/
│   │   │   ├── public.ts
│   │   │   ├── public.server.ts
│   │   │   └── schemas.ts
│   │   └── trash/
│   │       ├── hooks/
│   │       ├── server/
│   │       └── ui/
│   │           ├── components/
│   │           └── views/
│   ├── lib/
│   │   ├── auth/
│   │   │   ├── auth.server.ts
│   │   │   └── client.ts
│   │   └── orpc/
│   │       ├── client.ts
│   │       └── query.ts
│   ├── routes/
│   │   ├── _owner/
│   │   │   ├── agent-access.tsx
│   │   │   ├── collections.$collectionId.tsx
│   │   │   ├── inbox.tsx
│   │   │   ├── index.tsx
│   │   │   ├── items.$itemId.tsx
│   │   │   ├── items.new.tsx
│   │   │   ├── route.tsx
│   │   │   ├── search.tsx
│   │   │   ├── settings.tsx
│   │   │   ├── spaces.$spaceId.tsx
│   │   │   └── trash.tsx
│   │   ├── api/
│   │   │   ├── assets.$assetId.ts
│   │   │   ├── assets.upload.ts
│   │   │   ├── auth.$.ts
│   │   │   ├── export.ts
│   │   │   ├── health.ts
│   │   │   ├── mcp.ts
│   │   │   └── rpc.$.ts
│   │   ├── __root.tsx
│   │   └── login.tsx
│   ├── server/
│   │   ├── access/
│   │   ├── mcp/
│   │   ├── orpc/
│   │   │   └── router.server.ts
│   │   ├── storage/
│   │   │   ├── storage.server.ts
│   │   │   ├── local-storage.server.ts
│   │   │   └── s3-storage.server.ts
│   │   └── logger.server.ts
│   ├── env.server.ts
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   ├── start.ts
│   └── styles.css
├── tests/
│   ├── e2e/
│   └── integration/
├── .env.example
├── .gitignore
├── AGENTS.md
├── bun.lock
├── bunfig.toml
├── components.json
├── drizzle.config.ts
├── knip.json
├── oxfmt.config.ts
├── oxlint.config.ts
├── package.json
├── playwright.config.ts
├── structure.md
├── tsconfig.json
└── vite.config.ts
```

## Sorumluluklar

- `features/*/server/`: feature'ın domain işlemleri ve oRPC procedure'ları; ince transport girişleri için ortak callable işlemler.
- `public.ts` ve `public.server.ts`: yalnız başka feature veya ortak transport tarafından kullanılan açık arayüzler; client/server export'ları karıştırılmaz, ihtiyaç olmayan feature'a eklenmez. `schemas.ts` ve `params.ts` ortamdan bağımsızdır.
- `items/content/`: Tiptap node/schema, ortak serialization ve içerik/renklendirme mantığı. `items/ui/components/content/` salt okunur Tiptap/TanStack Markdown görünümü; `editor/` Tiptap ve CodeMirror düzenleme yüzeyleri.
- `items` kayıt, kaynak, etiket, ilişki ve durum işlemlerini; `collections` hiyerarşi ve üyelikleri; `assets` ortak upload, dosya doğrulama ve görsel işleme işlemlerini yönetir. Inbox, Trash, Library ve Settings ilgili feature arayüzlerini kullanır; ortak kayıt mantığı kopyalanmaz.
- `lib/auth/`: Better Auth yapılandırması ve web client; `lib/orpc/`: isomorphic RPC client ve Query yardımcıları. `server/access/`: owner/ajan erişim politikası. `server/mcp/` ve `server/orpc/`: transport kompozisyonu; feature'lar bu kompozisyon katmanına bağımlı olmaz.
- `server/storage/`: lokal ve S3 adaptörlerinin ortak arayüzü. `start.ts`: global request middleware; Pino/ALS context. `__root.tsx`: ortak uygulama shell ve CSS; `router.tsx`: SSR QueryClient entegrasyonu. Route'lar domain mantığı içermez.
- `components/ui/` shadcn/Base UI primitive'leri, feature bağımlılığı yoktur. Shared layout feature internallerini import etmez. `@/` alias ve Oxlint sınır kuralları kullanılır.
- Unit testler ilgili modülün yanında `*.test.ts(x)`; ortak PostgreSQL, MCP ve storage entegrasyonları `tests/integration/`, kullanıcı akışları `tests/e2e/`. `public/` sadece uygulama statik dosyaları içindir; kullanıcı medyası ve gerçek `.env` dosyaları Git dışında tutulur.

## Gerektiğinde eklenecekler

```text
.github/
├── workflows/
│   └── ci.yml
└── dependabot.yml
playwright/
└── gallery/
tests/
└── components/
Dockerfile
compose.yaml
```

GitHub dosyaları repo oluşturulduğunda; Playwright gallery ve feature-local `*.story.tsx` izole bileşen testleri gerektiğinde; Docker dosyaları production dağıtımı hazırlanırken eklenir.
