# 52: Parametreli şablonu detail'de doldurup kopyalama

**Spec:** [Parametreli Şablonları Yeniden Kullanma](../spec.md)

**What to build:** Kullanıcı basit değişkenli şablonu değerleri veya varsayılanlarıyla doldurup özgün metni değiştirmeden kopyalayabilsin. Ajan şablonun özgün tanımlarını okuyabilsin.

**Blocked by:** [38 — Seçili Item'ın tam MCP okuması](../../19-agent-read/tickets/38-agent-read-item.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Reference PRD ve Reusable Part şablonu farklı Item'lar olarak bulunur.
- [ ] Prompt, brief veya doküman şablonu basit değişken tanımlarıyla saklanır; kullanıcı değer veya varsayılanla doldurur ve sonucu kopyalar.
- [ ] Özgün metin ve Revision değişmez; MCP özgün şablon, değişken ve varsayılanları okur.
