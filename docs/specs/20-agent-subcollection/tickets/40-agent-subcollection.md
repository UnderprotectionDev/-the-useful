# 40: Ajanla izinli alt Collection açma

**Spec:** [Ajanla Alt Koleksiyon Açma](../spec.md)

**What to build:** Create izinli ajan açık istekle mevcut Collection altında alt Collection açabilsin. Aynı üst/ad tekrarında mevcut kimlik dönsün ve Origin görünür olsun.

**Blocked by:** [36 — MCP ile bilinen Collection'ı keşfetme ve açma](../../18-agent-discovery/tickets/36-agent-open-collection.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Create izinli ajan Engineering altında Drizzle adında Collection açar; açıklama isteğe bağlıdır.
- [ ] Aynı üst/ad tekrarında mevcut kimlik döner; webde oluşturucu bağlantı görünür.
- [ ] Read-only ve iptal edilmiş bağlantı, kök Space oluşturma ve sonradan rename/edit/move/delete girişimleri reddedilir.
