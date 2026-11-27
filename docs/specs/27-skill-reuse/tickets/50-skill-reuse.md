# 50: Skill'i web ve MCP üzerinden özgün dosyalarıyla inceleme

**Spec:** [Skill Dosyalarını İnceleme ve Yeniden Kullanma](../spec.md)

**What to build:** Kullanıcı Skill'in giriş ve yardımcı dosyalarını, kullanım koşullarını ve kaynak bilgilerini inceleyebilsin, paketini indirebilsin. Yetkili ajan aynı özgün dosyaları okuyabilsin.

**Blocked by:** [39 — MCP ile gerçek görsel ve özgün dosya erişimi](../../19-agent-read/tickets/39-agent-read-files.md), [48 — Item'ın özgün dosya paketini indirme](../../25-files/tickets/48-item-file-package.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] ZIP veya klasörden kaydedilen Skill'in kullanım koşulu, giriş dosyası, yardımcı dosyaları, varsa Source ve sürümü görünür.
- [ ] Kullanıcı giriş ve yardımcı dosyayı açar, özgün yollarla paketi indirir.
- [ ] Yetkili ajan açık istekle giriş ve seçili gerçek yardımcı dosyaları eksiksiz okur.
