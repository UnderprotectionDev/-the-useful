# 39: MCP ile gerçek görsel ve özgün dosya erişimi

**Spec:** [Ajanla Seçili Kaydı ve Gerçek Dosyaları Okuma](../spec.md)

**What to build:** Yetkili Codex ve Claude Code seçili gerçek görseli ve özgün dosyaları alabilsin. Erişim ve medya sınırlamaları açıkça ayrılsın, iptal eski dosya adreslerine de uygulansın.

**Blocked by:** [38 — Seçili Item'ın tam MCP okuması](../../19-agent-read/tickets/38-agent-read-item.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Codex ve Claude Code gerçek görseli ve seçili kod/dosyayı gerçek içeriği ve özgün yollarıyla alır.
- [ ] Harici link, istemci görüntüleme desteği eksikliği ve geçici hata ayrı belirtilir; tüm dosyaları getirmek gerekmez.
- [ ] Oturumsuz web ve iptal edilmiş bağlantının eski dosya adresine yeni erişimi reddedilir; geçerli web ve read bağlantısı aynı aktif içeriği alır.
