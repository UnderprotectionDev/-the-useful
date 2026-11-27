# Özel Kütüphaneye Erişim

**Status:** ready-for-agent

## Problem Statement

Farklı bilgisayarlarda biriken kişisel parçaları tek yerde tutmak ve özel içeriğin erişimini kontrol etmek istiyorum.

## Solution

Kütüphane sahibi farklı bilgisayarlarda kişisel web oturumuyla aynı kütüphaneye erişir. İçerik, arama sonucu ve dosya baytları herkese açık değildir ve web tarafında yalnızca geçerli oturuma döner.

## User Stories

1. Kütüphane sahibi olarak farklı cihazdan giriş yapmak istiyorum. Böylece aynı Library'ye ulaşabileyim.
2. Kütüphane sahibi olarak oturum sonrası kaldığım kütüphaneyi açmak istiyorum. Böylece verilerim cihazlar arasında ortak kalsın.
3. Kütüphane sahibi olarak içerik ve aramalarımı oturumla korumak istiyorum. Böylece özel bilgilerim yalnız yetkili kişiye görünsün.
4. Kütüphane sahibi olarak saklanan dosyaları yetkili oturumla almak istiyorum. Böylece dosyalarımın gizliliğini koruyabileyim.

## Implementation Decisions

- Tek owner kimliği, kontrollü ilk kayıt ve Google OAuth/OIDC ile Better Auth kullanılır.
- Web RPC, arama, medya ve dosya yolları ortak owner yetkilendirmesine tabi olur.
- Geçerli oturuma ait aynı kalıcı Library kullanılır.

## Testing Decisions

- En yüksek test sınırı kullanıcının gerçek web route'u ve oRPC sözleşmesi olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- Playwright ile kullanıcı akışı, klavye ve uygun erişilebilirlik kontrolleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-23) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kütüphane sahibi farklı cihazlardan giriş yaparak aynı özel kütüphaneye ulaşır. Oturumsuz web isteği kütüphane içeriğini alamaz.

### Ek davranış kontrolleri

- İki cihazda aynı kullanıcı aynı Library'yi açar; geçersiz oturum içerik, arama ve dosya isteklerinde reddedilir.
- Oturum kapatıldığında yeni yetkili istekler reddedilir.
- İlk owner kaydı kontrollü yapılır; başka hesap Library içeriğine erişemez.

## Out of Scope

- İlk sürüm tek kişiye ait özel bir kütüphanedir. Paylaşım, herkese açık kayıt ve ekip üyeliği kapsam dışıdır.

## Further Notes

- Kaynak faz: [01-private-access](../../workflow/01-private-access/phase-context.md).
- PRD izlenebilirliği: FR-01, FR-27 · V-23. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [02 — Özel Library oturumunu açma](tickets/02-private-access.md).
- Açık teknik kararlar: gerçek Google OAuth ve uzak ortam doğrulaması, owner ilk kayıt deneyimi ve üretim ortamı dağıtım ayarları. PRD §17 ve TECH-STACK açık kararları esas alınır.
