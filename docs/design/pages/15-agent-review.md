# 15 · Unreviewed Agent Items

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 15.1 · Unreviewed agent items | Active Raw ajan kökenli Item, Collection bağlamı, Origin |

## 15.1 · Unreviewed agent items

**Artboard’lar**

- [ ] `15.1 · Unreviewed agent items · Default · 1440`
- [ ] `15.1 · Unreviewed agent items · Empty · 1440`

### İçerik ve eylemler

Active Raw ajan kökenli Item, Collection bağlamı, Origin; Open Item, Mark as reviewed; üyelikten bağımsız tekil sonuç, Reviewed olunca çıkar.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Inbox ve Collection üyeliği olan ajan Item’lar birlikte; owner kökenli, Reviewed, Archived ve Trashed hariç. Raw’a dönüşte koşulları sağlıyorsa tekrar görünür.

**Spec:** [23-review-agent-items](../../specs/23-review-agent-items/spec.md).
