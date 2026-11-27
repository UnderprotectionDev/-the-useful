# Ajanla Alt Koleksiyon Açma

**Status:** ready-for-agent

## Problem Statement

Ajanın organize edilmiş yeni bir konuya katkı verirken benim adıma üst düzey yapıyı değiştirmemesini istiyorum.

## Solution

Ajan açık istek ve yazma izniyle mevcut bir Space veya koleksiyon altında yalnız ad ve isteğe bağlı açıklamayla alt koleksiyon açar. Aynı üstte aynı ad varsa mevcut kimlik döner ve koleksiyonun ajan kökeni görünür.

## User Stories

1. Kütüphane sahibi olarak mevcut Space altında alt Collection açtırmak istiyorum. Böylece yeni konuyu düzenleyebileyim.
2. Kütüphane sahibi olarak yalnız adla oluşturmak istiyorum. Böylece gereksiz alan doldurmayayım.
3. Kütüphane sahibi olarak tekrar istekte mevcut kimliği almak istiyorum. Böylece mükerrer koleksiyon olmasın.
4. Kütüphane sahibi olarak oluşturan bağlantıyı görmek istiyorum. Böylece kökeni tanıyabileyim.
5. Kütüphane sahibi olarak ajanı sınırlı tutmak istiyorum. Böylece ağaç denetimim bende kalsın.

## Implementation Decisions

- Create yetkisi sadece mevcut parent kimliği altında ad ve isteğe bağlı açıklamayla oluşturmayı kapsar.
- Kardeş adına göre mevcut kimlik döner; eşzamanlı tekrar yeni kopya üretmez.
- Origin Agent connection'a bağlanır; Space yaratma, düzenleme, taşıma ve silme owner'a aittir.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-09, V-20) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Yazma yetkili ajan açık istekle Engineering altında yalnız ad verilerek Drizzle alt koleksiyonunu oluşturur. Tekrarlanan istekte var olan kimlik döner ve webde oluşturucu bağlantı ayırt edilir.
- Space açma ve açılan koleksiyonu yeniden adlandırma girişimleri reddedilir. Yalnız okuma yetkili veya iptal edilmiş bağlantı koleksiyon açamaz.

### Ek davranış kontrolleri

- Create izinli ajan Engineering altında Drizzle adında Collection açar; açıklama isteğe bağlıdır.
- Aynı üst/ad tekrarında mevcut kimlik döner; webde oluşturucu bağlantı görünür.
- Read-only ve iptal edilmiş bağlantı, kök Space oluşturma ve sonradan rename/edit/move/delete girişimleri reddedilir.

## Out of Scope

- Ajan mevcut üst koleksiyonun altında alt koleksiyon açabilir. Space açma, koleksiyonu yeniden adlandırma, düzenleme, taşıma ve silme kullanıcıya aittir.

## Further Notes

- Kaynak faz: [20-agent-subcollection](../../workflow/20-agent-subcollection/phase-context.md).
- PRD izlenebilirliği: FR-10, FR-24, FR-26 · V-09, V-20. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [40 — Ajanla izinli alt Collection açma](tickets/40-agent-subcollection.md).
