# 38: Seçili Item'ın tam MCP okuması

**Spec:** [Ajanla Seçili Kaydı ve Gerçek Dosyaları Okuma](../spec.md)

**What to build:** Yetkili ajan seçili Item'ın tam metnini, kaynak ve metadata'sını, durumlarını, doğrulama geçmişini ve ilişkilerini okuyabilsin. Kimliği bilinen Archived Item da açılabilsin.

**Blocked by:** [28 — Güncel kaydı yeniden doğrulama](../../12-state/tickets/28-reverify-item.md), [36 — MCP ile bilinen Collection'ı keşfetme ve açma](../../18-agent-discovery/tickets/36-agent-open-collection.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Seçili Item'ın metin, kod, Source, kişisel not, ajan açıklaması, Origin, Stance, durum, güncel/eski doğrulama ve uyumluluğu ayırt edilir.
- [ ] Relationship türü ve hedef kimliği döner; hedef gerektiğinde ayrıca açılır.
- [ ] Kimliği bilinen Archived Item açılır; Trash, izinsiz ve iptal edilmiş bağlantı erişimi reddedilir.
