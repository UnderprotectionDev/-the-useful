# İncelenmemiş Ajan Kayıtlarını Takip Etme

**Status:** ready-for-agent

## Problem Statement

Ajan katkılarını koleksiyonlar arasında tek tek aramadan incelemek istiyorum.

## Solution

Kullanıcı gezinmeden sabit İncelenmemiş ajan kayıtları filtresini açar ve koleksiyon üyeliğinden bağımsız olarak ajan kökenli Aktif ve Ham kayıtları bulur. İncelenmiş işaretlenen kayıt görünümden çıkar.

## User Stories

1. Kütüphane sahibi olarak ajan kökenli Raw Item'ları topluca görmek istiyorum. Böylece incelemeye nereden başlayacağımı bulabileyim.
2. Kütüphane sahibi olarak koleksiyonlu katkıyı da görmek istiyorum. Böylece Inbox dışında kalan kayıtları kaçırmayayım.
3. Kütüphane sahibi olarak Reviewed işaretleyince görünümden çıkarmak istiyorum. Böylece bekleyen işlerimi görebileyim.

## Implementation Decisions

- Sabit filtre Origin=Agent connection, Lifecycle=Active ve Maturity=Raw koşullarını kullanır.
- Membership bağımsızdır; aynı Item tekil görünür.
- Gezinmeden erişilir; Reviewed işareti filtreyi günceller.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-07) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Ajanın oluşturduğu Aktif ve Ham kayıt, koleksiyonda yer aldığında da gezinmedeki sabit takip görünümünde bulunur. Kullanıcı kaydı İncelenmiş yaptığında görünümden çıkar.

### Ek davranış kontrolleri

- Gezinmeden sabit görünüm açılır; Inbox'taki ve Collection üyeliği olan Active Raw agent Item'lar bulunur.
- Kullanıcı kökenli, Archived/Trashed veya Reviewed Item filtrede görünmez.
- Reviewed yapıldığında Item görünümden çıkar; Raw'a alınınca koşulları sağlıyorsa görünür.

## Out of Scope

- Görünüm köken, yaşam döngüsü ve olgunlukla belirlenir. Özel akıllı görünüm tanımlama ve toplu düzenleme kapsam dışıdır.

## Further Notes

- Kaynak faz: [23-review-agent-items](../../workflow/23-review-agent-items/phase-context.md).
- PRD izlenebilirliği: FR-08, FR-13 · V-07. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [44 — Unreviewed agent items takip görünümü](tickets/44-unreviewed.md).
