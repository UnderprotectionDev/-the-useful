# 46: Klasör veya ZIP ile çok dosyalı Item kaydetme

**Spec:** [Çok Dosyalı İçeriği Özgün Yollarıyla Yeniden Kullanma](../spec.md)

**What to build:** Kullanıcı klasör veya ZIP içeriğini, atlanan öğeleri kaydetmeden önce görerek tek Item'a özgün göreli yolları ve baytlarıyla saklayabilsin.

**Blocked by:** [09 — Karma Item ve kaynak bilgisi kaydetme](../../04-capture/tickets/09-mixed-capture.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Klasör ve aynı yapılı ZIP bırakıldığında alınacak içerik ve atlanan .git/, node_modules/, .DS_Store gibi dosyalar kaydetmeden önce gösterilir.
- [ ] Kalan dosyalar özgün göreli yolları ve baytlarıyla tek Item'a kaydedilir.
- [ ] Hata durumunda yarım kayıt başarı olarak görünmez.
