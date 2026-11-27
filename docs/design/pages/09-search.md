# 09 · Search

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 09.1 · Library search | Search, Library/Collection scope, kısa özet, tür, önizleme, Collection yolları |
| 09.2 · Scoped search and filters | Collection yolu, Include subcollections/Direct members only |
| 09.3 · History search | Include archived, Include deprecated |

## 09.1 · Library search

**Artboard’lar**

- [ ] `09.1 · Library search · Results · 1440`
- [ ] `09.1 · Library search · No results · 1440`
- [ ] `09.1 · Library search · Collection results · 1440`

### İçerik ve eylemler

Search, Library/Collection scope, kısa özet, tür, önizleme, Collection yolları; tekil Item; metin, kod, dosya adı ve metadata.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Collection sonuçları da açılabilir; sorgu başlık, Collection adı, açıklama, Tag, saklanan metin/kod, metinsel dosya adı ve Source üzerinde çalışır. Boş sonuçta sorgu veya kapsam değiştirilebilir; erişim hatası boş sonuç değildir.

**Spec:** [14-search](../../specs/14-search/spec.md).

## 09.2 · Scoped search and filters

**Artboard’lar**

- [ ] `09.2 · Scoped search and filters · Filters open · 1440`

### İçerik ve eylemler

Collection yolu, Include subcollections/Direct members only; Item type, Collection, Origin ve durum eksenleri; varsayılan alt ağaç.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Varsayılan alt ağaç, doğrudan üye seçeneği; filtreleri temizleme ve büyüyen sonuçlar; aynı Item bir kere gösterilir.

**Spec:** [14-search](../../specs/14-search/spec.md).

## 09.3 · History search

**Artboard’lar**

- [ ] `09.3 · History search · History results · 1440`

### İçerik ve eylemler

Include archived, Include deprecated; Lifecycle ve Validity ayrı; Trash hariç.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [14-search](../../specs/14-search/spec.md).
