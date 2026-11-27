# 02 · Collections

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 02.1 · Create Space and Collection | Name, Parent, Create, Cancel |
| 02.2 · Rename and move | Mevcut yol, Name, hedef Collection |
| 02.3 · Collection guidance | Purpose, Description, Notes |
| 02.4 · Delete Collection | Alt Collection ve Item sayısı, Membership kaldırma, Delete, Cancel |

## 02.1 · Create Space and Collection

**Artboard’lar**

- [ ] `02.1 · Create Space and Collection · New Space · 1440`
- [ ] `02.1 · Create Space and Collection · New Collection · 1440`

### İçerik ve eylemler

Name, Parent, Create, Cancel; kardeş ad çakışması.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [02-organize](../../specs/02-organize/spec.md).

## 02.2 · Rename and move

**Artboard’lar**

- [ ] `02.2 · Rename and move · Rename · 1440`
- [ ] `02.2 · Rename and move · Move · 1440`

### İçerik ve eylemler

Mevcut yol, Name, hedef Collection; döngü ve ad çakışması; hata olursa eski konum korunur.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Space başka Collection altına taşınırsa kök konumunu kaybeder; alt ağaç ve Membership korunur. Kendine/altına taşıma ve kardeş ad çakışması engellenir; hata sonrası eski ad/yol görünür.

**Spec:** [02-organize](../../specs/02-organize/spec.md).

## 02.3 · Collection guidance

**Artboard’lar**

- [ ] `02.3 · Collection guidance · Read · 1440`
- [ ] `02.3 · Collection guidance · Edit · 1440`
- [ ] `02.3 · Collection guidance · Agent-created Collection · 1440`

### İçerik ve eylemler

Purpose, Description, Notes; Collection ile görünür; Edit, Save.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Boş isteğe bağlı rehberlik ve kayıtlı rehberlik; Item notu ve Stance değişmez. Ajan tarafından oluşturulan Collection için oluşturan Agent connection Origin görünür.

**Spec:** [03-collection-guidance](../../specs/03-collection-guidance/spec.md).

## 02.4 · Delete Collection

**Artboard’lar**

- [ ] `02.4 · Delete Collection · Confirmation · 1440`

### İçerik ve eylemler

Alt Collection ve Item sayısı, Membership kaldırma, Delete, Cancel; Item'lar korunur, aktif son üyelik kalkarsa Inbox.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Cancel hiçbir değişiklik yapmaz; Archived Item son üyeliğini kaybetse de Inbox’a girmez.

**Spec:** [07-membership](../../specs/07-membership/spec.md).
