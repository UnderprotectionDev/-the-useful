# 10 · Command Palette

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 10.1 · Command Palette | Mod+K |
| 10.2 · Content actions | Copy, Open image, Download file, Open Item |
| 10.3 · Template in Palette | Değişken alanları, varsayılanlar, doldurulmuş metin, Copy, Back |

## 10.1 · Command Palette

**Artboard’lar**

- [ ] `10.1 · Command Palette · Initial · 1440`
- [ ] `10.1 · Command Palette · Search results · 1440`

### İçerik ve eylemler

Mod+K; Search Items and Collections, Open, Copy, New Item; odaktaki uygun parametresiz metin en fazla iki klavye eyleminde kopyalanır; Escape ve odak iadesi.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [16-palette](../../specs/16-palette/spec.md).

## 10.2 · Content actions

**Artboard’lar**

- [ ] `10.2 · Content actions · Text actions · 1440`
- [ ] `10.2 · Content actions · File actions · 1440`

### İçerik ve eylemler

Copy, Open image, Download file, Open Item; yalnız uygun eylemler; Collection açma.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [16-palette](../../specs/16-palette/spec.md).

## 10.3 · Template in Palette

**Artboard’lar**

- [ ] `10.3 · Template in Palette · Fill variables · 1440`

### İçerik ve eylemler

Değişken alanları, varsayılanlar, doldurulmuş metin, Copy, Back; detail açılmaz; özgün metin değişmez.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [29-templates](../../specs/29-templates/spec.md).
