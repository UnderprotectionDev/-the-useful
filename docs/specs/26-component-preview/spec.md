# Yeniden Kullanılabilir Bileşeni Bağlamıyla İnceleme

**Status:** ready-for-agent

## Problem Statement

Bir UI bileşenini yeniden kullanmadan önce görünümünü, gerçek kaynaklarını ve uyumluluğunu birlikte değerlendirmek istiyorum.

## Solution

Kullanıcı çok dosyalı bir bileşenin asıl kaynaklarını, statik görüntü veya GIF’ini ya da demo bağlantısını, kullanım örneğini, uyumluluğunu, doğrulamasını ve varsa tasarım referanslarını birlikte inceler. Bileşenin kayıtlı davranışı kaynakları çalıştırmadan anlaşılır.

## User Stories

1. Kütüphane sahibi olarak bileşen önizlemesini görmek istiyorum. Böylece neye benzediğini anlayabileyim.
2. Kütüphane sahibi olarak kaynak ağacını açmak istiyorum. Böylece uygulama ayrıntısını inceleyebileyim.
3. Kütüphane sahibi olarak kullanım örneği ve uyumluluğu görmek istiyorum. Böylece projeye nasıl taşıyacağımı belirleyebileyim.
4. Kütüphane sahibi olarak doğrulama ve tasarım referansına erişmek istiyorum. Böylece bağlamı değerlendirebileyim.

## Implementation Decisions

- Reusable Part için var olan dosya ağacı, statik görsel veya GIF, demo Source bağlantısı, kullanım örneği, uyumluluk/Validity ve Relationship aynı Item detail içinde sunulur.
- Statik medya gerçek saklanan içeriğe, harici demo bağlantısı kendi Source'una işaret eder.
- Kod çalıştırma gerektirilmez; demo bağlantısı kullanıcı doğrulaması oluşturmaz.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-16) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı bir sidebar bileşeninde kaynak ağacı, kullanım örneği, uyumluluk ve doğrulama bilgilerini statik önizleme veya demo bağlantısıyla birlikte inceler. Varsa bağlı tasarım referansını da açarak parçayı projesine nasıl taşıyacağını belirler.

### Ek davranış kontrolleri

- Sidebar bileşeni kaynak ağacı, kullanım örneği, uyumluluk, güncel/geçmiş doğrulama ve statik görsel/GIF veya demo linkiyle açılır.
- Varsa bağlı tasarım Reference'ı açılır.
- Uygulama kod çalıştırmadan saklanan önizlemeyi gösterir; harici demoya otomatik doğrulama atamaz.

## Out of Scope

- Saklanan dosya ve görseller gösterilir. Uygulama kod çalıştırmaz veya harici demonun doğrulandığı izlenimini vermez.

## Further Notes

- Kaynak faz: [26-component-preview](../../workflow/26-component-preview/phase-context.md).
- PRD izlenebilirliği: FR-15, FR-32 · V-16. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [49 — Reusable Part bileşenini bağlamıyla inceleme](tickets/49-component-preview.md).
