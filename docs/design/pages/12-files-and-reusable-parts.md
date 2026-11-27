# 12 · Files & Reusable Parts

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 12.1 · File tree | Özgün göreli yol ağacı, seçili dosya adı/dil, metin/kod veya medya |
| 12.2 · Reusable component detail | Reusable Part, gerçek kaynak ağacı, statik görsel/GIF, demo Source, usage example, compatibility, Validity, tasarım Relationship |
| 12.3 · Skill detail | Reusable Part Skill, SKILL.md, yardımcı dosyalar, usage conditions, Source ve varsa version |

## 12.1 · File tree

**Artboard’lar**

- [ ] `12.1 · File tree · Code file · 1440`
- [ ] `12.1 · File tree · Binary file · 1440`

### İçerik ve eylemler

Özgün göreli yol ağacı, seçili dosya adı/dil, metin/kod veya medya; Copy, Download file, Download package; özgün baytlar korunur.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [25-files](../../specs/25-files/spec.md).

## 12.2 · Reusable component detail

**Artboard’lar**

- [ ] `12.2 · Reusable component detail · With preview · 1440`
- [ ] `12.2 · Reusable component detail · Without preview · 1440`

### İçerik ve eylemler

Reusable Part, gerçek kaynak ağacı, statik görsel/GIF, demo Source, usage example, compatibility, Validity, tasarım Relationship; kod çalıştırılmaz.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [26-component-preview](../../specs/26-component-preview/spec.md).

## 12.3 · Skill detail

**Artboard’lar**

- [ ] `12.3 · Skill detail · Skill entry · 1440`
- [ ] `12.3 · Skill detail · Supporting file · 1440`

### İçerik ve eylemler

Reusable Part Skill, SKILL.md, yardımcı dosyalar, usage conditions, Source ve varsa version; Download package; kurulum veya yürütme yok.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [27-skill-reuse](../../specs/27-skill-reuse/spec.md).
