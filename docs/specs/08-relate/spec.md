# Kayıtlar Arasında İlişki Kurma

**Status:** ready-for-agent

## Problem Statement

Bir referansın diğer bir yaklaşım veya tarifle bağını kaybetmeden ayrı bilgileri yeniden kullanmak istiyorum.

## Solution

Kullanıcı farklı Space’lerdeki kayıtları ilişkili, türetildiği referans, uyguladığı yaklaşım, alternatif veya yerini aldığı çözüm gibi türlerle bağlar. Mevcut bir kayıttan, kaynağıyla ilişkili ve ayrı kimlikli yeni bir kayıt da türetebilir. Gerekli olduğunda aynı hedef kaydı açar ve iki kayıt da kendi kimliğini korur.

## User Stories

1. Kütüphane sahibi olarak iki farklı Space'teki kaydı ilişkilendirmek istiyorum. Böylece ilgili bilgiyi birlikte bulabileyim.
2. Kütüphane sahibi olarak ilişki türü seçmek istiyorum. Böylece bağın anlamını anlayabileyim.
3. Kütüphane sahibi olarak ilişki hedefini açmak istiyorum. Böylece asıl kayda geçebileyim.
4. Kütüphane sahibi olarak referanstan ayrı tarif türetmek istiyorum. Böylece özgün kaynağı koruyabileyim.

## Implementation Decisions

- Relationship kaynak ve hedef Item kimliğiyle ve türüyle saklanır: related to, derived from, implements, alternative to, supersedes.
- Türetme yeni Item kimliği üretir, kaynak Item'ı değiştirmez.
- Ajan ilişkileri yaratma yetkisi yeni Item katkısı fazında ele alınır.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-19, V-07) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Bir sidebar kaydı başka bir Space’teki görsel referansa türü belirli bir bağla ilişkilendirilir. Kullanıcı kayıt ayrıntısında ilişki türünü ve hedefi görür, hedefi gerektiğinde açar.
- Bir bağlantı kaydından ayrı bir tarif türetildiğinde iki kayıt ilişkili görünür ve kaynak kayıt değişmez.

### Ek davranış kontrolleri

- Kullanıcı farklı Space'lerdeki Item'ları desteklenen ilişki türüyle bağlar.
- Ayrıntıda ilişki türü ve hedef görünür; hedef açılır.
- İlişki kaynağı ve hedefi kopyalamaz veya içeriğini değiştirmez.
- Bir Reference'tan yeni Recipe ayrı kimlikle oluşturulur.
- İki kayıt derived from ilişkisiyle bulunabilir; kaynak kayıt değişmez.

## Out of Scope

- İlişki hedef kaydı kopyalamaz, değiştirmez veya kendiliğinden uygulamaz. Ajanın ilişki ekleme yetkisi yeni kayıt oluşturma işleminin kapsamındadır.

## Further Notes

- Kaynak faz: [08-relate](../../workflow/08-relate/phase-context.md).
- PRD izlenebilirliği: FR-12 · V-19, V-07. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [16 — Item'lar arası türü belirli ilişki kurma](tickets/16-relationships.md), [17 — Mevcut Item'dan ayrı kayıt türetme](tickets/17-derive-item.md).
