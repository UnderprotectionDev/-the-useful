# 06: Collection alt ağacını taşıma

**Spec:** [Space ve Koleksiyon Ağacını Yönetme](../spec.md)

**What to build:** Kullanıcı bir Collection'ı alt ağacıyla geçerli hedefe taşıyabilsin. Döngü ve kardeş ad çakışması mevcut ağacı değiştirmeden reddedilsin.

**Blocked by:** [04 — İç içe Collection oluşturma](../../02-organize/tickets/04-subcollections.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Geçerli hedefe taşınan alt ağaç aynı kimlikleri ve varsa üyelikleri korur.
- [ ] Space başka Collection altına taşındığında kök konumunu kaybeder.
- [ ] Kendine/alt ağacına taşıma ve kardeş ad çakışması mevcut yapıyı değiştirmeden reddedilir.
