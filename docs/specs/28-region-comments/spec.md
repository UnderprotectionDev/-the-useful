# Görsele Bölge Yorumu Ekleme

**Status:** ready-for-agent

## Problem Statement

Görsel örneğin yalnız belli bölgesine ait kişisel değerlendirmemi kaydedip ajana doğru bağlamıyla aktarmak istiyorum.

## Solution

Yalnız kullanıcı asıl görsel üzerindeki ayrı dikdörtgenlere kişisel yorum ekler ve düzenler. Görsel korunur ve her yorum hem webde hem yetkili ajan okumasında doğru görsel ve bölgeyle eşleşir.

## User Stories

1. Kütüphane sahibi olarak asıl görselde dikdörtgen işaretlemek istiyorum. Böylece yorumun yerini gösterebileyim.
2. Kütüphane sahibi olarak birden fazla yorum eklemek istiyorum. Böylece farklı ayrıntıları değerlendirebileyim.
3. Kütüphane sahibi olarak yorumu düzenlemek istiyorum. Böylece değerlendirmemi güncelleyebileyim.
4. Kütüphane sahibi olarak ajanın doğru görsel ve bölgeyi okumasını istiyorum. Böylece yorum yanlış yere uygulanmasın.

## Implementation Decisions

- Region comment ilgili asıl görsel kimliği, dikdörtgen bölge ve kişisel metne bağlıdır; asıl görüntü baytları değiştirilmez.
- Web ve MCP aynı görsel/bölge eşlemesini taşır; bu alan kullanıcıya aittir.
- Region comment işlemi Stance atamaz ve kullanıcı müdahalesi olarak ajan yazma kilidiyle birlikte ele alınır.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-15) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı bir dashboard görseline iki ayrı dikdörtgen bölge yorumu ekler ve birini düzenler. Asıl görsel değişmez. Ajan her yorumu doğru görsel ve bölgeyle eşleştirir. Ajanın yorum oluşturma girişimi reddedilir.

### Ek davranış kontrolleri

- Kullanıcı aynı dashboard görselinde iki ayrı dikdörtgen seçip kişisel yorum ekler ve birini düzenler.
- Asıl görsel baytları değişmez; tam görsele otomatik Stance atanmaz.
- MCP her yorumu doğru görsel kimliği ve bölge ile döndürür.
- Ajanın yorum oluşturma/düzenleme isteği reddedilir; kullanıcı değişikliği ilgili ajan yazma kilidini korur.

## Out of Scope

- Yorum işaretli bölgeyle sınırlı kişisel değerlendirmedir. Tam görsele otomatik tutum atanmaz.

## Further Notes

- Kaynak faz: [28-region-comments](../../workflow/28-region-comments/phase-context.md).
- PRD izlenebilirliği: FR-21, FR-22, FR-33 · V-15. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [51 — Görsele bölge yorumu ve yetkili MCP okuması](tickets/51-region-comments.md).
- Açık teknik kararlar: normalize dikdörtgen koordinatlarının kesin temsili, döndürme/yakınlaştırma, görsel değişince yorumların durumu ve klavyeyle düzenleme. PRD §17 ve TECH-STACK açık kararları esas alınır.
