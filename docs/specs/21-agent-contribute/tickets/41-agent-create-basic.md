# 41: Ajanla URL ve metin Item oluşturma

**Spec:** [Ajanla Yeni Kayıt Ekleme](../spec.md)

**What to build:** Create izinli ajan kullanıcının açık isteğiyle URL ve metin Item'ını doğru kimlikli hedefe veya Inbox'a ekleyebilsin. Tekrar kontrolü, varsayılan durumlar ve Origin kuralları uygulansın.

**Blocked by:** [37 — MCP ile göreve göre kapsamlı arama](../../18-agent-discovery/tickets/37-agent-search.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Codex ve Claude Code create izniyle URL/metin Item oluşturur; kimlikli hedef veya Inbox seçilir.
- [ ] Belirsiz/olmayan hedef adında rehberlik kullanıcıya sormayı sağlar; belirtilmeyen hedef Inbox'tır.
- [ ] Item Active, Raw, Unspecified Stance ile görünür; ajan açıklaması ve teknik gözlem kendi Origin'iyle kişisel not/doğrulamadan ayrılır.
- [ ] Normalize URL eşleşmesinde mevcut kimlik döner; açık override ile ayrı Item oluşur.
- [ ] Read-only, iptal edilmiş bağlantı ve tutum/durum/kural belirleme girişimi reddedilir.
