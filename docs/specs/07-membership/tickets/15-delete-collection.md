# 15: Collection alt ağacını etki bilgisiyle silme

**Spec:** [Üyelikleri Yönetme ve Koleksiyon Silme](../spec.md)

**What to build:** Kullanıcı silme etkisini görüp onaylayarak bir Collection alt ağacını ve ilgili üyelikleri kaldırabilsin. İlgili Item'lar ve diğer üyelikleri korunabilsin.

**Blocked by:** [14 — Seçili Membership'i kaldırma](../../07-membership/tickets/14-remove-membership.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Onay öncesi etkilenen alt Collection ve Item sayıları gösterilir.
- [ ] İptalde hiçbir şey değişmez; onayda ağaç ve ilgili Membership'ler kaldırılır.
- [ ] Item ve diğer üyelikleri korunur; üyeliği kalmayan Active Item Inbox'ta görünür.
