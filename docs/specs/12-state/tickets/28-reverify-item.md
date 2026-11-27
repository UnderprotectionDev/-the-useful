# 28: Güncel kaydı yeniden doğrulama

**Spec:** [Teknik Geçerliliği ve Doğrulamayı İzleme](../spec.md)

**What to build:** Kullanıcı güncel teknik içerik için yeni doğrulama dayanağı girip kaydı Verified yapabilsin ve eski dayanakları ayırt edebilsin.

**Blocked by:** [20 — Arşivden aktife dönme](../../09-manage/tickets/20-unarchive-item.md), [27 — Teknik değişiklikte yeniden doğrulama gereksinimi](../../12-state/tickets/27-invalidate-verification.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Yeni kapsam, tarih ve not girilerek güncel Item Verified yapılır.
- [ ] Güncel ve önceki doğrulama dayanakları ayırt edilir.
- [ ] Arşivleme ve yeniden etkinleştirme diğer eksenleri değiştirmez; bu regresyon Lifecycle akışı ile doğrulanır.
