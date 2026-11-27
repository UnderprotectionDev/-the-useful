# 35: Agent connection iptali

**Spec:** [Ajan Bağlantılarını Yönetme](../spec.md)

**What to build:** Kullanıcı bir Agent connection'ı iptal edebilsin. O bağlantı yeni yetkili isteklerde erişim kaybetsin ve diğer bağlantılar çalışmaya devam etsin.

**Blocked by:** [34 — Agent connection oluşturma ve izin yönetimi](../../17-agent-connections/tickets/34-connections.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] İptal sonrası bağlantının yeni yetki gerektiren istekleri reddedilir; diğer bağlantılar etkilenmez.
- [ ] Arama, yazma ve daha önce alınmış dosya adreslerinin iptal sonrası erişimi ilgili MCP/medya ticket'larında da doğrulanır.
