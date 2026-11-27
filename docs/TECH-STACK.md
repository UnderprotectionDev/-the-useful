# The Useful Parts — Tech Stack

MVP teknoloji seçimleri. Belirtilen sürümler 26.11.2026 tarihinde doğrulanan başlangıç kombinasyonudur; kurulumda uyumluluk kontrol edilip lockfile sabitlenir.

[PRD](PRD.md) · [Proje yapısı](../structure.md)

## Mimari

- Tek paketli, feature-based modüler monolit; TanStack Start içinde Web RPC, MCP ve dosya API'leri. Ortak domain servisleri, DB ve storage adaptörleri; ayrı backend yok.
- `src/features/` altında feature-local `server/`, `hooks/`, `ui/`; route'lar giriş ve kompozisyon katmanı.
- Feature'lar arası erişim `schemas.ts`, `params.ts` ve gerektiğinde `public.ts` / `public.server.ts` üzerinden. Shared UI feature'lara bağımlı olmaz.
- Tek kullanıcıya özel, lokal/VPS ortamlarına taşınabilir.

## Runtime ve veri akışı

| Katman | Teknoloji |
| --- | --- |
| Runtime / paket yöneticisi | Bun 1.4.5 |
| Dil | TypeScript 7.0.2, React 19.3.1, React DOM, uyumlu `@types/bun` ve React tipleri |
| Framework | `@tanstack/react-start` 1.169.7 + `@tanstack/react-router` 1.170.46 |
| Build | Vite 8.3.8 + `@vitejs/plugin-react` 6.3.0 + Start Vite plugin |
| React Compiler | `babel-plugin-react-compiler` 1.0.0, `@rolldown/plugin-babel` 0.3.1, `@babel/core` 8.1.3; `reactCompilerPreset()` |
| Production server | Nitro v3 (3.0.261103-rc), `bun` preset |
| Web RPC | oRPC 2.0.0-beta.53: `@orpc/server`, `@orpc/client`, `@orpc/tanstack-query` |
| Server state | `@tanstack/react-query` 5.108.4 + `@tanstack/react-router-ssr-query` 1.167.3 |
| Form / validation | `@tanstack/react-form` 1.33.5 + Zod 4.6.7 |
| Environment | `@t3-oss/env-core` + Bun native env |
| Autosave / debounce | `@tanstack/react-pacer` 0.24.1 |
| Klavye kısayolları | `@tanstack/react-hotkeys` 0.27.4 |
| Tarih / kimlik | UTC / `timestamptz`, `Intl`, PostgreSQL `uuid`; gerekirse Bun UUIDv7 |

- TypeScript strict, `moduleResolution: Bundler`, `skipLibCheck: true`, `baseUrl` yok; Vite `resolve.tsconfigPaths: true`, `optimizeDeps.exclude: ['bun']`, `ssr.external: ['bun']`. Global CSS root route'ta side-effect import.
- Router URL state, Query server state, React local UI state; ayrı global store yok. Her SSR isteğine ayrı QueryClient.
- oRPC Fetch handler Start server route içinde; `RPCLink` için `origin` + göreli `url`; SSR'da isomorphic/direct router client ve istek context'i.
- Yeni kayıtta açık kaydetme; mevcut kayıtta sıralı ve çakışma kontrollü autosave. Pacer async queue `concurrency: 1`, effect kurulumunda `start()`, Query mutation/invalidation. Env'de server/client ayrımı.

## UI ve editör

| Katman | Teknoloji |
| --- | --- |
| Tasarım sistemi | Tailwind CSS 4.3.5 + `@tailwindcss/vite`, shadcn/ui 4.23.1, `@base-ui/react` 1.9.0, `cn`, `class-variance-authority` ve gereken registry bağımlılıkları |
| Tema / ikon / bildirim | CSS değişkenleri ve erişilebilir design token'ları; `lucide-react`; shadcn Base UI Toast (action/undo, promise) |
| Arayüz dili | İngilizce; native `Intl` ve tutarlı SSR/client locale/timezone. Çok dilli içerik ve arama; i18n runtime yok |
| İçerik editörü | Tiptap 3.35.0: `@tiptap/react`, `@tiptap/core`, `@tiptap/pm`, `@tiptap/starter-kit`, `@tiptap/extension-table` (TableKit), `@tiptap/extension-list` (TaskList/TaskItem), `@tiptap/extension-code-block`, özel asset node'ları |
| Blok ekleme | `@tiptap/suggestion` ile slash menü + toolbar; `@tiptap/extensions` (Placeholder) |
| Syntax highlighting | Shiki 4.6.0 (`shiki/core`, seçili `@shikijs/langs` / `@shikijs/themes`) + `prosemirror-highlight` 0.16.0 |
| Kaynak dosyası editörü | CodeMirror 6: `@codemirror/state`, `view`, `commands`, `language`, `search`, gerekli dil paketleri; dosya bazlı sekmeler ve undo/redo |
| Salt okunur içerik | `@tiptap/static-renderer` (React/Markdown + özel node mapping) |
| Markdown import/export | `@tiptap/markdown` (beta) |
| Ham Markdown önizlemesi | `@tanstack/markdown` 1.2.1, React renderer, `autolinksExtension()`, gerekirse `calloutsExtension()`; ortak Shiki, ham HTML kapalı, tam CommonMark uyumu varsayılmaz |
| Galeri / liste | CSS Grid + React + Query sayfalama; gerekirse TanStack Virtual |
| Görsel inceleme | Thumbnail, native `<img>`, fit-width; `yet-another-react-lightbox` + Zoom, gerekirse Inline/Fullscreen |
| Drag & drop | `@dnd-kit/react` + `@dnd-kit/helpers` 0.5.3 |
| Koleksiyon navigasyonu | shadcn Sidebar + Collapsible + DnD Kit |
| Dosya drop/paste | `react-dropzone` + `@tiptap/extension-file-handler`; ortak upload akışı |
| Command Palette | shadcn Base Command (`cmdk` + Base UI Dialog), `Mod+K`, Pacer + Query/oRPC |
| Resizable layout | `react-resizable-panels` + shadcn Resizable |

- Tiptap JSON versiyonlu; strict Zod attribute doğrulaması ardından ProseMirror `nodeFromJSON().check()`. Özgün Markdown ve dosyalar ayrı korunur; Markdown kayıpsız kaynak formatı varsayılmaz. Asset, dosya metadata'sı ve backtick fence için özel serializer.
- Shiki ortak renklendirme motoru; dil, dosya adı/yolu ve plaintext fallback korunur. Editor için `useEditorState`, Form/Query için seçici abonelikler.
- Tiptap editörü, CodeMirror ve lightbox ihtiyaç halinde lazy-loaded; CodeMirror client-only, terminal/LSP/debugger/kod çalıştırma yok.
- FileHandler `consumePasteEvent: true`; erişilebilir klavye/focus alternatifleri. Command Palette sunucu sonuçlarını yeniden filtrelemez. Base UI tek uygulama primitive katmanı (`cmdk` transitif Radix içerir).

## Veritabanı ve arama

| Katman | Teknoloji |
| --- | --- |
| Database | PostgreSQL 18.7 |
| ORM / migration | Drizzle ORM 0.45.4 + `drizzle-kit` 0.31.11; SQL migration'ları, Better Auth şeması, development-only `auth` CLI ve Drizzle Studio |
| Driver | `Bun.SQL` + `drizzle-orm/bun-sql` |
| Development DB | Neon Free; TCP pooled URL uygulama, direct URL migration/backup/restore |
| Arama | PostgreSQL FTS (`tsvector` / `tsquery`, GIN) + `pg_trgm`; normalize prefix/substring, metadata/etiket filtreleri, `simple` config; gerektiğinde `unaccent` |

Lokal, Neon ve VPS için standart PostgreSQL arayüzü. Ortak domain araması, koleksiyon kapsamı ve tekil sonuçlar; Türkçe/İngilizce teknik terimler ve dosya adları desteklenir.

## Authentication ve MCP

| Katman | Teknoloji |
| --- | --- |
| Web auth | Better Auth 1.7.28 + `@better-auth/drizzle-adapter` + Google OAuth/OIDC |
| Owner | Kontrollü ilk owner kaydı, sabit provider account ID ve owner ID denetimi; herkese açık signup, GitHub login, parola/SMTP yok |
| Ajan erişimi | `@better-auth/api-key`; bağlantıya özgü, hash'lenmiş, iptal edilebilir key; `read` / `create` izinleri |
| MCP | `@modelcontextprotocol/server` 2.4.0 + `@orpc/mcp` 2.0.0-beta.53; `createMcpHandler`, Streamable HTTP |
| Rate limit | `@orpc/ratelimit` 2.0.0-beta.53 + MemoryRateLimiter |

- Saf veri tool'ları `McpRegistrar`; karışık text/image sonuçları doğrudan SDK content blokları. İlk gerçek istemciler Codex ve Claude Code.
- Yetkilendirme ortak server servislerinde; `create` yalnızca atomik yeni kayıt, mevcut Space/koleksiyon altında alt koleksiyon ve aynı bağlantının el değmemiş Ham kaydını revizyon denetimiyle düzeltmeyi kapsar ([ADR-0003](adr/0003-ajan-yazma-siniri.md)). Ajan diğer kayıtları ve koleksiyonları değiştiremez/silemez, tutum ve durum belirleyemez, owner session oluşturamaz. Dosya erişimi aynı izin modeline uyar.
- Ajan anahtar kotası ve uygulama rate limit'i ayrı. RPC/MCP/raw HTTP ortak limit politikası; tek instance bellek içi limiter, Redis yok. Sonlu, yenilenmeyen kota tükenince key kaydının silinebileceği dikkate alınır. OAuth ayarları ortam bazlı.

## Medya, dosyalar ve export

| Katman | Teknoloji |
| --- | --- |
| Upload/download | Fetch, FormData, Blob, Web Streams, Start server routes; progress gerekirse XHR |
| Lokal storage | `Bun.file`, `Bun.write`, `node:fs/promises`; private dizin, DB metadata ve storage key |
| Object storage | `Bun.S3Client` (S3-compatible / Cloudflare R2) |
| Dosya doğrulama | `file-type` 22.3.0, binary signature, native SHA-256 ve encoding doğrulaması |
| Görsel işleme | `sharp` 0.35.5; metadata, format doğrulaması ve thumbnail |
| Link preview | Native fetch + `HTMLRewriter` + `entities`; başlık, açıklama, site, favicon, OG/Twitter image |
| HTML sunumu | Tiptap schema ve React text rendering / custom node mapping |
| Export / ZIP yükleme | `@zip.js/zip.js` 2.25.0; streaming/ZIP64, `useWebWorkers: false`; export ve koleksiyon paketi için JSON manifest + Markdown + orijinal dosyalar; ZIP yüklemede göreli yolları koruyarak açma ve sistem/bağımlılık dosyalarını atlama |

- Özgün byte'lar, encoding, BOM, CRLF ve whitespace korunur; thumbnail/highlight türetilen çıktıdır. CodeMirror `EditorState.lineSeparator` + `sliceDoc()`; karma satır sonları ayrıca doğrulanır. MCP/export güncel kaynak dosyalarını kullanır.
- Merkezi HTTP erişim politikası, süre/boyut/yönlendirme kontrolleri. Metadata best-effort; hata kaydı engellemez, kullanıcı alanlarının üzerine yazılmaz. Crawler veya harici preview servisi yok.
- Yetkili private asset endpoint'leri. İmzasız metin encoding ile değerlendirilir; desteklenmeyen ikili formatlar, video/PDF attachment veya link olarak saklanır.

## Test ve geliştirme araçları

| Katman | Teknoloji |
| --- | --- |
| Unit / integration | `bun:test`, izole gerçek PostgreSQL, storage contract testleri |
| UI test | `@testing-library/react`, `@testing-library/dom`, `@testing-library/user-event`, `happy-dom` |
| E2E / erişilebilirlik | `@playwright/test` 1.65.1 (Chromium, gerekirse Firefox/WebKit) + `@axe-core/playwright` |
| UI geliştirme | Gerçek route'lar ve screenshot testleri; gerektiğinde Playwright `mount()` + dev/test-only gallery ve feature-local `*.story.tsx` |
| MCP test | `@modelcontextprotocol/client` 2.4.0, MCP Inspector, Codex ve Claude Code |
| Lint / format | Ultracite 8.3.1 + Oxlint 1.95.0 (core/react/tanstack preset'leri), `oxlint-tsgolint` 7.0.2008; Oxfmt 0.80.0 + Ultracite preset |
| Typecheck / kullanılmayan kod | `tsc --noEmit` + Knip 6.48.0 |
| Modül sınırları | Oxlint `eslint/no-restricted-imports` (feature override), `import/no-relative-parent-imports` (feature/shared UI), `import/no-cycle`; Start import protection (dev/build error) |
| AI geliştirme araçları | `@tanstack/intent` + kısa, projeye özel `AGENTS.md` |
| Devtools | `@tanstack/react-devtools`, `@tanstack/devtools-vite`, `@tanstack/react-query-devtools`, `@tanstack/react-router-devtools`, autosave ile `@tanstack/react-pacer-devtools` |
| Log | Pino 10.4.0 + `AsyncLocalStorage` (JSON stdout, request ID, error mapping, redaction) |
| Git hooks | Native Git `core.hooksPath` + `.githooks/pre-commit`; check ve typecheck, otomatik fix/stage yok |
| CI / güncellemeler | GitHub Actions (repo kurulunca), frozen install, check, typecheck, Knip, izole DB testleri, build; Dependabot ile ilişkili paket grupları |

- Bun hoisted install; `esbuild` 0.28.2 development-only peer pin, Drizzle Kit kendi 0.25.x sürümünü kullanır.
- `@/` alias, aynı/alt dizinlerde göreli import. Import protection `*.server.*`, `*.client.*`, server/db dizinlerini kapsar.
- Devtools development-only, client-only, lazy-loaded; Vite plugin ilk sırada, `removeDevtoolsOnBuild: true`, event bus/console piping kapalı.
- Ortak `bun run check`, `fix`, `typecheck`, `test`, `verify` komutları; seçili güvenilir ve kurulu sürüme uygun Intent skill'leri. Zorunlu post-edit hook yok.
- Loglarda işlem/sonuç/süre/hata kodu; token, secret, özel içerik, ham payload veya SQL parametreleri yok.

## Geliştirme ve dağıtım

| Ortam | Karar |
| --- | --- |
| Development | Lokal Bun + Neon Free + lokal filesystem |
| Production | Portable Bun Docker image + Docker Compose, private storage, healthcheck, TLS/reverse proxy |
| Hosting | Yayın öncesi VPS/Coolify veya Railway; şimdilik satın alma yok |
| Backup | `pg_dump` / `pg_restore` + eşleşen asset backup ve restore testi |
| Log saklama | Docker retention/rotation |

Ortam verileri ayrıdır. Operational backup kullanıcı ZIP export'undan bağımsızdır.

## Koşullu alternatifler

| Birincil seçim | Alternatif (ihtiyaç veya uyumsuzluk halinde) |
| --- | --- |
| Nitro | `Bun.serve` |
| oRPC v2 beta | Tüm oRPC paketlerinde kararlı v1 + MCP SDK v2 |
| Bun SQL | `postgres` (Postgres.js) + `drizzle-orm/postgres-js` |
| MemoryRateLimiter | `rate-limiter-flexible` (`RateLimiterMemory`) + oRPC middleware |
| Shiki | `@tiptap/extension-code-block-lowlight` + `lowlight` |
| Native CodeMirror React adaptörü | `@uiw/react-codemirror` |
| Sidebar + DnD Kit | Headless Tree |
| Bun S3Client | `@aws-sdk/client-s3` |
| HTMLRewriter / HTML render | Cheerio/open-graph-scraper (parse-only), gerekirse `sanitize-html` |
| Tek arayüz dili | Paraglide JS; RPC/MCP ve kaynak URL'leri locale'den bağımsız |
| Pino development çıktısı | `pino-pretty` |

**Ertelenenler:** TanStack Table (tablo görünümü), Form/Hotkeys/A11y Devtools (Solid peer uyumu), TanStack ESLint JS-plugin paketleri (TS7 uyumu), React Doctor ve `@shadcn/lint` (ihtiyaç), Oxc native React Compiler (kararlılık).

**MVP dışı:** TanStack DB/Store/AI/Charts/Highlight, Storybook/Ladle, dependency graph/hook yöneticisi, Anti-slop/SonarJS/GitHub lint plugin'leri, devtools custom event client, WebMCP/AI Devtools, ayrı queue/worker ve harici observability.

## PRD gereksinimlerinin teknik karşılığı

Aşağıdaki MVP gereksinimlerinde temel araçlar mevcut olsa da uygulama sözleşmesi eksikti. Yaklaşımlar teknik tasarım için başlangıç noktasıdır. Dosya aktarım yolu gerçek istemci prototipinin sonucuna bağlıdır.

| PRD | Mevcut yığınla yaklaşım | Açık karar veya doğrulama |
| --- | --- | --- |
| FR-05, FR-31 · Hızlı kayıt ve kopyalama | React, mevcut drop/paste akışı, Hotkeys ve Command Palette; tarayıcı panosuna kullanıcı eylemiyle yazma | Editör ve hızlı kayıt olay önceliği, metin/kod/URL ayrımı, karma kayıtta hangi metnin kopyalanacağı ve tarayıcıda kopyalama başarısızlığının davranışı |
| FR-02, FR-03, FR-06, FR-16, FR-24 · Hiyerarşi ve tekrar kontrolü | PostgreSQL recursive CTE ve Drizzle; kardeş adlarının DB kısıtı, üyelik ve arama kapsamı için ortak sorgular, URL eşleşmesi için indeks | Kök ve kardeş adlarının karşılaştırma kuralları, URL normalizasyonu ve birden fazla eşleşmenin sunumu. Eşzamanlı taşımada döngü kontrolü ve aynı URL kontrolünün eşzamanlı yazma davranışı |
| FR-09, FR-11, FR-25 · Yaşam döngüsü, doğrulama, revizyon | PostgreSQL işlemleri ve koşullu güncelleme; kayıt revizyonu, önceki doğrulama bilgisi ve kalıcı ajan düzenleme kilidi | Hangi kullanıcı işlemlerinin revizyonu ilerlettiği, ortak dosyaların kalıcı silinmesinde referans yönetimi ve yarım kalan temizliğin yeniden denenmesi |
| FR-16, FR-20 · Arama | PostgreSQL FTS ve trigram ile ortak arama; kayıt alanlarından ve saklanan metin/koddan arama dokümanı üretme | Tiptap ve metin dosyalarından indekslenecek içerik, metin boyutu, sıralama, güncelleme zamanı ve sayfalama |
| FR-22–FR-23, FR-25, FR-27–FR-28 · MCP medya ve dosya aktarımı | MCP SDK, yetkili HTTP dosya uçları, geçici dosya hazırlama ve görünür kayıt/üyelik/ilişkileri tek DB işlemiyle yayımlama | Codex ve Claude Code'da gerçek görseli ve dosya baytlarını okuma/yükleme yolu. Dosya yükleme hazırlığının bağlantıya bağlanması, başarısız yazma temizliği, tekrar deneme ve iptal sonrası eski dosya adreslerinin denetimi |
| FR-29, FR-30, FR-32 · Klasör/ZIP, dosya ağacı ve paketler | Tarayıcının klasör seçme/bırakma verileri, React dosya ağacı, ortak göreli yol doğrulaması ve zip.js. Dışa aktarımda Markdown, sürümlü JSON manifest ve özgün dosyalar | Desteklenen tarayıcılar, dosya/sıkıştırma sınırları, yol ve ad çakışmaları, dışa aktarım sırasında tutarlılık ve kimliklerin pakette doğru çözüldüğünün byte ve manifest kontrolleri |
| FR-21, FR-22, FR-33 · Görsel bölge yorumları | React ve görsel üzerinde normalize dikdörtgen koordinatları; yorumun görsel kimliğiyle saklanması, MCP'de aynı referansın dönmesi | Döndürme/yakınlaştırma davranışı, görsel değiştirilince yorumların durumu ve klavyeyle düzenleme |
| FR-21, FR-31, FR-34 · Parametreli şablon | Ortak TypeScript ayrıştırıcı ve Zod doğrulaması; Tiptap, Command Palette, MCP ve dışa aktarımda aynı özgün şablon ve değişken tanımı | Kesin sözdizimi, kaçış, aynı değişkenin tekrarı ve varsayılanı olmayan alanların davranışı |

## Doğrulama ve açık kararlar

**Lokal doğrulama (26.11.2026, macOS ARM64):** Frozen install, peer uyumu, strict typecheck, Start/Nitro standalone build, Bun SQL + PostgreSQL 18.7 (SCRAM/TLS, migration/transaction, FTS, auth, backup/restore), MCP SDK istemcileri, byte bütünlüğü ve 31/31 development + 31/31 production kontrolü geçti (20 editör/UI kontrolü dahil). Oxlint sınırları, native Git hook ve Playwright `mount()` da ayrı fixture'larda doğrulandı. Gerçek uzak servisler ve ürün kabul testleri henüz yapılmadı.

**Implementasyon öncesi:** [PRD §14.0](PRD.md#140-teknik-doğrulama--küçük-mcp-prototipi) uyarınca gerçek Codex ve Claude Code ile MCP prototipi; arama/okuma, gerçek görsel inceleme, çok dosyalı kod, yetkili HTTP upload ve yeni kayıt, byte bütünlüğü ve erişim sınırları doğrulanır.

**Açık kararlar:**

- UI tasarım dili ve tema.
- Tiptap özel blok şeması, Markdown round-trip ve dosya encoding/line-ending politikası.
- Neon pooled/direct ve uzak TLS, Google OAuth, gerçek R2 (yalnız lokal stub test edildi), Linux Docker/Sharp. Arama indeksi ve kesin paket sürümleri.
- Dosya boyut limitleri, performans eşikleri ve gerçek MCP istemci desteği.
- Production host, packaging, operational backup/restore ve deployment ayrıntıları.

RC, beta ve 0.x paketler kurulumda yeniden kontrol edilir.
