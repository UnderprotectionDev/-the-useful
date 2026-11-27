# 54: Tüm Library'yi bağımsız pakete dışa aktarma

**Spec:** [Kütüphanenin Tamamını Dışa Aktarma](../spec.md)

**What to build:** Kullanıcı tüm Library'yi metadata, kimlikler, üyelikler, ilişkiler, özel içerik ve özgün dosyalarıyla uygulama bağımsız okunabilir bir pakete dışa aktarabilsin.

**Blocked by:** [06 — Collection alt ağacını taşıma](../../02-organize/tickets/06-move-collection.md), [23 — Ayrı onayla kalıcı silme](../../09-manage/tickets/23-permanent-delete.md), [40 — Ajanla izinli alt Collection açma](../../20-agent-subcollection/tickets/40-agent-subcollection.md), [49 — Reusable Part bileşenini bağlamıyla inceleme](../../26-component-preview/tickets/49-component-preview.md), [50 — Skill'i web ve MCP üzerinden özgün dosyalarıyla inceleme](../../27-skill-reuse/tickets/50-skill-reuse.md), [51 — Görsele bölge yorumu ve yetkili MCP okuması](../../28-region-comments/tickets/51-region-comments.md), [52 — Parametreli şablonu detail'de doldurup kopyalama](../../29-templates/tickets/52-template-detail.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Ayarlar/gezinmeden veri dışa aktarımı başlatılır ve uygulama olmadan okunur JSON manifest, Markdown ve özgün dosyalar alınır.
- [ ] Manifest ağaç, tekil Item kimlikleri, Membership, Relationship, Region comment, şablon ve dosya başvurularını çözer.
- [ ] Collection açıklamaları; Source, not, Tag, Origin, Stance, doğrulama/durum/zaman; kullanım örneği, önizleme, demo ve değişken bilgileri ilgili kimliklerle eşleşir.
- [ ] Archived ve Trashed kayıtlar ayrı durumla bulunur, kalıcı silinenler yoktur; harici içerik yalnız kaynak referansıdır.
- [ ] Saklanan dosya baytları özgün içerikle eşleşir.
