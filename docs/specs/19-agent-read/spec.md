# Ajanla Seçili Kaydı ve Gerçek Dosyaları Okuma

**Status:** ready-for-agent

## Problem Statement

Ajanın ilgili kaydı seçtikten sonra asıl dosyaları ve bağlamı doğru biçimde okuyabilmesini istiyorum.

## Solution

Ajan seçilen kaydı, gerçek görseli ve saklanan dosyaları yetkili erişimle açar. Yalnız gerekli içerik getirilir.

## User Stories

1. Kütüphane sahibi olarak seçili Item'ın tam bilgisini açtırmak istiyorum. Böylece özetle kaybolan bağlamı geri alabilsin.
2. Kütüphane sahibi olarak ilişki hedefini seçerek açtırmak istiyorum. Böylece bağlantılı kaynakları izleyebilsin.
3. Kütüphane sahibi olarak gerçek görseli inceletmek istiyorum. Böylece tasarım örneğini doğrudan değerlendirebilsin.
4. Kütüphane sahibi olarak özgün dosya yollarını ve kodu aldırmak istiyorum. Böylece parçayı projeye taşıyabilsin.
5. Kütüphane sahibi olarak bilinen arşiv kaydını açtırmak istiyorum. Böylece geçmiş kararı araştırabilsin.
6. Kütüphane sahibi olarak eksik medya ve erişim hatasını ayırt etmek istiyorum. Böylece ajan yanlış başarı raporlamasın.

## Implementation Decisions

- Tam Item okuması kimlikle ve read izniyle yapılır; Archived doğrudan açılabilir, Trashed reddedilir.
- Tam içerik, not, Source, Origin, Stance, bağımsız durumlar, doğrulama geçmişi, uyumluluk ve Relationship hedef kimliği döner.
- Text/image SDK content blokları ve yetkili private asset erişimiyle asıl byte'lar sunulur; sadece gerekli dosyalar alınır.
- İstemci medya desteği, harici link, erişilemeyen dosya ve geçici hata ayırt edilir.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-04, V-08, V-12, V-23) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Codex ve Claude Code seçili kaydı ve gerçek görseli açar, özgün yollardaki kod ve dosyaları alır, ilişki türünü ve hedefi görüp hedef kaydı açar.
- Oturumsuz web isteği ve iptal edilmiş bağlantı; arama, kayıt ve önceden alınmış dosya adresinden içerik ve dosya baytı alamaz. Geçerli web oturumu ve okuma yetkili ajan aynı aktif içeriği alır. Trash kayıtları ajana açılmaz.

### Ek davranış kontrolleri

- Seçili Item'ın metin, kod, Source, kişisel not, ajan açıklaması, Origin, Stance, durum, güncel/eski doğrulama ve uyumluluğu ayırt edilir.
- Relationship türü ve hedef kimliği döner; hedef gerektiğinde ayrıca açılır.
- Kimliği bilinen Archived Item açılır; Trash, izinsiz ve iptal edilmiş bağlantı erişimi reddedilir.
- Codex ve Claude Code gerçek görseli ve seçili kod/dosyayı gerçek içeriği ve özgün yollarıyla alır.
- Harici link, istemci görüntüleme desteği eksikliği ve geçici hata ayrı belirtilir; tüm dosyaları getirmek gerekmez.
- Oturumsuz web ve iptal edilmiş bağlantının eski dosya adresine yeni erişimi reddedilir; geçerli web ve read bağlantısı aynı aktif içeriği alır.

## Out of Scope

- Bölge yorumları, şablon değişkenleri ve Skill ayrıntıları ilgili yeniden kullanım fazlarında tamamlanır.

## Further Notes

- Kaynak faz: [19-agent-read](../../workflow/19-agent-read/phase-context.md).
- PRD izlenebilirliği: FR-21, FR-22, FR-27 · V-04, V-08, V-12, V-23. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [38 — Seçili Item'ın tam MCP okuması](tickets/38-agent-read-item.md), [39 — MCP ile gerçek görsel ve özgün dosya erişimi](tickets/39-agent-read-files.md).
- Açık teknik kararlar: iki hedef istemcinin gerçek medya ve dosya erişim yolu, MCP dosya aktarım sözleşmesi. Prototip doğrulaması sonucu uygulanır. PRD §17 ve TECH-STACK açık kararları esas alınır.
