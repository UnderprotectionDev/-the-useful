# 51: Görsele bölge yorumu ve yetkili MCP okuması

**Spec:** [Görsele Bölge Yorumu Ekleme](../spec.md)

**What to build:** Kullanıcı asıl görseli koruyarak dikdörtgen bölgelere kişisel yorum ekleyip düzenleyebilsin. Yetkili ajan doğru görsel ve bölge eşlemesini okuyabilsin.

**Blocked by:** [43 — Ajanın el değmemiş kendi Item'ını atomik düzeltmesi](../../22-agent-revise/tickets/43-agent-revise.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Kullanıcı aynı dashboard görselinde iki ayrı dikdörtgen seçip kişisel yorum ekler ve birini düzenler.
- [ ] Asıl görsel baytları değişmez; tam görsele otomatik Stance atanmaz.
- [ ] MCP her yorumu doğru görsel kimliği ve bölge ile döndürür.
- [ ] Ajanın yorum oluşturma/düzenleme isteği reddedilir; kullanıcı değişikliği ilgili ajan yazma kilidini korur.
