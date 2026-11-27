# İçeriği Kütüphaneye Kaydetme

**Status:** ready-for-agent

## Problem Statement

Bir işe yarayan içerikle karşılaştığımda ayrıntılı sınıflandırma yapmadan kaydetmek ve alıntıladığım asıl bilgiyi korumak istiyorum.

## Solution

Kullanıcı URL, metin, kod, görsel ve dosyayı tek kayıtta birleştirebilir, yalnız bağlantıyla başlayabilir ve tür, tutum ya da etiket seçimini sonraya bırakabilir ve türetilen başlığı değiştirebilir. Kaynak URL’si, proje, commit veya doküman bilgisi saklanabilir ve kişisel nottan ayrı tutulur. Bir kayıt birden fazla dosyayı adları ve varsa göreli yollarıyla, kod parçalarını da dil, dosya adı ve kullanım bağlamıyla saklayabilir. Kayıt ekleme klavyeyle de yapılabilir.

## User Stories

1. Kütüphane sahibi olarak URL veya metni hızlı kaydetmek istiyorum. Böylece işimi bölmeden kaynağı saklayabileyim.
2. Kütüphane sahibi olarak görsel veya dosyayı bırakmak istiyorum. Böylece asıl içeriği saklayabileyim.
3. Kütüphane sahibi olarak açık koleksiyona veya Inbox'a kaydetmek istiyorum. Böylece organizasyonu şimdi ya da sonra yapabileyim.
4. Kütüphane sahibi olarak birden çok içerik ve dosyayı tek kayda eklemek istiyorum. Böylece bağlamı bir arada tutabileyim.
5. Kütüphane sahibi olarak türetilen başlığı düzenlemek istiyorum. Böylece kaydı tanıyabileyim.
6. Kütüphane sahibi olarak kaynak bilgisi ve kişisel notu ayrı vermek istiyorum. Böylece bilginin kökenini ayırt edebileyim.
7. Kütüphane sahibi olarak aynı URL için uyarı almak istiyorum. Böylece gereksiz tekrarları engelleyebileyim.
8. Kütüphane sahibi olarak bilerek ikinci kayıt oluşturmak istiyorum. Böylece farklı bağlamları ayrı tutabileyim.
9. Kütüphane sahibi olarak hata sonrası yeniden denemek istiyorum. Böylece içeriğimi kaybetmeden devam edebileyim.

## Implementation Decisions

- Item tek kimlikle çoklu Content ve Source taşır; tür, Stance, Tag seçimi isteğe bağlıdır.
- Yeni kayıt açık kaydetmeyle oluşturulur; hedef açık Collection/Space, seçilen Membership'ler veya üyelik yoksa Inbox'tır.
- Dosya adları, göreli yolları ve özgün baytları korunur; kod dili, adı ve kullanım bağlamı saklanır.
- Link metadata best-effort alınır; kullanıcının alanları üzerine yazılmaz.
- Normalize Source URL karşılaştırması Active ve Archived Item'ları kapsar; bilinçli tekrar kabul edilir.
- Odaklanmış editör ve dialog kendi paste/drop işlemini alır; başarısız işlem başarı göstermez.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-01, V-19) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı URL, görsel ve kodu farklı kütüphane ekranlarında, tek dosyayı da sürükleyip bırakarak doğru hedefe kaydeder. Aynı URL yeniden kaydedildiğinde mevcut kaydı gösteren uyarı çıkar ve kullanıcı yine de ayrı kayıt oluşturabilir.
- Birden fazla dosya ve kod parçası içeren bir kayıt, dosya adları, göreli yolları, kod dili ve kaynak bilgisi korunarak klavyeyle de oluşturulabilir.

### Ek davranış kontrolleri

- Bir URL, metin veya kod klavyeyle yapıştırılıp en fazla iki eylemde kaydedilir.
- Görsel ve tek dosya bırakılarak aynı bütçeyle kaydedilir; özgün dosya baytları korunur.
- Açık Space/Collection varsayılan hedef, diğer ekranlar üyelik yoktur; kullanıcı hedefleri değiştirebilir.
- Tür, tutum veya etiket zorunlu değildir; başlık değiştirilebilir.
- Odaktaki editör/dialog ikinci kayıt açmaz; hata sonrası tekrar denenebilir.
- Bir Item görsel, kod, metin, bağlantı ve birden fazla dosya taşır.
- Dosya adları, göreli yollar, baytlar; kod dili, dosya adı ve kullanım bağlamı korunur.
- URL, proje, commit veya doküman Source olarak, kişisel not ayrı alan olarak saklanır.
- Klavyeyle kayıt yapılabilir; dosya hatası yarım başarılı kayıt gibi sunulmaz.
- Normalize URL Active/Archived Item'da bulunursa mevcut kimlik ve ayırt edici bilgi gösterilir.
- Kullanıcı vazgeçebilir veya açıkça ayrı kayıt oluşturabilir.
- Trash'teki URL olağan tekrar kontrolüne girmez; uyarıdan ayrıntıya geçiş detail ticket'ında tamamlanır.

## Out of Scope

- İki eylem bütçesi tek URL, metin, kod, görsel veya dosya için geçerlidir. Tekrar uyarısı ve klasör/ZIP içeriğini inceleme bu bütçenin dışındadır. Yakalama kütüphane ekranlarında gerçekleşir.

## Further Notes

- Kaynak faz: [04-capture](../../workflow/04-capture/phase-context.md).
- PRD izlenebilirliği: FR-05, FR-06, FR-07, FR-08 · V-01, V-19. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [08 — Tek içerikle hızlı kayıt](tickets/08-quick-capture.md), [09 — Karma Item ve kaynak bilgisi kaydetme](tickets/09-mixed-capture.md), [10 — Yinelenen kaynak URL uyarısı](tickets/10-duplicate-source.md).
- Açık teknik kararlar: URL normalizasyonu, birden çok eşleşmenin sunumu, eşzamanlı tekrar kontrolü, paste/drop olay önceliği, metin/kod/URL ayırımı ve içerik şeması. PRD §17 ve TECH-STACK açık kararları esas alınır.
