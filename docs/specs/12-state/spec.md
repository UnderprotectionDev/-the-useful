# Teknik Geçerliliği ve Doğrulamayı İzleme

**Status:** ready-for-agent

## Problem Statement

Teknik tarifin hangi koşullarda doğrulandığını ve değişiklikten sonra hâlâ güvenilir olup olmadığını izlemek istiyorum.

## Solution

Kullanıcı doğrulama kapsamı, sürüm, koşullar, tarih ve notla bir tarifin nerede geçerli olduğunu kaydeder, güncelliğini yitirdiğinde işaretler ve gerektiğinde yeniden doğrular. Ajanın aktardığı teknik gözlem kendi kökeniyle saklanır.

## User Stories

1. Kütüphane sahibi olarak doğrulanabilirlik durumunu belirtmek istiyorum. Böylece eski veya bilinmeyen içeriği ayırt edebileyim.
2. Kütüphane sahibi olarak kapsam, sürüm, koşul ve tarih kaydetmek istiyorum. Böylece tarifin nerede geçerli olduğunu anlayabileyim.
3. Kütüphane sahibi olarak yazım düzeltmesinde doğrulamayı korumak istiyorum. Böylece gereksiz yeniden değerlendirmeden kaçınabileyim.
4. Kütüphane sahibi olarak teknik değişiklikte yeniden doğrulama görmek istiyorum. Böylece eski dayanakla yanlış karar vermeyeyim.
5. Kütüphane sahibi olarak geçmiş doğrulamaya bakmak istiyorum. Böylece önceki bağlamı koruyabileyim.
6. Kütüphane sahibi olarak güncel kaydı yeniden doğrulamak istiyorum. Böylece geçerli koşulları kaydedebileyim.

## Implementation Decisions

- Validity, Lifecycle/Maturity'den bağımsızdır: Unspecified, Verified, Needs reverification, Deprecated.
- Doğrulama dayanağı kapsam, sürüm/koşul, tarih, not ve Origin ile saklanır; ajan gözlemi kullanıcı doğrulaması sayılmaz.
- Başlık, Tag, Membership ve anlam koruyan yazım değişiklikleri doğrulamayı korur; yaklaşım, kod veya uyumluluk değişiklikleri eski dayanağı geçmişe alır.
- Güncel doğrulama yeni içerik bağlamıyla görünür; kapsamlı içerik sürüm geçmişi gerektirmez.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-13) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Doğrulanmış teknik tarif önce başlık ve yazım değişikliklerinden, ardından kod veya uyumluluk değişikliğinden geçirilir. İlk işlemler doğrulamayı korur. Teknik değişiklik mevcut doğrulamayı geçmişe alır ve yeni doğrulama girildiğinde güncel kapsam görünür.
- Kayıt arşivlenip yeniden etkinleştirildiğinde geçerliliği ve olgunluğu değişmez. Güncel ve geçmiş doğrulama kayıt ayrıntısında ayırt edilir.

### Ek davranış kontrolleri

- Kullanıcı Unspecified, Verified, Needs reverification, Deprecated değerlerini ayırt edebilir.
- Kapsam, sürüm, koşullar, doğrulama tarihi ve not ayrıntıda saklanır ve görünür.
- Lifecycle ve Maturity bağımsız kalır.
- Başlık, Tag, Membership ve anlamı koruyan yazım değişikliği doğrulamayı korur.
- Kod, yaklaşım veya uyumluluk değiştiğinde Needs reverification olur ve eski doğrulama geçmişte görünür.
- Kullanıcı yalnız yazım düzeltmesi için mevcut doğrulamayı koruyabilir.
- Yeni kapsam, tarih ve not girilerek güncel Item Verified yapılır.
- Güncel ve önceki doğrulama dayanakları ayırt edilir.
- Arşivleme ve yeniden etkinleştirme diğer eksenleri değiştirmez; bu regresyon Lifecycle akışı ile doğrulanır.

## Out of Scope

- Geçerlilik yaşam döngüsünden ve olgunluktan bağımsızdır. Ajanın ilettiği doğrulama bilgisi kökeniyle saklanır. Kullanıcı doğrulamasının yerini almaz.

## Further Notes

- Kaynak faz: [12-state](../../workflow/12-state/phase-context.md).
- PRD izlenebilirliği: FR-09, FR-11, FR-17 · V-13. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [26 — Teknik Validity ve doğrulama dayanağı belirleme](tickets/26-validity.md), [27 — Teknik değişiklikte yeniden doğrulama gereksinimi](tickets/27-invalidate-verification.md), [28 — Güncel kaydı yeniden doğrulama](tickets/28-reverify-item.md).
- Açık teknik karar: geçmiş doğrulama dayanaklarının saklama biçimi ve güncel Revision ile ilişkilendirilmesi. PRD §17 ve TECH-STACK açık kararları esas alınır.
