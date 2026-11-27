# Ajanla Yeni Kayıt Ekleme

**Status:** ready-for-agent

## Problem Statement

Ajanla geliştirdiğim yararlı parçaları gerçek dosyalarıyla kütüphaneye kazandırmak ve kendi tercihime aitmiş gibi görünmesini önlemek istiyorum.

## Solution

Ajan açık istek ve yazma izniyle, ikinci web onayı almadan kaydı Aktif, Ham ve Belirtilmemiş tutumla oluşturur, hedefi kimlikle seçer, eşleşme yoksa veya birden fazlaysa kullanıcıya sorar ve hedef belirtilmediyse Inbox’a kaydeder. İçerik, dosyalar, üyelikler, etiketler ve ilişkiler birlikte kaydolur ve dosya hatasında görünür kayıt oluşmaz, yinelenen normalize URL’de mevcut kimlik döner ve ayrı kayıt açık istek gerektirir. Kayıt, içerik parçaları, etiket katkıları ve ilişkiler oluşturan ajan bağlantısıyla ayırt edilir. Ajanın açıklaması ve doğrulama bilgisi kendi kökeniyle saklanır, kullanıcı tercihi veya doğrulaması olarak gösterilmez.

## User Stories

1. Kütüphane sahibi olarak ajanla URL ve tarifi kaydetmek istiyorum. Böylece iş akışımdan ayrılmadan birikim oluşturabileyim.
2. Kütüphane sahibi olarak çok dosyalı ve görselli Item ekletmek istiyorum. Böylece asıl içeriği taşıyabileyim.
3. Kütüphane sahibi olarak hedefi kimlikle belirlemek istiyorum. Böylece karışık isimlerde yanlış konum seçilmesin.
4. Kütüphane sahibi olarak belirsiz hedefte bana sorulmasını istiyorum. Böylece doğru koleksiyonu belirleyebileyim.
5. Kütüphane sahibi olarak hedef yoksa Inbox'a ekletmek istiyorum. Böylece organizasyonu erteleyebileyim.
6. Kütüphane sahibi olarak tekrarlanan URL kararını vermek istiyorum. Böylece kopyaları kontrol edebileyim.
7. Kütüphane sahibi olarak kısmi yüklemenin geri alınmasını istiyorum. Böylece yarım kayıt kalmasın.
8. Kütüphane sahibi olarak Origin ve açıklamayı ayırt etmek istiyorum. Böylece ajan katkısını kişisel değerlendirmemden ayırabileyim.
9. Kütüphane sahibi olarak ilişkiler ve etiketler ekletmek istiyorum. Böylece yeni kaydı bağlamıyla bulabileyim.

## Implementation Decisions

- ADR-0003 sınırlarıyla create yalnız yeni Item, mevcut/yeni Tag ve yeni Item'dan mevcut Item'a Relationship eklemeye izin verir.
- Yeni Item Active, Raw, Unspecified Stance ve kullanıcı Validity'si Unspecified olarak oluşturulur; ajan gözlemleri kendi Origin'iyle saklanır.
- Hedefler kimliktir; yok/çok eşleşmede kullanıcıya sorulur, belirtilmemiş hedef Inbox'tır.
- İçerik, dosya, üyelik, etiket, ilişki tek görünür sonuç halinde atomiktir; storage hatası görünür yarım kayıt bırakmaz.
- Normalize URL Active/Archived eşleşmede mevcut kimlik döner; ayrı oluşturma açık talep gerektirir.
- Origin Item, content parçası, Tag katkısı ve Relationship üzerinde ayırt edilir.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-07, V-08, V-09, V-20) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Codex ve Claude Code açık istekle bir bağlantıyı, çok dosyalı tarifi ve görselli kaydı doğru hedeflere ekler. Webde dosyalar açılabilir, eklenen etiketler ve ilişkiler görünür ve ilişki hedefi değişmez. Dosya aktarımı başarısız olduğunda işlem başarısız olarak bildirilir ve yarım kayıt kalmaz.
- Webde kaydın, içeriğin, etiket katkısının ve ilişkinin hangi ajan bağlantısından geldiği görünür, ajan açıklaması kullanıcı notundan ayrıdır. Ajan eklediği dosyaları aynı yollarla yeniden açar.
- İki koleksiyonla eşleşen adda ajan kullanıcıya sorar. Kütüphanede bulunan URL’de ilk deneme mevcut kimliği döndürür ve açık istekle ayrı kayıt oluşur. Yalnız okuma yetkili veya iptal edilmiş bağlantı kayıt oluşturamaz.
- Yazma yetkili ajanın tutum, kural veya geçerlilik belirleme girişimi reddedilir.

### Ek davranış kontrolleri

- Codex ve Claude Code create izniyle URL/metin Item oluşturur; kimlikli hedef veya Inbox seçilir.
- Belirsiz/olmayan hedef adında rehberlik kullanıcıya sormayı sağlar; belirtilmeyen hedef Inbox'tır.
- Item Active, Raw, Unspecified Stance ile görünür; ajan açıklaması ve teknik gözlem kendi Origin'iyle kişisel not/doğrulamadan ayrılır.
- Normalize URL eşleşmesinde mevcut kimlik döner; açık override ile ayrı Item oluşur.
- Read-only, iptal edilmiş bağlantı ve tutum/durum/kural belirleme girişimi reddedilir.
- Codex ve Claude Code çok dosyalı tarif ve görsel içeren Item oluşturur; sağlanan Membership, Tag ve Relationship aynı işlemde saklanır.
- Dosya aktarımı başarısızsa görünür Item, yeni üyelik, etiket katkısı veya ilişki kalmaz; başarısızlık bildirilir.
- Web ve MCP gerçek medya/dosyaları aynı yollar ve baytlarıyla açar.
- Item, Content, Tag katkıları ve Relationship oluşturucu Agent connection ile ayırt edilir; ilişki hedefi değişmez.

## Out of Scope

- İşlem geçerli yazma izni gerektirir. Ajan mevcut veya yeni etiket kullanabilir ve yalnız yeni kayıttan mevcut kayda ilişki kurabilir. Tutum, durum eksenleri ve bölge yorumu kullanıcıya aittir. Ajan harici içeriğin kopyasını yalnız erişim izinleri ve kaynak kullanım koşulları saklamaya uygunsa aktarır.

## Further Notes

- Kaynak faz: [21-agent-contribute](../../workflow/21-agent-contribute/phase-context.md).
- PRD izlenebilirliği: FR-08, FR-10, FR-23, FR-26 · V-07, V-08, V-09, V-20. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [41 — Ajanla URL ve metin Item oluşturma](tickets/41-agent-create-basic.md), [42 — Ajanla atomik görsel ve çok dosyalı katkı](tickets/42-agent-create-files.md).
- Açık teknik kararlar: dosya yükleme hazırlığının Agent connection'a bağlanması, tekrar deneme ve başarısız yükleme temizliğinin uygulanması. PRD §17 ve TECH-STACK açık kararları esas alınır.
