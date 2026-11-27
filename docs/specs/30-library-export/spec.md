# Kütüphanenin Tamamını Dışa Aktarma

**Status:** ready-for-agent

## Problem Statement

Bir gün uygulamadan bağımsız olarak tüm kişisel kütüphanemi ve bağlamını kayıpsız okuyabilmek istiyorum.

## Solution

Kullanıcı Space’leri, koleksiyon ağacını ve koleksiyon açıklamalarını, kayıtların tam içeriğini, kaynaklarını ve kişisel notlarını, etiketleri, üyelikleri, ilişkileri, kökeni, durumları, tutumu, doğrulama ve zaman bilgilerini, şablonları ve değişkenlerini, bölge yorumlarını, kullanım örneklerini, statik önizlemeleri, demo bağlantılarını ve diğer sağlanmış özellikleri uygulamadan bağımsız bir pakette alır. Makinece okunabilir manifest kayıt ve dosya referanslarını çözer, saklanan dosyaların özgün baytları korunur ve Arşiv ile Trash ayırt edilir ve kalıcı silinmiş kayıtlar pakete girmez.

## User Stories

1. Kütüphane sahibi olarak tüm Collection ağacını dışa aktarmak istiyorum. Böylece organizasyonumu taşıyabileyim.
2. Kütüphane sahibi olarak Item ve metadata'yı almak istiyorum. Böylece bilgilerimi bağımsız okuyabileyim.
3. Kütüphane sahibi olarak üyelik ve ilişki kimliklerini çözmek istiyorum. Böylece ortak kayıtları bağlamıyla tanıyabileyim.
4. Kütüphane sahibi olarak özgün dosyaları almak istiyorum. Böylece gerçek içeriği koruyabileyim.
5. Kütüphane sahibi olarak archive ve Trash'i ayırmak istiyorum. Böylece eski ve silinmeye aday bilgiyi tanıyabileyim.
6. Kütüphane sahibi olarak şablon, yorum ve doğrulamayı almak istiyorum. Böylece özelleşmiş bilgileri kaybetmeyeyim.
7. Kütüphane sahibi olarak ayarlar üzerinden paketi indirmek istiyorum. Böylece verimi istediğim zamanda taşıyabileyim.

## Implementation Decisions

- JSON manifest, Markdown ve özgün dosyalardan oluşan uygulamadan bağımsız ZIP kullanılır.
- Manifest kimlikleri Collection ağacı, Item, Membership, Relationship, region comment, template ve asset bağlantılarını çözebilir kılar.
- Tüm sağlanan metadata (Source, not, Origin, Tag, Stance, durum eksenleri, doğrulama, zamanlar, kullanım/önizleme/demo) saklanır.
- Archived ve Trashed ayırt edilerek dahil, kalıcı silinen hariç tutulur; harici içerik Source olarak kalır.
- Ayarlar ve export ekranına gezinmeden ulaşılır; dosya byte'ları ve ilişki tutarlılığı doğrulanır.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-10) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı bütün kütüphaneyi dışa aktarır. Manifest koleksiyon ağacını ve kayıt kimliklerini üyelik, ilişki, yorum, şablon ve dosya referanslarıyla tutarlı biçimde eşler. Dosyaların özgün baytları korunur ve paket uygulama olmadan okunabilir.
- Pakette koleksiyon açıklamaları, etiketler, kaynaklar, kişisel notlar, tutum, doğrulama ve zaman bilgileri, kullanım örnekleri, statik önizlemeler ve demo bağlantıları ilgili kayıt veya koleksiyonla eşleşir. Arşivlenmiş ve Trash’teki kayıtlar durumlarıyla ayırt edilir.
- Kullanıcı gezinmeden ayarlar ve veri dışa aktarımı ekranını açıp dışa aktarımı başlatır.

### Ek davranış kontrolleri

- Ayarlar/gezinmeden veri dışa aktarımı başlatılır ve uygulama olmadan okunur JSON manifest, Markdown ve özgün dosyalar alınır.
- Manifest ağaç, tekil Item kimlikleri, Membership, Relationship, Region comment, şablon ve dosya başvurularını çözer.
- Collection açıklamaları; Source, not, Tag, Origin, Stance, doğrulama/durum/zaman; kullanım örneği, önizleme, demo ve değişken bilgileri ilgili kimliklerle eşleşir.
- Archived ve Trashed kayıtlar ayrı durumla bulunur, kalıcı silinenler yoktur; harici içerik yalnız kaynak referansıdır.
- Saklanan dosya baytları özgün içerikle eşleşir.

## Out of Scope

- Arşiv ve Trash ayrı durumlarla dahil edilir. Kalıcı silinmiş kayıtlar dahil edilmez. Saklanmamış harici içerik kaynak referansıyla temsil edilir.

## Further Notes

- Kaynak faz: [30-library-export](../../workflow/30-library-export/phase-context.md).
- PRD izlenebilirliği: FR-29 · V-10. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [54 — Tüm Library'yi bağımsız pakete dışa aktarma](tickets/54-library-export.md).
- Açık teknik kararlar: sürümlü manifestin kesin biçimi, ad çakışmaları ve dışa aktarım sırasında tutarlılık. PRD §17 ve TECH-STACK açık kararları esas alınır.
