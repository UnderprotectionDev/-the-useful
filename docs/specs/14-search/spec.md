# Kütüphanede Arama ve Geçmişi Bulma

**Status:** ready-for-agent

## Problem Statement

Kütüphanem büyüdükçe hem güncel hem özellikle aradığım eski bilgiyi hızlıca bulmak istiyorum.

## Solution

Kullanıcı başlık, koleksiyon adı, açıklama, etiket, saklanan metin ve kod, metinsel dosya adı ve kaynak üzerinden arar. Arama klavyeyle kullanılabilir, sonuçlar tekil kayıt kimliğiyle ayırt edilebilir ve kullanıcı sonuç yoksa sorguyu ya da kapsamı değiştirebilir.

## User Stories

1. Kütüphane sahibi olarak genel arama yapmak istiyorum. Böylece koleksiyon adını bilmeden kayıt bulabileyim.
2. Kütüphane sahibi olarak koleksiyon kapsamında aramak istiyorum. Böylece konuya odaklanabileyim.
3. Kütüphane sahibi olarak doğrudan üyelerle sınırlamak istiyorum. Böylece alt ağaç kalabalığını azaltabileyim.
4. Kütüphane sahibi olarak metin, kod, dosya adı ve metadata ile eşleştirmek istiyorum. Böylece farklı ipuçlarından yararlanabileyim.
5. Kütüphane sahibi olarak filtrelerle ayırmak istiyorum. Böylece ilgili tür, köken ve durumu seçebileyim.
6. Kütüphane sahibi olarak ortak kaydı bir kez görmek istiyorum. Böylece tekrar sonuçlara takılmayayım.
7. Kütüphane sahibi olarak arşiv ve Deprecated kayıtları özellikle aramak istiyorum. Böylece geçmişi bulabileyim.
8. Kütüphane sahibi olarak boş sonuçta kapsam değiştirmek istiyorum. Böylece arama yapmaya devam edebileyim.

## Implementation Decisions

- Web ve MCP aynı arama domain sözleşmesini kullanır; kapsam varsayılan alt ağaç, isteğe bağlı doğrudan üyelik, dedup Item kimliğiyle yapılır.
- Saklanan metin/kod ve metadata PostgreSQL aramasına dahil edilir; link hedefi metni ve ikili içerik dışarıda kalır.
- Olağan arama Archived, Deprecated ve Trashed kayıtları hariç tutar; geçmiş filtresi ilk ikisini açar, Trash daima ayrı görünümde kalır.
- Sonuç kısa özet, tür, varsa önizleme, açıklama ve ilgili Collection'ları taşır; filtreler ve sayfalama/limit ortak davranış sağlar.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-03, V-05, V-06, V-12) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Aynı kaydı bir üst ve alt koleksiyonda arayan kullanıcı, kapsamlı aramada kaydı bir kez görür. Doğrudan üyelik kapsamı ve geçmiş filtreleri değiştirildiğinde sonuçlar beklenen kayıtları içerir.
- Kullanıcı aramayı klavyeyle yürütür ve içerik büyüdüğünde sonuçlar kullanılabilir kalır.

### Ek davranış kontrolleri

- Başlık, Collection adı, açıklama, Tag, saklanan metin/kod, metinsel dosya adı ve Source ile arama sonuç verir.
- Kapsam varsayılan alt Collection'ları içerir; yalnız doğrudan üyelik seçilebilir ve aynı Item tek kez döner.
- Tür, Collection, Origin ve durum eksenleriyle filtrelenebilir; sonuç ayırt edici metadata içerir.
- Klavye ile arama, sonuç açma ve boş sorgu sonrası kapsam/sorgu değiştirme yapılır; büyüyen veri kullanılabilir kalır.
- Olağan aramada Archived ve Deprecated Item'lar görünmez.
- Açık geçmiş filtreleriyle ilgili kayıtlar durumlarıyla ayırt edilir.
- Trash kayıtları her arama filtresinde hariç kalır.

## Out of Scope

- Temel arama saklanmış metin ve metadata ile çalışır. İkili dosya içeriği, yalnız URL’si saklanan sayfaların metni, OCR ve anlamsal arama kapsam dışıdır.

## Further Notes

- Kaynak faz: [14-search](../../workflow/14-search/phase-context.md).
- PRD izlenebilirliği: FR-16, FR-17 · V-03, V-05, V-06, V-12. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [30 — Genel ve Collection kapsamlı arama](tickets/30-search.md), [31 — Arşiv ve Deprecated geçmiş araması](tickets/31-search-history.md).
- Açık teknik kararlar: indekslenecek Tiptap ve metin dosyası içeriği, metin boyutu, sıralama, güncelleme zamanı ve sayfalama. PostgreSQL FTS ve trigram ortak arama yaklaşımı olarak seçilmiştir. PRD §17 ve TECH-STACK açık kararları esas alınır.
