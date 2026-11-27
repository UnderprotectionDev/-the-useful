# 03 · Library & Browse

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 03.1 · All Items | All Items, New Item |
| 03.2 · Collection gallery | Collection yolu ve rehberlik, alt Collection'lar, doğrudan Active Item önizlemeleri |
| 03.3 · Collection list | Aynı doğrudan Item kimlikleri |
| 03.4 · Inbox | Active ve sıfır Membership |

## 03.1 · All Items

**Artboard’lar**

- [ ] `03.1 · All Items · Default · 1440`

### İçerik ve eylemler

All Items, New Item; başlık, tür, kısa açıklama ve Collection bağlamı; normal keşifte Archived ve Trashed yok; Deprecated kayıtlar güncel kayıtlarla karıştırılmaz.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [15-navigation](../../specs/15-navigation/spec.md).

## 03.2 · Collection gallery

**Artboard’lar**

- [ ] `03.2 · Collection gallery · Mixed content · 1440`
- [ ] `03.2 · Collection gallery · Empty · 1440`
- [ ] `03.2 · Collection gallery · Space root · 1440`

### İçerik ve eylemler

Collection yolu ve rehberlik, alt Collection'lar, doğrudan Active Item önizlemeleri; Gallery, List, Default view; Deprecated etiketi.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Space de kök Collection olarak aynı görünümü kullanır; doğrudan Active Item’lar ve alt Collection’lar. Alt ağaç Item’ları yalnız kapsamlı aramada; Search, New Collection, Edit guidance, Rename, Move, Delete, Download package ilgili fazlarda erişilir. No preview için tür ve başlık fallback.

**Spec:** [02-organize](../../specs/02-organize/spec.md) · [03-collection-guidance](../../specs/03-collection-guidance/spec.md) · [13-browse](../../specs/13-browse/spec.md).

## 03.3 · Collection list

**Artboard’lar**

- [ ] `03.3 · Collection list · Default · 1440`

### İçerik ve eylemler

Aynı doğrudan Item kimlikleri; title, type, description; alt Collection'lar; Gallery, List, Default view.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Deprecated etiketi görünür; varsayılan görünüm değişikliği sonraki açılışta uygulanır. Çok Item ve uzun başlık.

**Spec:** [13-browse](../../specs/13-browse/spec.md).

## 03.4 · Inbox

**Artboard’lar**

- [ ] `03.4 · Inbox · Default · 1440`
- [ ] `03.4 · Inbox · Empty · 1440`

### İçerik ve eylemler

Active ve sıfır Membership; New Item, Add to Collection, Open; ayrı onay kuyruğu değil.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Edit Item ve Tags erişilebilir; üyelik eklenince Item Inbox’tan çıkar; boş Inbox için New Item.

**Spec:** [06-inbox](../../specs/06-inbox/spec.md) · [07-membership](../../specs/07-membership/spec.md).
