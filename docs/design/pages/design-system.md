# Design System

Paper’da üç kanonik sayfa: **DS · Foundations**, **DS · Components**, **DS · Patterns**. Önce kararlar verilir, sonra bileşenler ve ortak desenler çizilir. Ürün ekranları bunları yeniden tasarlamaz.

Kaynaklar: [PRD](../../PRD.md), [GLOSSARY](../../../GLOSSARY.md), [TECH-STACK](../../TECH-STACK.md).

Önerilen ürün yönü: sakin, içerik odaklı kişisel çalışma kütüphanesi. Görsel örnekler genişçe incelenebilirken teknik bilgi yoğun ama okunabilir kalır. Kayıt toplamak kolay, değerlendirmek bilinçli, yeniden kullanmak hızlı olmalıdır. Dashboard widget’ları, sahte veri, her içeriği aynı kart biçimine zorlama ve birden fazla bağımsız durumu tek puana indirme yok.

## DS.0 · Decisions

Paper üzerinde seçilecek kararlar; henüz onaylanmış token değeri yoktur.

| Karar | Kapsam | Seçilen değer |
| --- | --- | --- |
| Görsel yön | Mood, marka, logo | TBD |
| Renk rolleri | Background, foreground, surface, muted, border, primary, focus, selected | TBD |
| Semantik renk | Success, warning, danger, info; bağımsız durumlar | TBD |
| Tema | Light/Dark kapsamı, varsayılan tema | TBD |
| Tipografi | UI, okuma, mono; font, boyut, weight, line height | TBD |
| Spacing | Ölçek, kontrol içi, grup ve bölge aralıkları | TBD |
| Density | Liste satırı, galeri kartı, kontrol ölçüleri | TBD |
| Layout | Sidebar, okuma alanı, resizable bölgeler, responsive genişlikler | TBD |
| Shape | Radius, border, elevation | TBD |
| Icons | Lucide; boyut ve stroke | TBD |
| Focus | Görünür klavye odağı, tab order | TBD |
| Motion | Süre, easing, reduced motion | TBD |
| Data display | Tarih, saat, dosya boyutu, yollar | TBD |
| Content rendering | Kod teması, Markdown, görsel aspect ratio ve fit | TBD |

## Foundations

### DS.1 · Color roles

- [ ] Token swatches: background, foreground, surface, muted, muted-foreground, border, primary, primary-foreground, ring, selection, destructive.
- [ ] Success, warning, danger, info: metin, ikon ve zemin rolleri; anlam yalnız renge bağlı değil.
- [ ] Seçilen temalarda gerçek metin, input, seçili satır ve odak örnekleri; erişilebilir kontrast.

### DS.2 · Typography

- [ ] Page title, section heading, body, label, caption, code/mono, shortcut.
- [ ] Uzun başlık, çok dilli içerik, URL ve dosya yolu; UI İngilizce.

### DS.3 · Spacing, density & layout

- [ ] Spacing ölçeği; form, sidebar, liste, galeri yoğunluğu; okuma alanı.
- [ ] Desktop referans ve dar görünüm; panel yeniden boyutlandırma, scrollbar, taşma.
- [ ] Keyboard focus, hedef boyutları; dar görünümde kritik eylemler kaybolmaz.

### DS.4 · Shape, icons & motion

- [ ] Radius, border, elevation; dialog/popover/tooltip katmanları.
- [ ] Lucide ikonları, ikonlu/yalnız ikonlu kontrol, erişilebilir ad ve tooltip.
- [ ] Motion örnekleri; reduced motion.

## Components

shadcn/ui + Base UI primitive’leri ve Lucide ile eşleştirilebilir; burada API implementasyonu yapılmaz.

### DS.5 · Actions & forms

- [ ] Button (primary, secondary, subtle, destructive, icon), Input, Textarea, Select, Combobox, Checkbox, Radio, Switch.
- [ ] Default, hover, focus, active/selected, disabled, invalid, pending.
- [ ] Label, help text, validation, keyboard shortcut.

### DS.6 · Navigation & layers

- [ ] Sidebar item/tree node, breadcrumb, tabs, separator, menu, popover, tooltip, dialog, resizable separator.
- [ ] Expanded/collapsed, active path, nested tree, keyboard focus, long path.
- [ ] Command input, result row, action hint.

### DS.7 · Feedback & data

- [ ] Badge, Tag chip, alert, toast, skeleton, spinner, progress, empty state.
- [ ] List row, gallery thumbnail, source link, file tree row, code block, copy/download affordance.
- [ ] No preview, image loading, unsupported file, error, success.

### DS.8 · Domain components

- [ ] Space/Collection node; Item gallery card ve list row aynı kimliği temsil eder.
- [ ] Item type: Reference, Recipe, Reusable Part, Principle, Note; boş seçim.
- [ ] Stance: Unspecified, Inspiration, Preference, Rule, Alternative, Avoid.
- [ ] Maturity: Raw, Reviewed.
- [ ] Validity: Unspecified, Verified, Needs reverification, Deprecated.
- [ ] Lifecycle: Active, Archived, Trashed.
- [ ] Origin: owner, Agent connection, AI service; kullanıcı notu ile ajan açıklaması ayrı.
- [ ] Membership path, Relationship type/target, source metadata, verification evidence.
- [ ] Agent connection read/create permission control; credential için yalnız kurgusal placeholder.
- [ ] Region comment marker, template variable field, original file path.

Durum eksenleri bağımsızdır: Reviewed teknik doğrulama değildir; Deprecated Archived değildir; Stance bir rating değildir. Ajan gözlemi kullanıcı doğrulaması olarak çizilmez.

## Patterns

### DS.9 · Shared shell and page header

- [ ] Sayfa başlığı, bağlam yolu, primary action, gezinme ve hesap girişleri.
- [ ] Kanonik kabuk: [00 · Shared Shell](00-shared-shell.md).

### DS.10 · Collection views and search

- [ ] Gallery/List switch, Collection guidance, child Collection, Item row/card, kapsam ve filtreler.
- [ ] Normal/History search, sonuç özeti ve tekil kimlik; boş sonuçta sorgu/kapsam değiştirme.

### DS.11 · Item detail and content

- [ ] Record header, content blocks (text, code, image, link, files), metadata ve ilişkiler.
- [ ] Kaynak ile kişisel not, ajan açıklaması, doğrulama ve geçmiş birbirinden ayrılır.
- [ ] File tree ve original file actions; statik preview; çalıştırma ortamı yok.

### DS.12 · Capture and edit

- [ ] Hızlı capture ile karma içerik, upload/drop/paste ve duplicate source.
- [ ] Paste/drop → Save: URL, metin, kod, tek görsel veya dosya için en fazla iki eylem; duplicate ve klasör/ZIP incelemesi ayrı. Odaktaki editör/dialog ikinci capture açmaz.
- [ ] İçerik editörü toolbar/slash menu, bloklar, kod ve dosya düzenleme; salt okunur görünümle tutarlı.
- [ ] Yeni Item açık Save, mevcut Item sıralı autosave. Hata sonrası içerik korunur.

### DS.13 · Command Palette

- [ ] Initial, search results, focused result, content actions, template filling.
- [ ] Mod+K, klavye odak geçişi, Escape, uygun parametresiz metin odaktayken en fazla iki eylemde Copy.

### DS.14 · Dialog and state patterns

- [ ] Dialog title, hedef, etki, Cancel, primary/destructive action; ayrı kalıcı silme onayı.
- [ ] Loading, Empty, Error, Validation, Saving, Saved, Save failed, Copy/download/upload feedback.
- [ ] Kanonik örnekler: [17 · Shared Dialogs & States](17-shared-dialogs-and-states.md). Feature’a özgü mesajlar ilgili alanda.

### DS.15 · Accessibility and stress cases

- [ ] Klavyeyle gezinme, menü/dialog focus, görünür klavye odağı, odak iadesi.
- [ ] Çok derin Collection ağacı, uzun URL/dosya yolu, uzun kod, büyük görsel, çok Item/Tag/Membership.
- [ ] Dar genişlik ve büyütülmüş yazı; kontrast ve renk dışı durum işaretleri.
