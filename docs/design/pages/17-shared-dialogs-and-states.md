# 17 · Shared Dialogs & States

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 17.1 · Content states | Empty, Loading, Error, Retry |
| 17.2 · Form and save states | Validation, Saving…, Saved, Save failed, Retry |
| 17.3 · Confirmation frame | Başlık, hedef, etki, Cancel, açık eylem adı |
| 17.4 · Feedback and media states | Copied, Downloading…, Uploading…, Download failed, Preview unavailable, Retry |

## 17.1 · Content states

**Artboard’lar**

- [ ] `17.1 · Content states · Empty · 1440`
- [ ] `17.1 · Content states · Loading · 1440`
- [ ] `17.1 · Content states · Error · 1440`

### İçerik ve eylemler

Empty, Loading, Error, Retry; boş sonuç ile erişim hatası ayrılır; gerçek içerik yoksa sahte kayıt yok.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [01-private-access](../../specs/01-private-access/spec.md) · [05-detail](../../specs/05-detail/spec.md) · [06-inbox](../../specs/06-inbox/spec.md) · [13-browse](../../specs/13-browse/spec.md) · [14-search](../../specs/14-search/spec.md).

## 17.2 · Form and save states

**Artboard’lar**

- [ ] `17.2 · Form and save states · Validation · 1440`
- [ ] `17.2 · Form and save states · Save failed · 1440`

### İçerik ve eylemler

Validation, Saving…, Saved, Save failed, Retry; değerler korunur; autosave ve açık Save ayrı.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [04-capture](../../specs/04-capture/spec.md) · [09-manage](../../specs/09-manage/spec.md).

## 17.3 · Confirmation frame

**Artboard’lar**

- [ ] `17.3 · Confirmation frame · Standard · 1440`
- [ ] `17.3 · Confirmation frame · Destructive · 1440`

### İçerik ve eylemler

Başlık, hedef, etki, Cancel, açık eylem adı; kalıcı silme ayrı onay; ortak çerçeve.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [07-membership](../../specs/07-membership/spec.md) · [09-manage](../../specs/09-manage/spec.md) · [17-agent-connections](../../specs/17-agent-connections/spec.md).

## 17.4 · Feedback and media states

**Artboard’lar**

- [ ] `17.4 · Feedback and media states · Success · 1440`
- [ ] `17.4 · Feedback and media states · Failure · 1440`

### İçerik ve eylemler

Copied, Downloading…, Uploading…, Download failed, Preview unavailable, Retry; başarı ve işlem başlangıcı ayrı.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [04-capture](../../specs/04-capture/spec.md) · [05-detail](../../specs/05-detail/spec.md) · [25-files](../../specs/25-files/spec.md) · [30-library-export](../../specs/30-library-export/spec.md).
