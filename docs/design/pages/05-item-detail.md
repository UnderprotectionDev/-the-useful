# 05 · Item Detail

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 05.1 · Item detail | Title, Description, Item type, Content |
| 05.2 · Item metadata | Tags, Membership, Relationships, Stance, Maturity, Validity, Lifecycle ayrı |
| 05.3 · Edit Item | Title, Description, Item type, Content, Source, Notes, Tags, usage, scope, compatibility |
| 05.4 · Image inspection | Asıl görsel, zoom, fit, Download |

## 05.1 · Item detail

**Artboard’lar**

- [ ] `05.1 · Item detail · Mixed content · 1440`
- [ ] `05.1 · Item detail · Text only · 1440`
- [ ] `05.1 · Item detail · Image reference · 1440`

### İçerik ve eylemler

Title, Description, Item type, Content; Source, Notes, Origin, ayrı Agent/AI açıklaması, Membership, usage, scope, created/updated; Copy, Download, Open source.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- İçerik türüne uygun öncelikli eylemler, gerektiğinde diğer özellikler; harici link ile saklanan özgün dosya ayrımı. Uzun kod, görsel alt metni, başarısız medya erişimi ve kopya/indirme geri bildirimi.

**Spec:** [05-detail](../../specs/05-detail/spec.md).

## 05.2 · Item metadata

**Artboard’lar**

- [ ] `05.2 · Item metadata · With metadata · 1440`

### İçerik ve eylemler

Tags, Membership, Relationships, Stance, Maturity, Validity, Lifecycle ayrı; ortak 06–08 ekranlarına referans.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [07-membership](../../specs/07-membership/spec.md) · [08-relate](../../specs/08-relate/spec.md) · [10-stance](../../specs/10-stance/spec.md) · [11-maturity](../../specs/11-maturity/spec.md) · [12-state](../../specs/12-state/spec.md).

## 05.3 · Edit Item

**Artboard’lar**

- [ ] `05.3 · Edit Item · Editing · 1440`
- [ ] `05.3 · Edit Item · Save conflict · 1440`
- [ ] `05.3 · Edit Item · Content editor · 1440`
- [ ] `05.3 · Edit Item · File editor · 1440`

### İçerik ve eylemler

Title, Description, Item type, Content, Source, Notes, Tags, usage, scope, compatibility; sıralı autosave; Saving, Saved, Save failed.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- İçerik editörü: blok ekleme (slash menu/toolbar), Markdown metin, heading, list/task list, table, code, image/file; kaynak dosyası için dosya bazlı editör ve undo/redo (TECH-STACK).
- Kaydetme hatasında hedeflenmeyen alanlar korunur; güncel Revision çakışması ve kaydedilmemiş değerler açıkça ayrılır; tüm üyeliklerde aynı Item güncellenir.

**Spec:** [09-manage](../../specs/09-manage/spec.md).

## 05.4 · Image inspection

**Artboard’lar**

- [ ] `05.4 · Image inspection · Image viewer · 1440`

### İçerik ve eylemler

Asıl görsel, zoom, fit, Download; önizleme/asıl medya ayrımı; Region comments 11.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [05-detail](../../specs/05-detail/spec.md) · [28-region-comments](../../specs/28-region-comments/spec.md).
