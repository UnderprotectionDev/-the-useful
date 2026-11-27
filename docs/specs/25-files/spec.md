# Çok Dosyalı İçeriği Özgün Yollarıyla Yeniden Kullanma

**Status:** ready-for-agent

## Problem Statement

Çok dosyalı kodu veya Skill'i yeniden kullanırken özgün klasör düzenini ve içeriğini taşımak istiyorum.

## Solution

Kullanıcı saklanan dosyaları özgün ad, göreli yol ve baytlarıyla kullanır. Metin ve kod dosyalarını ayrı ayrı alabilir veya saklanan dosyaların tamamını tek paket olarak indirebilir.

## User Stories

1. Kütüphane sahibi olarak klasör veya ZIP bırakmak istiyorum. Böylece çok dosyalı içeriği tek kayıt yapabileyim.
2. Kütüphane sahibi olarak atlanan dosyaları önceden görmek istiyorum. Böylece neyin kaydedileceğini anlayabileyim.
3. Kütüphane sahibi olarak dosya ağacında gezinmek istiyorum. Böylece doğru dosyayı seçebileyim.
4. Kütüphane sahibi olarak tek metin veya kod dosyası kopyalamak istiyorum. Böylece yalnız gerekli kısmı alabilmek.
5. Kütüphane sahibi olarak asıl dosyayı indirmek istiyorum. Böylece özgün baytları koruyabilmek.
6. Kütüphane sahibi olarak tüm kayıt dosyalarını paketlemek istiyorum. Böylece klasör yapısını yeniden kullanabilmek.

## Implementation Decisions

- Klasör/ZIP import göreli yolu ve özgün baytları korur; sistem/bağımlılık dosyaları kaydetmeden önce atlanan listesinde gösterilir.
- Dosya ağacı saklanan Content metadata'sından türetilir, tek dosya kopyalama/indirme private asset sözleşmesini kullanır.
- ZIP paketleme seçilen Item'ın saklanan dosyalarıyla yapılır; path ve byte bütünlüğü korunur.
- Metin kodlama, BOM, satır sonu ve whitespace özgün dosyada korunur.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-16, V-18) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Sistem ve bağımlılık dosyaları içeren bir bileşen klasörü ile aynı yapıda bir ZIP yüklenir. Kullanıcı atlanan dosyaları kayıttan önce görür ve kayıttaki tekil dosyaların ve indirilen paketin adları, göreli yolları ve baytları saklananlarla eşleşir.

### Ek davranış kontrolleri

- Klasör ve aynı yapılı ZIP bırakıldığında alınacak içerik ve atlanan .git/, node_modules/, .DS_Store gibi dosyalar kaydetmeden önce gösterilir.
- Kalan dosyalar özgün göreli yolları ve baytlarıyla tek Item'a kaydedilir.
- Hata durumunda yarım kayıt başarı olarak görünmez.
- Dosya ağacında orijinal adlar ve göreli yollar görünür.
- Seçilen uygun metin/kod kopyalanır veya özgün saklanan dosya indirilir.
- Harici bağlantı saklanan byte gibi sunulmaz.
- Seçili Item'ın bütün saklanan dosyaları tek ZIP içinde özgün klasör düzeniyle indirilir.
- ZIP içindeki yollar ve baytlar saklananlarla eşleşir; ilgisiz Item içeriği dahil olmaz.

## Out of Scope

- Dosya biçimi ve klasör düzeni saklanan içeriğe aittir. Harici bağlantı saklanan dosya gibi sunulmaz. Otomatik harici kaynak içe aktarımı, çalıştırma ve kurulum kapsam dışıdır.

## Further Notes

- Kaynak faz: [25-files](../../workflow/25-files/phase-context.md).
- PRD izlenebilirliği: FR-07, FR-15, FR-32 · V-16, V-18. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [46 — Klasör veya ZIP ile çok dosyalı Item kaydetme](tickets/46-folder-zip-capture.md), [47 — Dosya ağacında gezinme ve tekil dosya kopyalama/indirme](tickets/47-file-tree.md), [48 — Item'ın özgün dosya paketini indirme](tickets/48-item-file-package.md).
- Açık teknik kararlar: desteklenen tarayıcılar, izinli göreli yol ve atlama kalıpları, dosya/sıkıştırma sınırları, path/ad çakışmaları ve dosya ağacı etkileşimi. PRD §17 ve TECH-STACK açık kararları esas alınır.
