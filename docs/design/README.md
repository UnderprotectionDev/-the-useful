# The Useful Parts · Paper Tasarım Haritası

Cantiara yaklaşımı: her alan ayrı Paper sayfası; ortak parçalar tek kanonik yerde. Bu dokümanlar içerik ve durumları tanımlar, görsel kompozisyon Paper’da belirlenir.

## Çizim sırası

1. [Design System](pages/design-system.md): Foundations → Components → Patterns.
2. [Shared Shell](pages/00-shared-shell.md) ve [Shared Dialogs & States](pages/17-shared-dialogs-and-states.md).
3. Library & Browse, Capture, Item Detail; ardından diğer alanlar.

## Paper sayfaları

| Alan | Ekran grubu | Artboard |
| --- | ---: | ---: |
| [Design System](pages/design-system.md) | Foundations / Components / Patterns | TBD |
| [00 · Shared Shell](pages/00-shared-shell.md) | 3 | 4 |
| [01 · Account](pages/01-account.md) | 2 | 3 |
| [02 · Collections](pages/02-collections.md) | 4 | 8 |
| [03 · Library & Browse](pages/03-library-browse.md) | 4 | 7 |
| [04 · Capture](pages/04-capture.md) | 4 | 9 |
| [05 · Item Detail](pages/05-item-detail.md) | 4 | 9 |
| [06 · Membership & Relationships](pages/06-membership-and-relationships.md) | 3 | 4 |
| [07 · Item Assessment](pages/07-item-assessment.md) | 4 | 8 |
| [08 · Archive & Trash](pages/08-lifecycle.md) | 5 | 8 |
| [09 · Search](pages/09-search.md) | 3 | 5 |
| [10 · Command Palette](pages/10-command-palette.md) | 3 | 5 |
| [11 · Region Comments](pages/11-region-comments.md) | 2 | 4 |
| [12 · Files & Reusable Parts](pages/12-files-and-reusable-parts.md) | 3 | 6 |
| [13 · Templates](pages/13-templates.md) | 2 | 3 |
| [14 · Agent Connections](pages/14-agent-connections.md) | 5 | 9 |
| [15 · Unreviewed Agent Items](pages/15-agent-review.md) | 1 | 2 |
| [16 · Settings & Export](pages/16-settings-and-export.md) | 2 | 3 |
| [17 · Shared Dialogs & States](pages/17-shared-dialogs-and-states.md) | 4 | 9 |

Toplam 58 ekran grubu, 106 önerilen artboard (DS hariç).

## Kurallar

- DS · Foundations, DS · Components, DS · Patterns ayrı Paper sayfalarıdır. Alanlar büyüdükçe ayrı Paper dosyalarına ayrılabilir. Token kaynağı Foundations; diğer dosyalara aynı tema aktarılır.
- Kabuk 00, ortak durumlar 17 ve bileşenler DS’de tek yerde çizilir; feature ekranları onları tekrar kullanır.
- Artboard adı: `NN.M · Screen · Variant · Width`. 1440 önerilen desktop genişliği; Narrow genişliği DS.0 kararından sonra belirlenir. Yalnız yerleşim veya içerik anlamlı değişirse ayrı artboard.
- Numaralar kalıcıdır, kaldırılan numara yeniden kullanılmaz; checkbox çizim tamamlanınca işaretlenir.
- UI dili İngilizce; [GLOSSARY](../../GLOSSARY.md) terimleri bağlayıcıdır, önerilen eylem metinleri Paper’da kesinleştirilebilir.
- Davranış sahibi [PRD](../PRD.md) ve [spec/ticket dizini](../specs/README.md). Harita tüm MVP’yi gösterir; implementasyonda yalnız mevcut ticket kapsamı uygulanır.

## Ticket izlenebilirliği

[55 ticket → Paper ekranı eşleştirmesi](coverage.md).

## Ekran dışı spec’ler

[MCP keşif](../specs/18-agent-discovery/spec.md) ve [MCP okuma](../specs/19-agent-read/spec.md) ayrı web ekranı gerektirmez. Ajanın alt Collection oluşturması, katkısı ve düzeltmesi (20–22) mevcut Collection ve Item yüzeylerinde görünür. MCP prototip ticket 01 ayrı ürün ekranı değildir.

## Ortak örnek Library

Kurgusal veriler tüm artboard’larda tutarlı kullanılır.

- Design / Navigation / Breadcrumbs — **Breadcrumb patterns** (Reference, Inspiration, Reviewed).
- Engineering / UI / Navigation — **Accessible breadcrumb** (Reusable Part, Verified, çok dosyalı, Breadcrumb patterns ile derived from).
- Engineering / UI — **Legacy menu approach** (Recipe, Deprecated), **Old routing notes** (Note, Archived).
- Product / Discovery — **Feature brief** (Reusable Part, `{{product}}`, `{{audience:developers}}`).
- AI & Workflows / Skills — **Research skill** (Reusable Part, SKILL.md ve references/guide.md; ajan kökenli Raw).
- Inbox — **Keyboard navigation notes** (Active, Raw, Membership yok).
- Codex (read/create), Claude Code (read) ayrı örnek Agent connection. Accessible breadcrumb birden çok Collection’a üye olabilir.
