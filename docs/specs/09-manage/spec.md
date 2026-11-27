# Kayıtları Düzenleme ve Yaşam Döngüsünü Yönetme

**Status:** ready-for-agent

## Problem Statement

Bilgiyi zaman içinde geliştirmek, eski içeriği saklamak veya kontrollü kaldırmak istiyorum.

## Solution

Kullanıcı bir kaynağı aynı kayıt üzerinde geliştirebilir, olağan keşiften çıkarabilir veya Trash üzerinden geri yükleyebilir.

## User Stories

1. Kütüphane sahibi olarak başlık ve içerik düzenlemek istiyorum. Böylece aynı bilgiyi geliştirebileyim.
2. Kütüphane sahibi olarak kaynak, etiket ve kapsam düzenlemek istiyorum. Böylece yeniden kullanım koşullarını güncelleyebileyim.
3. Kütüphane sahibi olarak arşivlemek istiyorum. Böylece eski içeriği olağan keşiften çıkarabileyim.
4. Kütüphane sahibi olarak arşivden çıkarmak istiyorum. Böylece yeniden kullanabileyim.
5. Kütüphane sahibi olarak Trash'e taşımak istiyorum. Böylece silme kararımı geri alabilmek için bekletebileyim.
6. Kütüphane sahibi olarak önceki duruma geri yüklemek istiyorum. Böylece bağlamı koruyabileyim.
7. Kütüphane sahibi olarak kalıcı silmeyi ayrı onaylamak istiyorum. Böylece istenmeyen içeriği bilinçli temizleyebileyim.
8. Kütüphane sahibi olarak ortak dosyaları korumak istiyorum. Böylece başka Item'lar bozulmasın.

## Implementation Decisions

- ADR-0002 uyarınca Lifecycle, Maturity ve Validity ayrı tutulur.
- Mevcut Item düzenlemesi güncel Revision üzerinde sıralı autosave kullanır; hedeflenmeyen alanlar korunur.
- Archive ve Trash geçişleri kullanıcıya aittir; Trash önceki Lifecycle'i saklar.
- Restore yalnız hâlen var olan Membership ve Relationship hedeflerini döndürür.
- Kalıcı silme Item referanslarını temizler, başka Item'ın kullandığı dosyayı korur; kayıp işlemler ayrı onay ister.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-11, V-13, V-19) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı birden fazla üyeliği, ilişkileri ve ek dosyaları olan kaydı arşive alıp Trash’e taşır ve geri yüklediğinde arşivde bulur. Kayıt daha sonra ayrı onayla kalıcı silindiğinde seçili kaydın başvuruları temizlenir ve başka kayıtların ortak dosyaları açılabilir kalır.
- Kullanıcı Inbox’tan açtığı kaydı düzenler, etiketler ve koleksiyona ekler. Kaynak bilgisi sonradan düzenlenebilir ve ortak kayıttaki değişiklik her üyelikte görünür.
- Kullanıcı başlığı, kısa açıklamayı, kullanım amacını, kapsamı ve uyumluluk bilgisini düzenler. Kayıt ayrıntısında bu bilgiler ve yeni güncellenme zamanı görünür.
- Arşivlenmiş bir kaydın son üyeliği kaldırıldığında kayıt arşivde kalır.

### Ek davranış kontrolleri

- Başlık, kısa açıklama, tür, Content, Source, not, Tag, kullanım amacı, kapsam ve uyumluluk değiştirilebilir.
- Klavyeyle düzenleme yapılır; güncel zaman ve değişiklikler tüm Membership'lerde aynı Item'da görünür.
- Hedeflenmeyen dosya, ilişki ve üyelikler korunur; kaydetme hatası anlaşılır.
- Item Archived olur; olağan liste/Inbox'tan çıkar, geçmiş görünümünde açılır.
- Content, ilişkiler, dosyalar ve diğer durum eksenleri korunur.
- Son üyeliği kaldırılan Archived Item Inbox'a girmez.
- Archived Item yeniden Active yapılabilir.
- Üyeliği varsa ilgili Collection'da, yoksa Inbox'ta görünür; diğer durum eksenleri korunur.
- Active ve Archived Item Trash'e taşınabilir; önceki Lifecycle saklanır.
- Kayıt normal liste ve Inbox'tan kalkar, yalnız kullanıcı Trash görünümünde erişilebilir.
- Dosyalar, üyelik ve ilişki bilgileri geri yükleme için korunur.
- Active veya Archived Item kendi önceki durumuna geri döner.
- Hâlen geçerli üyelikler, ilişkiler, dosyalar korunur; artık bulunmayan hedefler tekrar oluşturulmaz.
- Üyeliksiz Active kayıt Inbox'a, Archived kayıt arşive döner.
- Trash'teki Item ancak ayrı açık onayla kalıcı silinir; iptalde değişiklik olmaz.
- Item, Membership ve Relationship başvuruları temizlenir.
- Başka Item'ın kullandığı ortak dosyalar erişilebilir kalır.

## Out of Scope

- Trash kayıtları kullanıcı açıkça kalıcı silene kadar saklanır. Ajanın arşivleme, silme ve geri yükleme yetkisi yoktur. Üyelik kaldırma organizasyon işlemi olarak yürütülür.

## Further Notes

- Kaynak faz: [09-manage](../../workflow/09-manage/phase-context.md).
- PRD izlenebilirliği: FR-08, FR-09, FR-11, FR-17 · V-11, V-13, V-19. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [18 — Item içeriği ve özelliklerini düzenleme](tickets/18-edit-item.md), [19 — Item arşivleme](tickets/19-archive-item.md), [20 — Arşivden aktife dönme](tickets/20-unarchive-item.md), [21 — Item'ı Trash'e taşıma](tickets/21-trash-item.md), [22 — Trash'ten önceki duruma geri yükleme](tickets/22-restore-item.md), [23 — Ayrı onayla kalıcı silme](tickets/23-permanent-delete.md).
- Açık teknik kararlar: Revision'ı ilerleten kullanıcı işlemleri, ortak dosya referanslarının yönetimi ve başarısız temizliğin yeniden denenmesi. PRD §17 ve TECH-STACK açık kararları esas alınır.
