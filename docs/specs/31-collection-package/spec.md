# Koleksiyon Paketi İndirme

**Status:** ready-for-agent

## Problem Statement

Bir projede belirli Space veya Collection'a ait bilgiyi doğrudan okunabilir bir klasör düzeninde kullanmak istiyorum.

## Solution

Kullanıcı bir Space veya koleksiyonun alt ağacını, bir proje dizininden okunabilen Markdown ve özgün dosyalarla indirir. Ortak kayıt her ilgili klasörde yer alıp dizin dosyasında aynı kimlikle eşleşir, arşiv isteğe bağlı eklenir ve Trash paket dışında kalır.

## User Stories

1. Kütüphane sahibi olarak tek Collection ağacını paketlemek istiyorum. Böylece gerekli konuyu projeye taşıyabileyim.
2. Kütüphane sahibi olarak Item'ları Markdown ve asıl dosyalarla almak istiyorum. Böylece uygulamasız okuyabileyim.
3. Kütüphane sahibi olarak ortak Item'ı her ilgili klasörde görmek istiyorum. Böylece bağlamı yerinde bulabileyim.
4. Kütüphane sahibi olarak ortak kimliği dizinde görmek istiyorum. Böylece kopyaların aynı bilgi olduğunu anlayabileyim.
5. Kütüphane sahibi olarak Archived Item'ları isteğe bağlı almak istiyorum. Böylece gerektiğinde geçmişi dahil edebileyim.

## Implementation Decisions

- Collection package mevcut tek Space veya Collection alt ağacını Markdown ve özgün dosyalarla yansıtır; tam export biçiminin alt kümesidir.
- Çok üyelikli Item her ilgili klasörde görünür, dizin dosyası ortak kimlik ile eşler.
- Archived varsayılan hariç, açık seçime dahil; Trashed her zaman hariçtir.
- Paket MCP ve uygulama bağımsız okunabilir; özel Collection'lar arası Knowledge Pack oluşturulmaz.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-22) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı iki alt koleksiyonlu Navigation ağacını indirir. Ortak kayıt her ilgili klasörde bulunur ve dizin dosyasında aynı kimliği taşır. Arşiv yalnız açık seçimde eklenir, Trash ise her iki paketin dışında kalır. Paket uygulamadan veya MCP bağlantısından bağımsız okunabilir.

### Ek davranış kontrolleri

- Navigation Collection ve alt Collection'ları kendi klasör düzeninde paketlenir; içerik Markdown ve özgün dosyalarla uygulamasız okunur.
- Ortak Item her ilgili klasörde bulunur; dizin dosyasında aynı kimlik belirtilir.
- Varsayılan paket Archived kayıt içermez; açık seçenekle içerir. Trash her iki pakette de bulunmaz.
- Seçili ağacın dışındaki üyelikler ayrı koleksiyonlar olarak pakete dahil olmaz.

## Out of Scope

- Paket mevcut tek bir Space veya koleksiyon ağacını kapsar. Koleksiyonlar arası özel seçki ve bu seçkinin MCP ile keşfi kapsam dışıdır.

## Further Notes

- Kaynak faz: [31-collection-package](../../workflow/31-collection-package/phase-context.md).
- PRD izlenebilirliği: FR-30 · V-22. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [55 — Collection ağacını Markdown ve özgün dosya paketi olarak indirme](tickets/55-collection-package.md).
- Açık teknik kararlar: dizin/manifest biçimi, dosya ve klasör ad çakışmaları, paket oluşturma sırasında veri tutarlılığı. PRD §17 ve TECH-STACK açık kararları esas alınır.
