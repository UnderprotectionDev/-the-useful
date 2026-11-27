# 02: Özel Library oturumunu açma

**Spec:** [Özel Kütüphaneye Erişim](../spec.md)

**What to build:** Kütüphane sahibi farklı cihazlarda kişisel giriş yaparak aynı Library'yi açabilsin. İçerik, arama ve dosya erişimi geçerli owner oturumuyla korunsun.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] İki cihazda aynı kullanıcı aynı Library'yi açar; geçersiz oturum içerik, arama ve dosya isteklerinde reddedilir.
- [ ] Oturum kapatıldığında yeni yetkili istekler reddedilir.
- [ ] İlk owner kaydı kontrollü yapılır; başka hesap Library içeriğine erişemez.
