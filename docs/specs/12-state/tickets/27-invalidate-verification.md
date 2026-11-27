# 27: Teknik değişiklikte yeniden doğrulama gereksinimi

**Spec:** [Teknik Geçerliliği ve Doğrulamayı İzleme](../spec.md)

**What to build:** Teknik içerik değiştiğinde kullanıcı önceki doğrulama dayanağını geçmişte görebilsin ve kayıt yeniden doğrulanmayı beklesin. Anlamı koruyan değişiklikler doğrulamayı korusun.

**Blocked by:** [14 — Seçili Membership'i kaldırma](../../07-membership/tickets/14-remove-membership.md), [26 — Teknik Validity ve doğrulama dayanağı belirleme](../../12-state/tickets/26-validity.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Başlık, Tag, Membership ve anlamı koruyan yazım değişikliği doğrulamayı korur.
- [ ] Kod, yaklaşım veya uyumluluk değiştiğinde Needs reverification olur ve eski doğrulama geçmişte görünür.
- [ ] Kullanıcı yalnız yazım düzeltmesi için mevcut doğrulamayı koruyabilir.
