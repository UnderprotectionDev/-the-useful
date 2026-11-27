# Parametreli Şablonları Yeniden Kullanma

**Status:** ready-for-agent

## Problem Statement

Bir prompt veya doküman şablonunu değişkenleriyle tekrar kullanmak ve her seferinde özgün metni değiştirmemek istiyorum.

## Solution

Kullanıcı Reference örneğini Reusable Part şablonundan ayırır, prompt, brief veya doküman şablonunu değerler ve varsa varsayılanlarla doldurup özgün metni değiştirmeden kopyalar. Yetkili ajan özgün metni, değişken tanımlarını ve varsayılanları okur.

## User Stories

1. Kütüphane sahibi olarak Reference ile Reusable Part ayırt etmek istiyorum. Böylece örneği şablon sanmayayım.
2. Kütüphane sahibi olarak değişkenli metni saklamak istiyorum. Böylece yeniden kullanılabilir içerik oluşturabileyim.
3. Kütüphane sahibi olarak kendi değerlerimi ve varsayılanları kullanmak istiyorum. Böylece çıktıyı göreve uyarlayabileyim.
4. Kütüphane sahibi olarak doldurulmuş şablonu kopyalamak istiyorum. Böylece özgün metni koruyabileyim.
5. Kütüphane sahibi olarak Palette içinde doldurmak istiyorum. Böylece ayrıntı ekranı açmadan çalışabileyim.
6. Kütüphane sahibi olarak ajanın özgün metin ve değişkenleri okumasını istiyorum. Böylece bağlamı doğru anlayabilsin.

## Implementation Decisions

- Template variable sözlükteki {{name}} ve {{name:default}} biçimlerini destekler; basit doldurma ve varsayılanlar yeterlidir.
- Özgün şablon ve değişken tanımları saklanır; doldurma transient sonuç üretir ve Item Revision'ı değiştirmez.
- Detail ve Palette aynı doldurma sözleşmesini kullanır, MCP özgün metni ve tanımları döndürür.
- Reference örnek ile Reusable Part şablon Item type üzerinden ayrılır.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-14, V-17, V-18) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Örnek PRD ile yeniden kullanılabilir şablon ayrı türlerle bulunur. Kullanıcı detaydan veya Palette içinden doldurduğu metni kopyalar. Sonuç girilen değerleri ya da varsayılanları içerir ve özgün şablon aynı kalır. Ajan özgün metni ve değişken tanımlarını okur.

### Ek davranış kontrolleri

- Reference PRD ve Reusable Part şablonu farklı Item'lar olarak bulunur.
- Prompt, brief veya doküman şablonu basit değişken tanımlarıyla saklanır; kullanıcı değer veya varsayılanla doldurur ve sonucu kopyalar.
- Özgün metin ve Revision değişmez; MCP özgün şablon, değişken ve varsayılanları okur.
- Ortak aramada parametreli şablon bulunur.
- Kullanıcı detail açmadan Palette'te klavyeyle değerleri doldurup sonucu kopyalar.
- Varsayılanlar uygulanır ve özgün şablon değişmez.

## Out of Scope

- Basit değişkenler ve isteğe bağlı varsayılanlar desteklenir. Koşul, döngü ve genel amaçlı şablon yürütme kapsam dışıdır.

## Further Notes

- Kaynak faz: [29-templates](../../workflow/29-templates/phase-context.md).
- PRD izlenebilirliği: FR-21, FR-31, FR-34 · V-14, V-17, V-18. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [52 — Parametreli şablonu detail'de doldurup kopyalama](tickets/52-template-detail.md), [53 — Parametreli şablonu Palette içinde doldurma](tickets/53-template-palette.md).
- Açık teknik kararlar: değişken ayrıştırma, kaçış, yinelenen değişken ve varsayılanı olmayan alan davranışı. Ortak TypeScript ayrıştırıcı ve Zod doğrulaması yaklaşımı kullanılır. PRD §17 ve TECH-STACK açık kararları esas alınır.
