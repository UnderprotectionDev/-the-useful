# Inbox’taki Kayıtları Görme

**Status:** ready-for-agent

## Problem Statement

Konusunu henüz seçmediğim kayıtları daha sonra kaybetmeden bulmak istiyorum.

## Solution

Kullanıcı hiçbir koleksiyon üyeliği olmayan aktif kayıtlarını Inbox’ta bulur ve açar. Koleksiyon seçmeden kaydetmek, organizasyonu sonraya bırakmanın yoludur.

## User Stories

1. Kütüphane sahibi olarak üyelik vermeden kaydetmek istiyorum. Böylece düzenlemeyi erteleyebileyim.
2. Kütüphane sahibi olarak Inbox'ta aktif kaydı görmek istiyorum. Böylece sınıflandırılmamış içeriği bulabileyim.
3. Kütüphane sahibi olarak Inbox'tan ayrıntı açmak istiyorum. Böylece kaydı inceleyebileyim.

## Implementation Decisions

- Inbox, Lifecycle=Active ve sıfır Membership koşulundan türetilir.
- Inbox'a yönelik ayrı durum veya onay akışı bulunmaz.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-01, V-11) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Koleksiyon seçmeden hızlı kaydedilen aktif kayıt Inbox’ta görünür ve ayrıntısı açılır. Bir koleksiyona veya Space’e kaydedilen kayıt Inbox’ta görünmez.

### Ek davranış kontrolleri

- Üyelik seçmeden kaydedilen Active Item Inbox'ta görünür ve açılır.
- Space/Collection üyeliği olan Item Inbox'ta görünmez.
- Inbox üyelikten türetilir; ayrı durum veya onay gerektirmez.

## Out of Scope

- Inbox üyeliği olmayan aktif kayıtların görünümüdür. Ayrı bir durum veya zorunlu onay adımı içermez.

## Further Notes

- Kaynak faz: [06-inbox](../../workflow/06-inbox/phase-context.md).
- PRD izlenebilirliği: FR-08, FR-13 · V-01, V-11. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [12 — Üyeliksiz aktif Item'ları Inbox'ta açma](tickets/12-inbox.md).
