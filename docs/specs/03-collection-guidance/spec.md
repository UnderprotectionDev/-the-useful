# Koleksiyon Bilgilerini ve Rehberliğini Yönetme

**Status:** ready-for-agent

## Problem Statement

Koleksiyonun neden var olduğunu ve neyin ilgili olduğunu her açışta hatırlamak istiyorum.

## Solution

Kullanıcı koleksiyonun amacını, açıklamasını ve notunu kaydedip koleksiyonla birlikte görür.

## User Stories

1. Kütüphane sahibi olarak koleksiyon amacı yazmak istiyorum. Böylece neyi burada tutacağımı anlayabileyim.
2. Kütüphane sahibi olarak açıklama eklemek istiyorum. Böylece kapsamı tanımlayabileyim.
3. Kütüphane sahibi olarak not ve rehberliği düzenlemek istiyorum. Böylece bağlamı zamanla güncelleyebileyim.
4. Kütüphane sahibi olarak bilgileri koleksiyon açıldığında görmek istiyorum. Böylece kayıtları bağlamıyla inceleyebileyim.

## Implementation Decisions

- Amaç, açıklama ve not Collection kimliğine bağlıdır.
- Collection rehberliği Item notu ve Stance alanlarından bağımsız saklanır.
- Aynı okuma sözleşmesi sonraki MCP fazına temel olur.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-02) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcının Breadcrumb koleksiyonuna eklediği amaç, açıklama ve not koleksiyon açıldığında görünür ve sonradan düzenlenebilir.

### Ek davranış kontrolleri

- Breadcrumb Collection için amaç, açıklama ve not kaydedilir.
- Koleksiyon yeniden açıldığında bilgiler görünür ve düzenlenebilir.
- Item notları ve tutumları bu değişiklikten etkilenmez.

## Out of Scope

- Koleksiyon rehberliği ilgili kapsamı açıklar. Kayıt düzeyindeki notların ve kullanıcı tutumunun kapsamı ayrıca korunur.

## Further Notes

- Kaynak faz: [03-collection-guidance](../../workflow/03-collection-guidance/phase-context.md).
- PRD izlenebilirliği: FR-04 · V-02. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [07 — Collection amacı, açıklaması ve notu](tickets/07-collection-guidance.md).
