# Üyelikleri Yönetme ve Koleksiyon Silme

**Status:** ready-for-agent

## Problem Statement

Aynı bilgiyi birçok bağlamda kullanmak ve koleksiyonları kaldırırken içeriğimi kaybetmemek istiyorum.

## Solution

Kullanıcı bir kaydı kopyalamadan farklı Space ve koleksiyonlara ekler, üyeliklerini kaldırır ve gerekmeyen koleksiyon ağaçlarını siler. Kayıt tek kimliğini korur ve organizasyon değişikliği içeriği yok etmez.

## User Stories

1. Kütüphane sahibi olarak aynı Item'ı iki Space'e eklemek istiyorum. Böylece kopya yönetmeyeyim.
2. Kütüphane sahibi olarak üyeliği sonradan eklemek istiyorum. Böylece Inbox'ı düzenleyebileyim.
3. Kütüphane sahibi olarak bir üyeliği kaldırmak istiyorum. Böylece diğer bağlamları koruyabileyim.
4. Kütüphane sahibi olarak silme etkisini görmek istiyorum. Böylece bilinçli karar verebileyim.
5. Kütüphane sahibi olarak koleksiyon ağacını silmek istiyorum. Böylece gereksiz organizasyonu kaldırabileyim.

## Implementation Decisions

- Membership benzersiz Item–Collection bağıdır; Item kimliği, Content ve diğer Membership'ler korunur.
- Silme etkilenen alt koleksiyon ve kayıt sayısını gösterir ve ayrı kullanıcı onayıyla ağaç ve Membership'leri kaldırır.
- Inbox koşulu üyelik değişikliği sonrası yeniden değerlendirilir; Archived Item arşivde kalır.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-11, V-19) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı bir kaydı iki farklı Space’teki koleksiyonlara ekler ve iki konumda da aynı kaydı açar. Inbox’tan koleksiyona eklenen kayıt Inbox’tan çıkar, son üyeliği kaldırılan aktif kayıt yeniden Inbox’ta görünür.
- Alt ağaç silinmeden önce etkilenen alt koleksiyon ve kayıt sayıları gösterilir. Onaydan sonra diğer üyelikler ve kayıtlar korunur.

### Ek davranış kontrolleri

- Bir Item iki Space altındaki Collection'da aynı kimlikle görünür ve açılır.
- Inbox'taki Item üyelik eklendiğinde Inbox'tan çıkar.
- Aynı Membership ikinci kez kopyalanmaz.
- Yalnız seçili üyelik kaldırılır; Content, dosyalar, diğer üyelikler korunur.
- Son üyeliği kaldırılan Active Item Inbox'a döner.
- Onay öncesi etkilenen alt Collection ve Item sayıları gösterilir.
- İptalde hiçbir şey değişmez; onayda ağaç ve ilgili Membership'ler kaldırılır.
- Item ve diğer üyelikleri korunur; üyeliği kalmayan Active Item Inbox'ta görünür.

## Out of Scope

- Koleksiyon silme işlemi geri alınamaz ve hiçbir kaydı silmez.

## Further Notes

- Kaynak faz: [07-membership](../../workflow/07-membership/phase-context.md).
- PRD izlenebilirliği: FR-02, FR-03, FR-08 · V-11, V-19. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [13 — Item'ı birden çok Collection'a ekleme](tickets/13-add-membership.md), [14 — Seçili Membership'i kaldırma](tickets/14-remove-membership.md), [15 — Collection alt ağacını etki bilgisiyle silme](tickets/15-delete-collection.md).
