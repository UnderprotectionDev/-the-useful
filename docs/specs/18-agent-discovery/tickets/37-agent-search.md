# 37: MCP ile göreve göre kapsamlı arama

**Spec:** [Ajanla Kütüphanede İçerik Keşfetme](../spec.md)

**What to build:** Yetkili ajan görevle ilgili kısa ve seçilebilir sonuçlar alabilsin. Web ile aynı kapsam, tekilleştirme ve geçmiş filtreleri kullanılsın, boş sonuç ve erişim hatası ayırt edilsin.

**Blocked by:** [36 — MCP ile bilinen Collection'ı keşfetme ve açma](../../18-agent-discovery/tickets/36-agent-open-collection.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Codex ve Claude Code sidebar göreviyle ilgili kısa, sınırlı ve seçilebilir sonuç alır; devamı getirilebilir.
- [ ] Web ile aynı kapsam, doğrudan üyelik seçimi, tekil kimlik ve geçmiş filtreleri uygulanır.
- [ ] Archived/Deprecated açık filtreyle, tutum ve geçerlilikle ayırt edilir; Trash hiçbir sorguda dönmez.
- [ ] Boş sonuç, izin ve geçici sunucu hatası ayrı anlaşılır.
