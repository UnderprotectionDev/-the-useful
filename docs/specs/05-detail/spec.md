# Bir Kaydı Ayrıntılarıyla İnceleme ve İçeriğini Alma

**Status:** ready-for-agent

## Problem Statement

Kaydın yalnız başlığını değil gerçek içeriğini ve kullanım bağlamını inceleyip parçalarını doğrudan almak istiyorum.

## Solution

Kullanıcı asıl görselleri, kodu, dosyaları, kişisel notu, kaynakları, koleksiyonları ve kayıtlıysa kullanım amacı ile kapsamını, ayrıca oluşturulma ve güncellenme zamanını inceler. Varsa ajan veya AI açıklaması kullanıcı notundan ayrı gösterilir. Kaydın içeriği ilgili eylemleri öne çıkarır, kullanıcı uygun metni kopyalayabilir veya saklanan dosyayı indirebilir.

## User Stories

1. Kütüphane sahibi olarak karma Item içeriğini incelemek istiyorum. Böylece asıl örneğe erişebileyim.
2. Kütüphane sahibi olarak köken ve Source görmek istiyorum. Böylece bilginin nereden geldiğini anlayabileyim.
3. Kütüphane sahibi olarak kişisel notu ajan açıklamasından ayırmak istiyorum. Böylece kendi yorumumu seçebileyim.
4. Kütüphane sahibi olarak üyelikleri görmek istiyorum. Böylece kaydın nerede kullanıldığını anlayabileyim.
5. Kütüphane sahibi olarak içeriğe uygun eylemleri klavyeyle açmak istiyorum. Böylece hızla kopyalayıp indirebileyim.
6. Kütüphane sahibi olarak tekrar uyarısından mevcut kaydı açmak istiyorum. Böylece yeniden oluşturmadan kullanabileyim.

## Implementation Decisions

- Item detail kimlikle açılır ve içerik türüne göre öncelikli eylemleri sunar.
- Asıl saklanan medya/dosya ile harici link ayrılır; özel dosya endpoint'i owner denetimi uygular.
- Source, kullanıcı notu, Origin'e bağlı ajan/AI açıklaması, kullanım amacı, kapsam ve zamanlar ayrı sunulur.
- İlişki ve durum özellikleri sonraki fazlarda ortak detail sözleşmesine eklenir.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-01, V-19, V-23) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Karma bir kayıtta asıl görsel, kod, dosyalar, kaynak, koleksiyonlar, kişisel not ve oluşturulma ile güncellenme zamanı incelenebilir. Kullanıcı öncelikli eylemleri ve gerektiğinde diğer özellikleri klavyeyle açabilir, uygun metni kopyalayabilir ve saklanan dosyayı alabilir.
- Tekrar URL uyarısından mevcut kaydın ayrıntısı açılır.
- Ayrıntıdaki metin ve görseller uygun erişilebilirlik desteğiyle sunulur.

### Ek davranış kontrolleri

- Karma kayıt gerçek görsel, kod, saklanan dosyalar, Source, Membership, not, kullanım amacı/kapsamı ve zamanlarıyla açılır.
- Varsa ajan açıklaması kişisel nottan ayrılır; harici link saklanan dosya olarak sunulmaz.
- Metin kopyalanır ve saklanan dosyanın özgün baytları indirilir.
- Klavye ile öncelikli ve diğer özellikler açılır; görsel ve metin erişilebilir sunulur.
- Tekrar uyarısı doğru mevcut Item ayrıntısını açar; yetkisiz dosya isteği reddedilir.

## Out of Scope

- Bilgi sunumu kaydın içeriğine bağlıdır. İlişkiler, etiket düzenleme, tutum ve durum eksenleri kendi fazlarında ayrıntıya eklenir. Harici bağlantı olarak saklanan içerik uygulamada saklanan baytlar gibi gösterilmez.

## Further Notes

- Kaynak faz: [05-detail](../../workflow/05-detail/phase-context.md).
- PRD izlenebilirliği: FR-10, FR-15, FR-27 · V-01, V-19, V-23. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [11 — Karma Item ayrıntısı ve içerik alma](tickets/11-item-detail.md).
- Açık teknik kararlar: karma Item'da varsayılan kopyalama hedefi, clipboard hatası davranışı, Tiptap özel blok şeması ve medya sunumu. PRD §17 ve TECH-STACK açık kararları esas alınır.
