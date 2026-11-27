# Kütüphanede Gezinme

**Status:** ready-for-agent

## Problem Statement

Kütüphanenin farklı bölümlerine klavye ile tutarlı biçimde erişmek istiyorum.

## Solution

Kullanıcı başlangıç ekranından tüm kayıtlara, aramaya ve hızlı eklemeye, ayrıca Space, koleksiyon, Inbox ve Trash’e klavyeyle ulaşabilir. Seçili kaydın ayrıntısına aynı gezinme akışında geçer.

## User Stories

1. Kütüphane sahibi olarak başlangıç ekranından tüm Item'lara ulaşmak istiyorum. Böylece genel bilgiye dönebilmek.
2. Kütüphane sahibi olarak Space ve Collection arasında gezinmek istiyorum. Böylece bağlamı izleyebilmek.
3. Kütüphane sahibi olarak Inbox ve Trash'i açmak istiyorum. Böylece organizasyon ve yaşam döngüsünü yönetebilmek.
4. Kütüphane sahibi olarak arama, hızlı ekleme ve ayrıntıyı klavyeyle açmak istiyorum. Böylece kesintisiz çalışabilmek.

## Implementation Decisions

- Route kompozisyonu, ortak gezinme ve erişilebilir klavye odak yönetimi kullanılır.
- Tüm kayıtlar, Space/Collection, Inbox, Trash, arama, hızlı ekleme ve ayrıntı ayrı ulaşılabilir hedeflerdir.
- Unreviewed agent items ve bağlantı/ayarlar ilgili fazlarda gezinmeye eklenir.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-01, V-11, V-14) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı kütüphane başlangıcından Space, koleksiyon, tüm kayıtlar, Inbox, Trash, arama, hızlı ekleme ve kayıt ayrıntısına klavyeyle ulaşabilir.

### Ek davranış kontrolleri

- Başlangıçtan tüm kayıtlar, Space/Collection, Inbox, Trash, arama ve hızlı kayıt klavye ile açılır.
- Seçili Item ayrıntısına aynı akıştan ulaşılır ve odak anlamlı biçimde yönetilir.
- Uygun ekranlar kimlik ve kapsamları koruyarak açılır.

## Out of Scope

- İncelenmemiş ajan kayıtlarının takip görünümü kendi fazında bu gezinmeye eklenir. Yerleşim ve navigasyon bileşenlerinin seçimi arayüz tasarımına aittir.

## Further Notes

- Kaynak faz: [15-navigation](../../workflow/15-navigation/phase-context.md).
- PRD izlenebilirliği: FR-13 · V-01, V-11, V-14. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [32 — Kütüphane başlangıcı ve klavye gezinmesi](tickets/32-navigation.md).
- Açık teknik karar: gezinme düzeni ve UI tasarım dili. PRD §17 ve TECH-STACK açık kararları esas alınır.
