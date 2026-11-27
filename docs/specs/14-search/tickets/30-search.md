# 30: Genel ve Collection kapsamlı arama

**Spec:** [Kütüphanede Arama ve Geçmişi Bulma](../spec.md)

**What to build:** Kullanıcı Library genelinde veya Collection kapsamında saklanan metin ve metadata ile kısa, tekil sonuçlar bulabilsin, kapsam ve filtreleri klavyeyle değiştirebilsin.

**Blocked by:** [24 — Kullanıcı Stance belirleme](../../10-stance/tickets/24-stance.md), [25 — Raw ve Reviewed inceleme durumunu yönetme](../../11-maturity/tickets/25-maturity.md), [29 — Collection galeri, liste ve varsayılan görünüm](../../13-browse/tickets/29-browse.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Başlık, Collection adı, açıklama, Tag, saklanan metin/kod, metinsel dosya adı ve Source ile arama sonuç verir.
- [ ] Kapsam varsayılan alt Collection'ları içerir; yalnız doğrudan üyelik seçilebilir ve aynı Item tek kez döner.
- [ ] Tür, Collection, Origin ve durum eksenleriyle filtrelenebilir; sonuç ayırt edici metadata içerir.
- [ ] Klavye ile arama, sonuç açma ve boş sorgu sonrası kapsam/sorgu değiştirme yapılır; büyüyen veri kullanılabilir kalır.
