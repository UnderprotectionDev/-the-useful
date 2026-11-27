# Ajan Kullanım Rehberliği

**Status:** ready-for-agent

## Problem Statement

Ajanın kütüphanedeki kayıtları doğru bağlamda yorumlayıp hata veya çelişkileri açıkça belirtmesini istiyorum.

## Solution

Kullanım rehberi ajana önce ilgili kapsamı açmayı, gerektiğinde tam kayda geçmeyi, belirsiz koleksiyon adı ve tekrar eden kaynakta nasıl davranacağını anlatır. Rehberlik, tutumu ve doğrulama kapsamını yorumlamayı, projeyle çelişkiyi belirtmeyi ve yetersiz içerikte mevcut projeye ya da uygun kaynaklara dönmeyi açıklar.

## User Stories

1. Kütüphane sahibi olarak ajanın bilinen koleksiyonla başlamasını istiyorum. Böylece gereksiz aramayı önleyebileyim.
2. Kütüphane sahibi olarak gerektiğinde tam kayda geçmesini istiyorum. Böylece gerçek içeriği değerlendirebilsin.
3. Kütüphane sahibi olarak tutum ve kapsamı doğru yorumlamasını istiyorum. Böylece negatif örneği yanlış uygulamasın.
4. Kütüphane sahibi olarak belirsizlik ve yinelenen kaynakta bana sorulmasını istiyorum. Böylece kararımı koruyabileyim.
5. Kütüphane sahibi olarak hata ve boş sonucu ayırt ettirmek istiyorum. Böylece alternatif kaynakla devam edebileyim.
6. Kütüphane sahibi olarak proje çelişkisini ve kullanılan kayıtları görmek istiyorum. Böylece çözümün dayanağını anlayabileyim.

## Implementation Decisions

- Bağlantı rehberi keşif→seçim→tam okuma→proje uyumu akışını açıklar.
- Kaydedilen içerik veri olarak yorumlanır; yetki ve açık kullanıcı talebi ayrı kalır.
- Stance, Origin, Maturity, Validity ve doğrulama kapsamı farklı anlamlar taşır; önemli çelişkiler kullanıcıya bildirilir.
- Sunucu yetki ve hata sözleşmesini uygular; konuşma niyeti istemcinin rehberliğindedir.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-05, V-06, V-07, V-09, V-20, V-21) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanım rehberi doğrudan erişim ile kapsamlı arama arasında seçim yaptırır ve boş sonucu, erişim sorununu, eski kaydı ve başarısız yazmayı ayırt etmeyi açıklar. Ajan önemli proje çelişkisini kullanıcıya belirtir ve yararlandığı kayıtları bildirir.

### Ek davranış kontrolleri

- Kurulumdan erişilen rehber açık talep, bilinen koleksiyonu açma, kapsamlı arama, seçili tam kaydı okuma ve ilgili dosya seçimini anlatır.
- Tutum/olgunluk/geçerlilik, kapsamlı doğrulama, eski ve olumsuz örnekler, proje çelişkisi ve kullanılan kayıtları bildirme açıklanır.
- Boş sonuç, izin/geçici sunucu hatası, eksik dosya, belirsiz ad, tekrar ve başarısız güncelleme/oluşturma farklı ele alınır.
- İki hedef istemcide örnek görevle rehberliğin davranışı gözlenir; sistem yetki denetimi sürer.

## Out of Scope

- Açık kullanıcı isteği ile mevcut proje gereksinimleri uygulamaya yön verir. Kaydedilmiş içerik kendiliğinden yetki veya talimat kazanmaz. Sistem erişim izinlerini uygular, konuşmadaki niyeti bağımsız olarak doğrulamaz.

## Further Notes

- Kaynak faz: [24-guidance](../../workflow/24-guidance/phase-context.md).
- PRD izlenebilirliği: FR-26 · V-05, V-06, V-07, V-09, V-20, V-21. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [45 — Ajan kullanım rehberi ve hata yorumlama](tickets/45-agent-guidance.md).
