# Kullanıcı Tutumunu Belirleme

**Status:** ready-for-agent

## Problem Statement

Bir örneğin kişisel tercihimi, uygulayacağım kuralı veya kaçındığım yaklaşımı temsil edip etmediğini açıkça belirtmek istiyorum.

## Solution

Yalnız kullanıcı bir kaydı İlham, Tercih, Kural, Alternatif veya Kaçınılacak örnek olarak değerlendirebilir. Tutum isteğe bağlıdır ve kayıt türünden, olgunluktan ve teknik doğrulamadan bağımsızdır.

## User Stories

1. Kütüphane sahibi olarak tutumu boş bırakmak istiyorum. Böylece henüz karar vermeden içerik saklayabileyim.
2. Kütüphane sahibi olarak ilham veya tercih işaretlemek istiyorum. Böylece beğenimin derecesini gösterebileyim.
3. Kütüphane sahibi olarak kapsamlı kural tanımlamak istiyorum. Böylece hangi bağlamda bağlayıcı olduğunu belirtebileyim.
4. Kütüphane sahibi olarak alternatif veya kaçınılacak örnek seçmek istiyorum. Böylece yanlış örnekleri doğru yorumlayabileyim.

## Implementation Decisions

- Stance, Item type ve üç durum ekseninden bağımsız, varsayılan Unspecified olan isteğe bağlı alandır.
- Yalnız owner açık işlemle Inspiration, Preference, Rule, Alternative veya Avoid belirler; Rule kapsamıyla okunur.
- Ajan katkısı, region comment veya teknik doğrulama otomatik Stance üretmez.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-05, V-09, V-19) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Bir referans ve bir karar kaydı başlangıçta Belirtilmemiş tutumla açılır. Kullanıcı birini Kaçınılacak örnek, diğerini kapsamı belirli Kural olarak işaretlediğinde kayıt ayrıntısında açık tutumları ayırt edilir.

### Ek davranış kontrolleri

- Reference ve Principle başlangıçta Unspecified görünür.
- Kullanıcı tüm desteklenen tutumları seçebilir; Avoid ve kapsamı belirli Rule ayırt edilir.
- Tür, Maturity ve Validity değişmez; diğer işlemler kendiliğinden Stance belirlemez.

## Out of Scope

- Tutum yalnız açık kullanıcı işlemiyle belirlenir. Kayıt türü, teknik doğrulama, bölge yorumu, ajanın kaydı kullanması ve ajan katkısı kendiliğinden tutum oluşturmaz.

## Further Notes

- Kaynak faz: [10-stance](../../workflow/10-stance/phase-context.md).
- PRD izlenebilirliği: FR-11 · V-05, V-09, V-19. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [24 — Kullanıcı Stance belirleme](tickets/24-stance.md).
