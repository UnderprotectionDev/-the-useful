# Space ve Koleksiyon Ağacını Yönetme

**Status:** ready-for-agent

## Problem Statement

Kişisel bilgileri konulara göre düzenlerken hiyerarşiyi değiştirmek ve kayıt kimliklerini korumak istiyorum.

## Solution

Kullanıcı dört başlangıç Space’iyle işe başlar, kendi Space ve koleksiyon ağacını kurar, adlandırır ve yeniden düzenler. Aynı üst koleksiyon altında aynı adlı iki koleksiyon bulunmaz.

## User Stories

1. Kütüphane sahibi olarak dört başlangıç Space'ini görmek istiyorum. Böylece hemen düzenlemeye başlayabileyim.
2. Kütüphane sahibi olarak yeni Space açmak istiyorum. Böylece yeni bir bilgi alanı kurabileyim.
3. Kütüphane sahibi olarak alt koleksiyon oluşturmak istiyorum. Böylece konuları iç içe düzenleyebileyim.
4. Kütüphane sahibi olarak aynı adı farklı üstlerde kullanmak istiyorum. Böylece farklı bağlamları ayrı tutabileyim.
5. Kütüphane sahibi olarak koleksiyonu yeniden adlandırmak istiyorum. Böylece amacını güncelleyebileyim.
6. Kütüphane sahibi olarak alt ağacı taşımak istiyorum. Böylece yapıyı kayıtları kaybetmeden değiştirebileyim.

## Implementation Decisions

- ADR-0001 uyarınca Space, parent'ı olmayan Collection'dır; aynı kurallar ve kimlik kullanılır.
- Kardeş ad benzersizliği kökler dahil korunur, aynı ad farklı üstlerde kullanılabilir.
- Taşıma döngü ve kardeş adı çakışmasını denetleyip alt ağaçla atomik uygulanır.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-11, V-12, V-19) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı yeni bir Space oluşturur, adını değiştirir, altında iç içe koleksiyonlar kurar ve bir alt ağacı taşır. Kendi alt ağacını veya aynı adlı kardeşi olan hedefi seçen taşıma ile aynı üstte aynı adlı oluşturma reddedilir.

### Ek davranış kontrolleri

- İlk girişte Design, Engineering, Product ve AI & Workflows birer kez bulunur.
- Kullanıcı yeni kök Collection açar ve yeniden girişte aynı kimlikle görür.
- Aynı adlı kök oluşturma reddedilir.
- Space veya Collection altında yeni alt Collection açılır.
- Kardeş ad çakışması reddedilir, farklı üstte aynı ad kabul edilir.
- Oluşturulan alt Collection kendi kimliğiyle açılır.
- Yeni ad yeniden açıldığında görünür ve kimlik, alt ağaç, varsa üyelikler korunur.
- Kardeşle çakışan ad eski adı değiştirmeden reddedilir.
- Geçerli hedefe taşınan alt ağaç aynı kimlikleri ve varsa üyelikleri korur.
- Space başka Collection altına taşındığında kök konumunu kaybeder.
- Kendine/alt ağacına taşıma ve kardeş ad çakışması mevcut yapıyı değiştirmeden reddedilir.

## Out of Scope

- Başlangıç Space’leri Design, Engineering, Product ve AI & Workflows’tur. Kayıt üyelikleri ve koleksiyon silme kendi fazında, ajanın izinli alt koleksiyon açması ise ajan erişimi fazlarında ele alınır.

## Further Notes

- Kaynak faz: [02-organize](../../workflow/02-organize/phase-context.md).
- PRD izlenebilirliği: FR-01, FR-02, FR-03 · V-11, V-12, V-19. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [03 — Başlangıç Space'leri ve yeni Space](tickets/03-spaces.md), [04 — İç içe Collection oluşturma](tickets/04-subcollections.md), [05 — Space ve Collection yeniden adlandırma](tickets/05-rename-collection.md), [06 — Collection alt ağacını taşıma](tickets/06-move-collection.md).
- Açık teknik kararlar: ad karşılaştırma ve normalizasyon politikası, eşzamanlı taşımada döngü koruması. DB kardeş adı kısıtı ve recursive CTE yaklaşımı TECH-STACK'te belirlenmiştir. PRD §17 ve TECH-STACK açık kararları esas alınır.
