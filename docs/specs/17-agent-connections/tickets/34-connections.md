# 34: Agent connection oluşturma ve izin yönetimi

**Spec:** [Ajan Bağlantılarını Yönetme](../spec.md)

**What to build:** Kullanıcı ayrı Agent connection'lar oluşturup read ve create izinlerini bağımsız yönetebilsin ve açık isteğe dayalı bağlantı talimatını görebilsin.

**Blocked by:** [01 — Codex ve Claude Code ile MCP teknik prototipini doğrulama](../../17-agent-connections/tickets/01-mcp-prototype.md), [32 — Kütüphane başlangıcı ve klavye gezinmesi](../../15-navigation/tickets/32-navigation.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Kullanıcı gezinmeden bağlantı ekranına ulaşır ve Codex/Claude Code için ayrı bağlantılar oluşturur.
- [ ] read ve create ayrı yönetilir; geçerli bağlantı izinli test isteğine erişir, izinsiz işlem reddedilir.
- [ ] Kurulum rehberi açık kullanıcı isteğiyle başvuruyu belirtir.
