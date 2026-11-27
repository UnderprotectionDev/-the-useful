# 04 · Capture

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 04.1 · Quick capture | New Item |
| 04.2 · Mixed capture | Metin, kod (language, filename, usage), görsel ve dosyalar |
| 04.3 · Duplicate source | Mevcut eşleşen Item, Open existing, Create separate Item, Cancel |
| 04.4 · Folder or ZIP capture | Özgün göreli yollar, dahil ve atlanan dosyalar |

## 04.1 · Quick capture

**Artboard’lar**

- [ ] `04.1 · Quick capture · URL · 1440`
- [ ] `04.1 · Quick capture · Text · 1440`
- [ ] `04.1 · Quick capture · Code · 1440`
- [ ] `04.1 · Quick capture · Single image or file · 1440`

### İçerik ve eylemler

New Item; URL veya metin, türetilen düzenlenebilir Title, hedef Collection veya Inbox; isteğe bağlı Item type, Tags, Stance; Save.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- URL, metin, kod, tek görsel ve tek dosya: paste/drop → Save, en fazla iki eylem. Açık Space/Collection varsayılan hedef; diğer ekranlarda Inbox. Hedefler değiştirilebilir, tür/tutum/etiket zorunlu değildir.
- Etkin editör veya dialog paste/drop işlemini kendi alır; ikinci capture açılmaz. Link metadata başarısız olsa da kayıt mümkün; kullanıcı alanları üzerine yazılmaz.
- Save failed: içerik ve hedefler korunur; Retry.

**Spec:** [04-capture](../../specs/04-capture/spec.md).

## 04.2 · Mixed capture

**Artboard’lar**

- [ ] `04.2 · Mixed capture · Mixed content · 1440`
- [ ] `04.2 · Mixed capture · Uploading · 1440`

### İçerik ve eylemler

Metin, kod (language, filename, usage), görsel ve dosyalar; Source, Notes ayrı; Membership; klavye/drop/paste; hata sonrası içerik korunur.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Source: URL, Project, Commit, Document; özgün dosya adı, göreli yol ve kod bağlamı görünür. Upload başarısızsa kısmi başarı gösterilmez.

**Spec:** [04-capture](../../specs/04-capture/spec.md).

## 04.3 · Duplicate source

**Artboard’lar**

- [ ] `04.3 · Duplicate source · Duplicate URL · 1440`
- [ ] `04.3 · Duplicate source · Archived match · 1440`

### İçerik ve eylemler

Mevcut eşleşen Item, Open existing, Create separate Item, Cancel; otomatik üzerine yazma yok.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Active veya Archived eşleşmenin başlığı, Source, Lifecycle ve ayırt edici Collection yolu; Trash eşleşmeye dahil edilmez. Open existing doğru kimlikle 05.1 açar.

**Spec:** [04-capture](../../specs/04-capture/spec.md).

## 04.4 · Folder or ZIP capture

**Artboard’lar**

- [ ] `04.4 · Folder or ZIP capture · Import preview · 1440`

### İçerik ve eylemler

Özgün göreli yollar, dahil ve atlanan dosyalar; Save, Cancel; hata halinde yarım kayıt yok.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Atlanan .git/, node_modules/ ve .DS_Store gibi dosyalar ayrı liste; dosya aktarımı başarısızsa hiçbir yarım Item gösterilmez.

**Spec:** [25-files](../../specs/25-files/spec.md).
