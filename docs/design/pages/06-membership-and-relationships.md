# 06 · Membership & Relationships

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 06.1 · Manage Membership | Mevcut Collection yolları, Add to Collection, Remove from Collection |
| 06.2 · Add Relationship | Hedef Item arama, related to, derived from, implements, alternative to, supersedes |
| 06.3 · Derive Item | Kaynak Item, yeni içerik ve hedef, derived from, Create Item |

## 06.1 · Manage Membership

**Artboard’lar**

- [ ] `06.1 · Manage Membership · Add · 1440`
- [ ] `06.1 · Manage Membership · Remove · 1440`

### İçerik ve eylemler

Mevcut Collection yolları, Add to Collection, Remove from Collection; son üyelik kalkınca Active Item Inbox; içerik silinmez.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [07-membership](../../specs/07-membership/spec.md).

## 06.2 · Add Relationship

**Artboard’lar**

- [ ] `06.2 · Add Relationship · Select target · 1440`

### İçerik ve eylemler

Hedef Item arama, related to, derived from, implements, alternative to, supersedes; hedefi açma.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [08-relate](../../specs/08-relate/spec.md).

## 06.3 · Derive Item

**Artboard’lar**

- [ ] `06.3 · Derive Item · Derive · 1440`

### İçerik ve eylemler

Kaynak Item, yeni içerik ve hedef, derived from, Create Item; ayrı kimlik; asıl değişmez.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [08-relate](../../specs/08-relate/spec.md).
