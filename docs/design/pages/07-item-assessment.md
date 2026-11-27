# 07 · Item Assessment

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 07.1 · Stance selector | Unspecified, Inspiration, Preference, Rule, Alternative, Avoid |
| 07.2 · Maturity control | Raw, Reviewed |
| 07.3 · Validity and evidence | Unspecified, Verified, Needs reverification, Deprecated |
| 07.4 · Verify or Reverify | Güncel scope, version, conditions, date, notes |

## 07.1 · Stance selector

**Artboard’lar**

- [ ] `07.1 · Stance selector · Selector open · 1440`

### İçerik ve eylemler

Unspecified, Inspiration, Preference, Rule, Alternative, Avoid; Rule scope; yalnız kullanıcı, diğer eksenler değişmez.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [10-stance](../../specs/10-stance/spec.md).

## 07.2 · Maturity control

**Artboard’lar**

- [ ] `07.2 · Maturity control · Raw · 1440`
- [ ] `07.2 · Maturity control · Reviewed · 1440`

### İçerik ve eylemler

Raw, Reviewed; Mark as reviewed, Mark as raw; yeni Item Raw; Raw'a dönüş ajan kilidini açmaz.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [11-maturity](../../specs/11-maturity/spec.md).

## 07.3 · Validity and evidence

**Artboard’lar**

- [ ] `07.3 · Validity and evidence · Verified · 1440`
- [ ] `07.3 · Validity and evidence · Needs reverification · 1440`
- [ ] `07.3 · Validity and evidence · Deprecated · 1440`

### İçerik ve eylemler

Unspecified, Verified, Needs reverification, Deprecated; scope, version, conditions, date, notes, Origin ve geçmiş dayanak; ajan gözlemi kullanıcı doğrulaması değil.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Kod, yaklaşım veya uyumluluk değişirse Needs reverification; eski dayanak geçmişte. Güncel/eski dayanak ve ajan gözlemi ayrı.

**Spec:** [12-state](../../specs/12-state/spec.md).

## 07.4 · Verify or Reverify

**Artboard’lar**

- [ ] `07.4 · Verify or Reverify · Verify · 1440`
- [ ] `07.4 · Verify or Reverify · Reverify · 1440`

### İçerik ve eylemler

Güncel scope, version, conditions, date, notes; Verify, Reverify; anlam koruyan değişiklik doğrulamayı korur; eski dayanak geçmişte.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başlık, Tag, Membership ve anlamı koruyan yazım değişikliği doğrulamayı korur. Kullanıcı yalnız yazım düzeltmesinde mevcut doğrulamayı koruyabilmelidir.

**Spec:** [12-state](../../specs/12-state/spec.md).
