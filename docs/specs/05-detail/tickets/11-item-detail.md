# 11: Karma Item ayrıntısı ve içerik alma

**Spec:** [Bir Kaydı Ayrıntılarıyla İnceleme ve İçeriğini Alma](../spec.md)

**What to build:** Kullanıcı karma Item'ın asıl içeriğini ve metadata'yı ayrıntıda görebilsin, doğru metni kopyalayabilsin veya saklanan dosyayı indirebilsin. URL tekrar uyarısından mevcut kaydı açabilsin.

**Blocked by:** [09 — Karma Item ve kaynak bilgisi kaydetme](../../04-capture/tickets/09-mixed-capture.md), [10 — Yinelenen kaynak URL uyarısı](../../04-capture/tickets/10-duplicate-source.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Karma kayıt gerçek görsel, kod, saklanan dosyalar, Source, Membership, not, kullanım amacı/kapsamı ve zamanlarıyla açılır.
- [ ] Varsa ajan açıklaması kişisel nottan ayrılır; harici link saklanan dosya olarak sunulmaz.
- [ ] Metin kopyalanır ve saklanan dosyanın özgün baytları indirilir.
- [ ] Klavye ile öncelikli ve diğer özellikler açılır; görsel ve metin erişilebilir sunulur.
- [ ] Tekrar uyarısı doğru mevcut Item ayrıntısını açar; yetkisiz dosya isteği reddedilir.
