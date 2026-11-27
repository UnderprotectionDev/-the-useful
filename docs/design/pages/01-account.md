# 01 · Account

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 01.1 · Sign in | The Useful Parts, Sign in with Google |
| 01.2 · Access unavailable | Access denied, Sign in with Google |

## 01.1 · Sign in

**Artboard’lar**

- [ ] `01.1 · Sign in · Default · 1440`

### İçerik ve eylemler

The Useful Parts, Sign in with Google; private Library; herkese açık signup veya parola yok.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [01-private-access](../../specs/01-private-access/spec.md).

## 01.2 · Access unavailable

**Artboard’lar**

- [ ] `01.2 · Access unavailable · Denied · 1440`
- [ ] `01.2 · Access unavailable · Session expired · 1440`

### İçerik ve eylemler

Access denied, Sign in with Google; özel içerik görünmez.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [01-private-access](../../specs/01-private-access/spec.md).
