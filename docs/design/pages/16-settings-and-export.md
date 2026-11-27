# 16 · Settings & Export

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 16.1 · Library export | Settings, Export Library, JSON manifest, Markdown, özgün dosyalar |
| 16.2 · Collection package | Collection yolu, alt ağaç, Markdown ve özgün dosyalar, Include archived (varsayılan kapalı), Download package |

## 16.1 · Library export

**Artboard’lar**

- [ ] `16.1 · Library export · Default · 1440`
- [ ] `16.1 · Library export · Preparing export · 1440`

### İçerik ve eylemler

Settings, Export Library, JSON manifest, Markdown, özgün dosyalar; Archived ve Trash dahil, kalıcı silinen hariç; Export, Download.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Export ZIP hazırlanıyor, Download ve başarısız işlemde Retry; içerik veya dosya erişim hatasında başarı gösterilmez.

**Spec:** [30-library-export](../../specs/30-library-export/spec.md).

## 16.2 · Collection package

**Artboard’lar**

- [ ] `16.2 · Collection package · Package options · 1440`

### İçerik ve eylemler

Collection yolu, alt ağaç, Markdown ve özgün dosyalar, Include archived (varsayılan kapalı), Download package; Trash hariç; ortak kimlik dizinde.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Paket yalnız seçili alt ağacı içerir; dış Membership ayrı koleksiyon olarak eklenmez. Archived seçeneği ve Trash hariç bilgisi açık; hazırlama, hata ve Download geri bildirimi.

**Spec:** [31-collection-package](../../specs/31-collection-package/spec.md).
