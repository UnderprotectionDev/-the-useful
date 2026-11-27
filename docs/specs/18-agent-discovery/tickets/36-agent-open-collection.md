# 36: MCP ile bilinen Collection'ı keşfetme ve açma

**Spec:** [Ajanla Kütüphanede İçerik Keşfetme](../spec.md)

**What to build:** Yetkili Codex ve Claude Code, açık istekle Collection ağacını keşfedebilsin ve bilinen Collection'ı rehberliği, alt Collection'ları ve kısa doğrudan kayıtlarıyla açabilsin.

**Blocked by:** [07 — Collection amacı, açıklaması ve notu](../../03-collection-guidance/tickets/07-collection-guidance.md), [35 — Agent connection iptali](../../17-agent-connections/tickets/35-revoke-connection.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Codex ve Claude Code ile açık istek üzerine Space ve alt Collection ad/kimlik/kapsamları keşfedilir.
- [ ] Bilinen Breadcrumb Collection amacı, açıklaması, notu, varsayılan görünümü, alt Collection'ları ve kısa doğrudan Active Item listesiyle açılır.
- [ ] read izni olmayan veya iptal edilen bağlantı reddedilir; belirsiz ad ayırt edilir.
