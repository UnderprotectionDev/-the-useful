# 42: Ajanla atomik görsel ve çok dosyalı katkı

**Spec:** [Ajanla Yeni Kayıt Ekleme](../spec.md)

**What to build:** Yetkili ajan görsel ve çok dosyalı Item'ı içerik, üyelik, etiket ve ilişkileriyle birlikte atomik oluşturabilsin. Özgün dosyalar yeniden açılabilsin ve katkı kökeni izlenebilsin.

**Blocked by:** [39 — MCP ile gerçek görsel ve özgün dosya erişimi](../../19-agent-read/tickets/39-agent-read-files.md), [41 — Ajanla URL ve metin Item oluşturma](../../21-agent-contribute/tickets/41-agent-create-basic.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Codex ve Claude Code çok dosyalı tarif ve görsel içeren Item oluşturur; sağlanan Membership, Tag ve Relationship aynı işlemde saklanır.
- [ ] Dosya aktarımı başarısızsa görünür Item, yeni üyelik, etiket katkısı veya ilişki kalmaz; başarısızlık bildirilir.
- [ ] Web ve MCP gerçek medya/dosyaları aynı yollar ve baytlarıyla açar.
- [ ] Item, Content, Tag katkıları ve Relationship oluşturucu Agent connection ile ayırt edilir; ilişki hedefi değişmez.
