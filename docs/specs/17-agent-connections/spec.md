# Ajan Bağlantılarını Yönetme

**Status:** ready-for-agent

## Problem Statement

Codex ve Claude Code gibi ajanlara ayrı yetki vermek ve gerektiğinde erişimlerini kaldırmak istiyorum.

## Solution

Kullanıcı bağlantıları ayrı ayrı oluşturur, okuma ve yazma izinlerini bağımsız yönetir ve gerektiğinde erişimi iptal eder. Her istekte güncel izin uygulanır, iptal önceden alınmış dosya adresine yapılan yeni isteği de kapsar. Bağlantı ekranı gezinmeden açılır ve bağlantı kurma talimatı ajanın kütüphaneye yalnız açık kullanıcı isteğiyle başvurmasını anlatır.

## User Stories

1. Kütüphane sahibi olarak her istemciye ayrı Agent connection açmak istiyorum. Böylece hangi bağlantının eriştiğini ayırt edebileyim.
2. Kütüphane sahibi olarak okuma ve oluşturma yetkisini ayrı seçmek istiyorum. Böylece ajanın erişimini kontrol edebileyim.
3. Kütüphane sahibi olarak bağlantı talimatını görmek istiyorum. Böylece istemciyi doğru kurabileyim.
4. Kütüphane sahibi olarak izinleri güncellemek istiyorum. Böylece ihtiyacıma göre erişimi değiştirebileyim.
5. Kütüphane sahibi olarak bağlantıyı iptal etmek istiyorum. Böylece yeni veri erişimini durdurabileyim.

## Implementation Decisions

- PRD §14.0 kapsamındaki küçük MCP prototipi, kapsamlı ürün uygulamasından önce iki hedef istemcide koleksiyon keşfi, tam Item okuma, gerçek görsel, dosya erişimi ve dosyalı kayıt oluşturmayı doğrular. Başarısız istemci yeteneği teknik erişim yöntemi veya hedef istemci seçimi için yeniden değerlendirme tetikler.
- Better Auth API key ile bağlantıya özgü hash'lenmiş, iptal edilebilir credential ve bağımsız read/create izinleri kullanılır.
- Her MCP ve asset isteğinde güncel bağlantı izni kontrol edilir.
- Create yetkisi ADR-0003 ile sınırlıdır; ikinci web onayı gerektirmez.
- Bağlantı talimatı açık kullanıcı isteğiyle kullanım beklentisini belirtir.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-09, V-23) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı gezinmeden bağlantı ekranını açar, talimatı izleyerek ayrı bir bağlantı kurar, okuma ve yazma izinlerini ayrı ayrı verir. İptal edilen bağlantının sonraki istekleri reddedilir.

### Ek davranış kontrolleri

- Kullanıcı gezinmeden bağlantı ekranına ulaşır ve Codex/Claude Code için ayrı bağlantılar oluşturur.
- read ve create ayrı yönetilir; geçerli bağlantı izinli test isteğine erişir, izinsiz işlem reddedilir.
- Kurulum rehberi açık kullanıcı isteğiyle başvuruyu belirtir.
- İptal sonrası bağlantının yeni yetki gerektiren istekleri reddedilir; diğer bağlantılar etkilenmez.
- Arama, yazma ve daha önce alınmış dosya adreslerinin iptal sonrası erişimi ilgili MCP/medya ticket'larında da doğrulanır.

## Out of Scope

- İşlem anında bağlantının güncel yetkileri uygulanır. İzinli ve açıkça istenmiş katkı için ikinci bir web onayı gerekmez.

## Further Notes

- Kaynak faz: [17-agent-connections](../../workflow/17-agent-connections/phase-context.md).
- PRD izlenebilirliği: FR-18, FR-27, FR-28 · V-09, V-23. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [01 — Codex ve Claude Code ile MCP teknik prototipini doğrulama](tickets/01-mcp-prototype.md), [34 — Agent connection oluşturma ve izin yönetimi](tickets/34-connections.md), [35 — Agent connection iptali](tickets/35-revoke-connection.md).
- Açık teknik kararlar: MCP araç sözleşmesi ve gerçek istemci prototipinin sonucu, uzak auth/storage doğrulaması. PRD §14.0 ve V-08 erken prototip ile ürün tamamlanınca tekrar doğrulanır. PRD §17 ve TECH-STACK açık kararları esas alınır.
