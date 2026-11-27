# Ajanın Kendi Kaydını Düzeltmesi

**Status:** ready-for-agent

## Problem Statement

Ajanın biraz önce eklediği bir tarifi aynı kayıt üzerinde tamamlamasını, ben incelemeye başladıktan sonra ise yazma yetkisinin kapanmasını istiyorum.

## Solution

Ajan aynı bağlantının oluşturduğu el değmemiş Aktif ve Ham kaydı tek işlemde düzeltir ve kullanıcının ilk içerik, üyelik, metadata, inceleme veya durum değişikliği yazmayı kalıcı kapatır. Aynı revizyona dayanan eşzamanlı yazmalardan yalnız biri uygulanır ve eski revizyon, kalıcı kilit ile dosya hatası ayırt edilir. Düzeltmeyle eklenen içerik de ajan kökeniyle görünür.

## User Stories

1. Kütüphane sahibi olarak el değmemiş kendi Item'ını düzeltmesini istiyorum. Böylece yeni kopya oluşmasın.
2. Kütüphane sahibi olarak dosya ve metadata ekletmek istiyorum. Böylece tarifi tamamlayabileyim.
3. Kütüphane sahibi olarak eski Revision'ın reddini görmek istiyorum. Böylece eşzamanlı değişiklik korunabilsin.
4. Kütüphane sahibi olarak ben düzenleyince kalıcı kilit istiyorum. Böylece kişisel bilgim korunabilsin.
5. Kütüphane sahibi olarak ham'a dönsem bile kilidi korumak istiyorum. Böylece inceleme kararı yanlışlıkla açılmasın.
6. Kütüphane sahibi olarak dosya hatasında önceki kaydı korumak istiyorum. Böylece mevcut tarif zarar görmesin.

## Implementation Decisions

- Agent-editable koşulları aynı connection Origin, Active, Raw, kalıcı owner müdahalesi yok ve güncel Revision'dır.
- Owner Content, Membership, metadata, Maturity veya durum ilk değişikliğinde geri alınamaz yazma kilidi kaydedilir; gizli bir durum ekseni yerine erişim koşuludur.
- Güncelleme izinli alanlarla sınırlı ve atomiktir; eşzamanlı Revision kontrolü yazma işlemi içinde yapılır.
- Dosya hatası eski durumu korur; başka bağlantı, kalıcı kilit ve stale Revision ayrı sonuçlar verir.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-21) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Aynı bağlantı kendi el değmemiş Ham tarifine test dosyası ekler. Aynı revizyondan iki istek gönderilirse tek yazma gerçekleşir. Başka bağlantı, eski revizyon veya kullanıcı işlemiyle kapanmış kayıt reddedilir ve ret nedeni anlaşılır.
- Kullanıcı düzenlemesinden veya İncelenmiş işaretinden sonra (Ham’a geri çekilse bile) ve arşivlenip yeniden etkinleştirilen kayıtta güncelleme reddedilir. Ajanın durum değiştirme girişimi reddedilir ve kullanıcının notu ile kuralı değişmeden kalır.

### Ek davranış kontrolleri

- Aynı connection kendi Active Raw Item'ında başlık, açıklama, Content, dosya, Tag, Source veya mevcut Membership'i güncel Revision ile düzeltir; ikinci Item oluşmaz.
- İki aynı Revision isteğinden yalnız biri uygulanır; eski Revision anlaşılır biçimde reddedilir.
- Owner'ın Content, Membership, metadata, inceleme veya durum değişikliği kalıcı kilitler; tekrar Raw/Active yapılsa ya da restore edilse de kilit açılmaz.
- Başka bağlantı, kilitli kayıt, izinsiz alan/durum değişikliği ve revoke edilmiş bağlantı reddedilir.
- Dosya hatasında önceki Revision ve tüm içerik korunur; eklenen içerik Origin'iyle görünür.

## Out of Scope

- Düzeltme başlık, açıklama, içerik, dosya, etiket, kaynak ve mevcut koleksiyon üyeliğiyle sınırlıdır. İncelenmiş kaydı tekrar Ham yapmak veya arşivden çıkarmak kalıcı kilidi geri almaz. Dosya hatasında hiçbir değişiklik uygulanmaz.

## Further Notes

- Kaynak faz: [22-agent-revise](../../workflow/22-agent-revise/phase-context.md).
- PRD izlenebilirliği: FR-23, FR-25, FR-26 · V-21. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [43 — Ajanın el değmemiş kendi Item'ını atomik düzeltmesi](tickets/43-agent-revise.md).
- Açık teknik kararlar: Revision ve kalıcı düzenleme kilidinin saklama biçimi, dosya hazırlama ve başarısız işlem temizliği. PRD §17 ve TECH-STACK açık kararları esas alınır.
