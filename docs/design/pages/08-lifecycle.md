# 08 · Archive & Trash

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 08.1 · Archive Item | Archive, Unarchive |
| 08.2 · Trash | Trashed Item, önceki Lifecycle, Restore, Delete permanently |
| 08.3 · Restore Item | Önceki Active/Archived ve geçerli Membership |
| 08.4 · Delete permanently | Seçili Item, geri alınamaz etki, Cancel, Delete permanently |
| 08.5 · Move to Trash | Active veya Archived Item’ı Trash’e taşıma |

## 08.1 · Archive Item

**Artboard’lar**

- [ ] `08.1 · Archive Item · Archive confirmation · 1440`
- [ ] `08.1 · Archive Item · Archived detail · 1440`

### İçerik ve eylemler

Archive, Unarchive; geçmiş içerik ve ilişkiler korunur; kimlikle açılabilir.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Unarchive sonrası geçerli üyelikte veya Inbox’ta Active görünür; diğer eksenler korunur. Archived Item normal keşiften çıkar; geçmiş araması (09.3) üzerinden bulunur.

**Spec:** [09-manage](../../specs/09-manage/spec.md).

## 08.2 · Trash

**Artboard’lar**

- [ ] `08.2 · Trash · Default · 1440`
- [ ] `08.2 · Trash · Empty · 1440`

### İçerik ve eylemler

Trashed Item, önceki Lifecycle, Restore, Delete permanently; normal arama ve ajan erişimi yok.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [09-manage](../../specs/09-manage/spec.md) · [15-navigation](../../specs/15-navigation/spec.md).

## 08.3 · Restore Item

**Artboard’lar**

- [ ] `08.3 · Restore Item · Confirmation · 1440`

### İçerik ve eylemler

Önceki Active/Archived ve geçerli Membership; Restore; Active üyelik yoksa Inbox.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Artık var olmayan Membership/Relationship hedefleri yeniden yaratılmaz; önceki Archived durumu korunur.

**Spec:** [09-manage](../../specs/09-manage/spec.md).

## 08.4 · Delete permanently

**Artboard’lar**

- [ ] `08.4 · Delete permanently · Separate confirmation · 1440`

### İçerik ve eylemler

Seçili Item, geri alınamaz etki, Cancel, Delete permanently; diğer Item'ların ortak dosyaları korunur.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [09-manage](../../specs/09-manage/spec.md).


## 08.5 · Move to Trash

**Artboard’lar**

- [ ] `08.5 · Move to Trash · Active Item · 1440`
- [ ] `08.5 · Move to Trash · Archived Item · 1440`

### İçerik ve eylemler

Seçili Item, Move to Trash, Cancel; kalıcı silme değildir. Önceki Lifecycle, dosyalar, Membership ve Relationship geri yükleme için korunur.

### Durumlar

- Başarı: Item olağan liste/Inbox’tan çıkar; yalnız Trash üzerinden erişilir.
- Hata: Item önceki Lifecycle ile kalır; Retry.

**Spec:** [09-manage](../../specs/09-manage/spec.md).
