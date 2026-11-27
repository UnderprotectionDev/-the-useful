# 48: Item'ın özgün dosya paketini indirme

**Spec:** [Çok Dosyalı İçeriği Özgün Yollarıyla Yeniden Kullanma](../spec.md)

**What to build:** Kullanıcı seçili Item'ın bütün saklanan dosyalarını özgün klasör düzenini ve baytlarını koruyan tek paket olarak indirebilsin.

**Blocked by:** [47 — Dosya ağacında gezinme ve tekil dosya kopyalama/indirme](../../25-files/tickets/47-file-tree.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Seçili Item'ın bütün saklanan dosyaları tek ZIP içinde özgün klasör düzeniyle indirilir.
- [ ] ZIP içindeki yollar ve baytlar saklananlarla eşleşir; ilgisiz Item içeriği dahil olmaz.
