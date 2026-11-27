# 22: Trash'ten önceki duruma geri yükleme

**Spec:** [Kayıtları Düzenleme ve Yaşam Döngüsünü Yönetme](../spec.md)

**What to build:** Kullanıcı Trash'teki Item'ı önceki Lifecycle'a, hâlen geçerli üyelikleri, ilişkileri ve dosyalarıyla geri yükleyebilsin.

**Blocked by:** [15 — Collection alt ağacını etki bilgisiyle silme](../../07-membership/tickets/15-delete-collection.md), [21 — Item'ı Trash'e taşıma](../../09-manage/tickets/21-trash-item.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Active veya Archived Item kendi önceki durumuna geri döner.
- [ ] Hâlen geçerli üyelikler, ilişkiler, dosyalar korunur; artık bulunmayan hedefler tekrar oluşturulmaz.
- [ ] Üyeliksiz Active kayıt Inbox'a, Archived kayıt arşive döner.
