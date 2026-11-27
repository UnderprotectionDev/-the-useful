# 44: Unreviewed agent items takip görünümü

**Spec:** [İncelenmemiş Ajan Kayıtlarını Takip Etme](../spec.md)

**What to build:** Kullanıcı tüm Active Raw ajan kökenli Item'ları üyelikten bağımsız sabit görünümde takip edebilsin ve Reviewed olanları görünümden çıkarabilsin.

**Blocked by:** [41 — Ajanla URL ve metin Item oluşturma](../../21-agent-contribute/tickets/41-agent-create-basic.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Gezinmeden sabit görünüm açılır; Inbox'taki ve Collection üyeliği olan Active Raw agent Item'lar bulunur.
- [ ] Kullanıcı kökenli, Archived/Trashed veya Reviewed Item filtrede görünmez.
- [ ] Reviewed yapıldığında Item görünümden çıkar; Raw'a alınınca koşulları sağlıyorsa görünür.
