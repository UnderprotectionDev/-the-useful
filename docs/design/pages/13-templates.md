# 13 · Templates

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 13.1 · Template detail | Reusable Part şablonu |
| 13.2 · Template editing | Özgün metin ve değişken tanımlarını düzenleme |

## 13.1 · Template detail

**Artboard’lar**

- [ ] `13.1 · Template detail · Fill variables · 1440`
- [ ] `13.1 · Template detail · Filled output · 1440`

### İçerik ve eylemler

Reusable Part şablonu; özgün metin, {{name}}, {{name:default}}, değerler, çıktı, Copy; Reference ayrımı; Revision değişmez.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [29-templates](../../specs/29-templates/spec.md).

## 13.2 · Template editing

**Artboard’lar**

- [ ] `13.2 · Template editing · Editing · 1440`

### İçerik ve eylemler

Özgün metin ve değişken tanımlarını düzenleme; 05 Edit Item desenini kullan; doldurmadan ayrı.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [29-templates](../../specs/29-templates/spec.md) · [09-manage](../../specs/09-manage/spec.md).
