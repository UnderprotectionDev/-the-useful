# 11 · Region Comments

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 11.1 · Image with comments | Asıl görsel, dikdörtgen bölgeler ve bağlı kişisel yorumlar |
| 11.2 · Create or edit region | Bölge ve yorum metni, Save, Cancel |

## 11.1 · Image with comments

**Artboard’lar**

- [ ] `11.1 · Image with comments · Multiple regions · 1440`
- [ ] `11.1 · Image with comments · Selected region · 1440`

### İçerik ve eylemler

Asıl görsel, dikdörtgen bölgeler ve bağlı kişisel yorumlar; Add comment, Edit comment; zoom'da eşleşme korunur.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [28-region-comments](../../specs/28-region-comments/spec.md).

## 11.2 · Create or edit region

**Artboard’lar**

- [ ] `11.2 · Create or edit region · Selecting region · 1440`
- [ ] `11.2 · Create or edit region · Editing comment · 1440`

### İçerik ve eylemler

Bölge ve yorum metni, Save, Cancel; yalnız owner; asıl görsel değişmez ve Stance otomatik atanmaz.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [28-region-comments](../../specs/28-region-comments/spec.md).
