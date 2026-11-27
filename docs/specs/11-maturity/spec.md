# Kayıt İncelemesini İşaretleme

**Status:** ready-for-agent

## Problem Statement

İncelediğim bilgiyi henüz değerlendirmediğim kayıtlardan ayırmak istiyorum.

## Solution

Yeni kayıt Ham başlar ve kullanıcı değerlendirmesini tamamladığında İncelenmiş yapabilir veya kaydı yeniden Ham’a çekebilir. Olgunluk, kayıt içeriğini ve teknik geçerliliğini değiştirmeden kullanıcının inceleme durumunu gösterir.

## User Stories

1. Kütüphane sahibi olarak yeni kaydı Raw görmek istiyorum. Böylece değerlendirilmemiş içeriği tanıyabileyim.
2. Kütüphane sahibi olarak Reviewed işaretlemek istiyorum. Böylece incelemeyi tamamladığımı görebileyim.
3. Kütüphane sahibi olarak tekrar Raw yapmak istiyorum. Böylece yeniden incelemem gereken kaydı işaretleyebileyim.

## Implementation Decisions

- ADR-0002 uyarınca Maturity Raw/Reviewed ekseni bağımsızdır; yeni Item Raw başlar.
- Reviewed'dan Raw'a dönüş daha önce kalıcı kapanmış ajan düzenleme iznini açmaz; bu kalıcı davranış ajan düzeltme fazında uygulanır.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-07, V-13, V-21) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı Ham bir kaydı inceledikten sonra İncelenmiş durumuna geçirip yeniden Ham’a çekebilir. Her iki geçişte yaşam döngüsü ve teknik geçerlilik bağımsız kalır.

### Ek davranış kontrolleri

- Yeni Item Raw başlar; kullanıcı Reviewed ve yeniden Raw yapabilir.
- Her iki geçişte Lifecycle ve Validity değişmez.
- İnceleme işareti görünür ve kalıcı saklanır.

## Out of Scope

- Olgunluk kullanıcı incelemesini ifade eder. İncelenmiş kaydın Ham’a çekilmesi ajana daha önce kapanan düzenleme yetkisini geri vermez.

## Further Notes

- Kaynak faz: [11-maturity](../../workflow/11-maturity/phase-context.md).
- PRD izlenebilirliği: FR-11 · V-07, V-13, V-21. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [25 — Raw ve Reviewed inceleme durumunu yönetme](tickets/25-maturity.md).
