# Koleksiyonları Galeri ve Listeyle İnceleme

**Status:** ready-for-agent

## Problem Statement

Görsel ve teknik koleksiyonları farklı sunumlarla açarken aynı kayıtları ve güncellik bilgilerini görmek istiyorum.

## Solution

Koleksiyon açılışında alt koleksiyonlar ve doğrudan üye aktif kayıtlar görünür, geçerliliğini yitirmiş aktif kayıtlar etiketlenir. Kullanıcı galeri önizlemeleri ile liste bağlamı arasında aynı kayıtlarla geçiş yapar ve koleksiyonun açılış görünümünü seçer.

## User Stories

1. Kütüphane sahibi olarak alt Collection'ları görmek istiyorum. Böylece ağaca devam edebileyim.
2. Kütüphane sahibi olarak galeriyle önizlemek istiyorum. Böylece görsel örnekleri tarayabileyim.
3. Kütüphane sahibi olarak liste ile başlık ve açıklama görmek istiyorum. Böylece teknik bilgiyi ayırt edebileyim.
4. Kütüphane sahibi olarak görünümü değiştirmek istiyorum. Böylece aynı kayıtlarda çalışabileyim.
5. Kütüphane sahibi olarak varsayılan görünümü saklamak istiyorum. Böylece sonraki açılışta amaca uygun sunumu görebileyim.
6. Kütüphane sahibi olarak Deprecated kaydı işaretli görmek istiyorum. Böylece eski örneği güncel sanmayayım.

## Implementation Decisions

- Collection açılışı yalnız doğrudan üye Active Item'ları ve alt Collection'ları döndürür.
- Deprecated Active Item etiketiyle görünür; alt ağaç Item'ları arama kapsamına aittir.
- Galeri ve liste ortak veri sorgusu/kimliklerini kullanır; varsayılan görünüm Collection'a bağlıdır.
- Önizleme türetilmiş medya, asıl dosya ayrı kalır; büyüyen listeler sınırlı veriyle kullanılır.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-02, V-12, V-19) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Karma bir koleksiyonun galeri ve liste görünümünde aynı doğrudan kayıt kimlikleri bulunur. Galeri görsel önizlemeleri, liste başlık, tür ve açıklamayı öne çıkarır. Kullanıcı yeni varsayılan görünümü seçtiğinde sonraki açılış bunu kullanır.
- Koleksiyondaki kayıt sayısı büyüdüğünde galeri ve liste kullanılabilir kalır.

### Ek davranış kontrolleri

- Karma Collection açıldığında alt Collection'lar ve doğrudan Active Item'lar görünür.
- Galeri ve liste aynı Item kimliklerini gösterir; galeri görsel, liste tür, başlık ve açıklamayı öne çıkarır.
- Deprecated Active Item işaretlenir; Archived/Trashed normal listede görünmez.
- Varsayılan görünüm kaydedilir, sonraki açılışta uygulanır; büyüyen koleksiyonda gezinme kullanılabilir kalır.

## Out of Scope

- Alt koleksiyonlar açılışta gezinme için görünür. Alt koleksiyonların kayıtları kapsamlı aramanın parçasıdır. Geçerliliğini yitirmiş aktif kayıt doğrudan listede durum etiketiyle gösterilir.

## Further Notes

- Kaynak faz: [13-browse](../../workflow/13-browse/phase-context.md).
- PRD izlenebilirliği: FR-04, FR-14, FR-17 · V-02, V-12, V-19. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [29 — Collection galeri, liste ve varsayılan görünüm](tickets/29-browse.md).
- Açık teknik kararlar: görsel tasarım, galeri/liste etkileşim ayrıntıları ve prototip ölçümlerine bağlı performans hedefleri. PRD §17 ve TECH-STACK açık kararları esas alınır.
