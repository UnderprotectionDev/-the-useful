# Ajanla Kütüphanede İçerik Keşfetme

**Status:** ready-for-agent

## Problem Statement

Ajanın gereksiz tüm kütüphaneyi bağlama yüklemeden ilgili koleksiyon veya kaydı keşfetmesini istiyorum.

## Solution

Yetkili Codex ve Claude Code, açık kullanıcı isteğiyle aynı kütüphaneden kısa ve seçilebilir MCP sonuçları alır. Ajan Space’leri ve iç içe koleksiyonları ad, kimlik, kapsam ve kısa açıklamalarıyla keşfedebilir. Boş sonuç, izin ve geçici erişim hatalarından ayırt edilir.

## User Stories

1. Kütüphane sahibi olarak ajanı açık isteğimle bilinen koleksiyona yönlendirmek istiyorum. Böylece ilgili bağlamla başlayabilsin.
2. Kütüphane sahibi olarak ajanın Space ağacını keşfetmesini istiyorum. Böylece doğru kimliği seçebilsin.
3. Kütüphane sahibi olarak ajanla görev adı üzerinden aramak istiyorum. Böylece koleksiyon adı bilmeden kayıt bulabileyim.
4. Kütüphane sahibi olarak kısa tekil sonuç almak istiyorum. Böylece bağlam verimli kalsın.
5. Kütüphane sahibi olarak geçmiş aramasını açıkça istiyorum. Böylece eski veya olumsuz örnekleri değerlendirebileyim.
6. Kütüphane sahibi olarak boş sonuç ve hatayı ayırt etmek istiyorum. Böylece sonraki adımı doğru seçebileyim.

## Implementation Decisions

- Streamable HTTP MCP, ortak domain arama ve Collection okuma servislerine bağlanır.
- Bilinen koleksiyon adı/kimliği, alt koleksiyonlar, amaç/açıklama/not/varsayılan görünüm ve kısa doğrudan üye Active sonuçlar döner.
- Arama kapsamı, filtre ve dedup web ile aynıdır; limit ve devam mekanizması vardır.
- read izni her istekte uygulanır; boş sonuç, belirsiz ad, yetki veya erişim hataları ayırt edilir.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-02, V-03, V-05, V-06, V-08, V-12) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Codex ve Claude Code, adı verilen Breadcrumb koleksiyonunu doğrudan açar. Bir koleksiyon adı verilmeden sidebar görevi arandığında ilgili tekil kayda ulaşır. Gerçekten sonuç olmayan arama, izin ve sunucu sorunundan ayırt edilebilir.
- Ajan Space’lerden başlayarak iç içe koleksiyon ağacında gezinir ve açtığı koleksiyonun amacını, açıklamasını, notunu ve varsayılan görünümünü alır.
- Web ve ajan araması aynı kapsam ve tekilleştirme kurallarını uygular. Geçmiş araması olumsuz veya eski kaydı tutumu ve geçerlilik durumuyla döndürür, varsayılan arama geçerliliğini yitirmiş kaydı döndürmez ve Trash kayıtları hiçbir sorguda çıkmaz.

### Ek davranış kontrolleri

- Codex ve Claude Code ile açık istek üzerine Space ve alt Collection ad/kimlik/kapsamları keşfedilir.
- Bilinen Breadcrumb Collection amacı, açıklaması, notu, varsayılan görünümü, alt Collection'ları ve kısa doğrudan Active Item listesiyle açılır.
- read izni olmayan veya iptal edilen bağlantı reddedilir; belirsiz ad ayırt edilir.
- Codex ve Claude Code sidebar göreviyle ilgili kısa, sınırlı ve seçilebilir sonuç alır; devamı getirilebilir.
- Web ile aynı kapsam, doğrudan üyelik seçimi, tekil kimlik ve geçmiş filtreleri uygulanır.
- Archived/Deprecated açık filtreyle, tutum ve geçerlilikle ayırt edilir; Trash hiçbir sorguda dönmez.
- Boş sonuç, izin ve geçici sunucu hatası ayrı anlaşılır.

## Out of Scope

- Ajan kullanıcının açık isteğiyle erişir ve yalnızca ilgili kapsamı kullanır. Keşif kısa sonuç ve seçilebilen kimlik sağlar. Tam içerik ayrıca istenir.

## Further Notes

- Kaynak faz: [18-agent-discovery](../../workflow/18-agent-discovery/phase-context.md).
- PRD izlenebilirliği: FR-18, FR-19, FR-20, FR-26 · V-02, V-03, V-05, V-06, V-08, V-12. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [36 — MCP ile bilinen Collection'ı keşfetme ve açma](tickets/36-agent-open-collection.md), [37 — MCP ile göreve göre kapsamlı arama](tickets/37-agent-search.md).
