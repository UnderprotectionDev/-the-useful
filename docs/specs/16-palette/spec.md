# Command Palette ile Klavyeden Bulma ve Kullanma

**Status:** ready-for-agent

## Problem Statement

Uygun kaydı ararken ve kopyalarken fare veya ayrıntı ekranına bağımlı olmak istemiyorum.

## Solution

Kullanıcı Mod+K ile ortak aramadan kayıt veya koleksiyon bulur ve klavyeyle açar. Odaktaki uygun parametresiz içeriği en fazla iki klavye eylemiyle kopyalar, görsel veya dosya eylemine ulaşır ya da hızlı kayda geçer.

## User Stories

1. Kütüphane sahibi olarak Mod+K ile Palette açmak istiyorum. Böylece işimi kesmeden kütüphaneye ulaşabileyim.
2. Kütüphane sahibi olarak Item veya Collection arayıp açmak istiyorum. Böylece klavyeyle doğru bağlama geçebileyim.
3. Kütüphane sahibi olarak odaktaki metni hızlı kopyalamak istiyorum. Böylece bir sonraki işte kullanabileyim.
4. Kütüphane sahibi olarak görsel veya dosya eylemine geçmek istiyorum. Böylece gerekli asıl içeriği alabilmek.
5. Kütüphane sahibi olarak hızlı kayda geçmek istiyorum. Böylece bulduğum yeni parçayı saklayabilmek.

## Implementation Decisions

- Palette ortak arama ve kimlik sözleşmesini kullanır; Mod+K ile erişilir.
- Parametresiz uygun metnin kopyalanması doğru sonuç odaktayken en fazla iki klavye eylemidir.
- Görsel inceleme, dosya indirme ve hızlı kayıt eylemleri uygun sonuçlarda erişilebilir; parametre akışı şablon fazındadır.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-14) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı Mod+K ile arar, kayıt veya koleksiyon sonucunu klavyeyle açar, doğru parametresiz metin odağa geldiğinde en fazla iki klavye eylemiyle kopyalar ve hızlı kayda geçebilir.
- Görsel veya dosya içeren bir sonuçta kullanıcı Palette’ten ilgili inceleme veya indirme eylemine ulaşır.

### Ek davranış kontrolleri

- Mod+K ile ortak arama açılır, Item veya Collection bulunur, klavyeyle açılır.
- Doğru parametresiz sonuç odaktayken en fazla iki klavye eylemiyle doğru metin kopyalanır.
- Görsel/dosya eylemine ve hızlı kayda Palette'ten ulaşılır.

## Out of Scope

- İki eylem bütçesi doğru sonuç odaktayken başlar. Sorgu yazma, sonuçlar arasında gezinme ve parametre doldurma ölçümün dışındadır. Parametreli içeriğin doldurulması şablon fazında tamamlanır.

## Further Notes

- Kaynak faz: [16-palette](../../workflow/16-palette/phase-context.md).
- PRD izlenebilirliği: FR-13, FR-16, FR-31 · V-14. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [33 — Command Palette ile arama, açma ve kopyalama](tickets/33-palette.md).
- Açık teknik kararlar: karma Item'da kopyalanacak içerik ve tarayıcı clipboard hata davranışı. PRD §17 ve TECH-STACK açık kararları esas alınır.
