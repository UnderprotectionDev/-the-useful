# 00 · Shared Shell

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 00.1 · Library shell | Library, All Items, Inbox, Trash, Search, New Item |
| 00.2 · Collection tree | Design, Engineering, Product, AI & Workflows |
| 00.3 · Account navigation | Sign out, Agent connections, Settings, Unreviewed agent items |

## 00.1 · Library shell

**Artboard’lar**

- [ ] `00.1 · Library shell · Default · 1440`
- [ ] `00.1 · Library shell · Narrow · TBD`

### İçerik ve eylemler

Library, All Items, Inbox, Trash, Search, New Item; Space ağacı, aktif Collection yolu; klavye ile gezinme ve odak iadesi.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [15-navigation](../../specs/15-navigation/spec.md).

## 00.2 · Collection tree

**Artboard’lar**

- [ ] `00.2 · Collection tree · Expanded · 1440`

### İçerik ve eylemler

Design, Engineering, Product, AI & Workflows; iç içe Collection, Create, Rename, Move; aynı adlı farklı Collection için tam yol.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [02-organize](../../specs/02-organize/spec.md) · [15-navigation](../../specs/15-navigation/spec.md).

## 00.3 · Account navigation

**Artboard’lar**

- [ ] `00.3 · Account navigation · Menu open · 1440`

### İçerik ve eylemler

Sign out, Agent connections, Settings, Unreviewed agent items; her giriş ilgili ticket fazında eklenir.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [01-private-access](../../specs/01-private-access/spec.md) · [17-agent-connections](../../specs/17-agent-connections/spec.md) · [23-review-agent-items](../../specs/23-review-agent-items/spec.md) · [30-library-export](../../specs/30-library-export/spec.md).
