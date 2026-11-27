# 29: Collection galeri, liste ve varsayılan görünüm

**Spec:** [Koleksiyonları Galeri ve Listeyle İnceleme](../spec.md)

**What to build:** Kullanıcı Collection'ın doğrudan Active Item'larını ve alt Collection'larını galeri veya listeyle inceleyebilsin. Varsayılan görünüm ile Deprecated işaretleri korunsun.

**Blocked by:** [21 — Item'ı Trash'e taşıma](../../09-manage/tickets/21-trash-item.md), [26 — Teknik Validity ve doğrulama dayanağı belirleme](../../12-state/tickets/26-validity.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Karma Collection açıldığında alt Collection'lar ve doğrudan Active Item'lar görünür.
- [ ] Galeri ve liste aynı Item kimliklerini gösterir; galeri görsel, liste tür, başlık ve açıklamayı öne çıkarır.
- [ ] Deprecated Active Item işaretlenir; Archived/Trashed normal listede görünmez.
- [ ] Varsayılan görünüm kaydedilir, sonraki açılışta uygulanır; büyüyen koleksiyonda gezinme kullanılabilir kalır.
