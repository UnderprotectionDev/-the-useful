# Ajan Bağlantılarını Yönetme

Kullanıcı bağlantıları ayrı ayrı oluşturur, okuma ve yazma izinlerini bağımsız yönetir ve gerektiğinde erişimi iptal eder. Her istekte güncel izin uygulanır, iptal önceden alınmış dosya adresine yapılan yeni isteği de kapsar. Bağlantı ekranı gezinmeden açılır ve bağlantı kurma talimatı ajanın kütüphaneye yalnız açık kullanıcı isteğiyle başvurmasını anlatır.

## Alt Fazlar

### Bağlantı ve İzin Verme

Kullanıcı ayrı bir ajan bağlantısı açar ve okuyabileceği veya izinli katkı yapabileceği işlemleri belirler.

Kullanıcı farklı istemcileri ayrı ayrı bağlayabilir. Yazma izni yeni kayıt oluşturma, alt koleksiyon açma ve aynı bağlantının el değmemiş Ham kaydını düzeltmeyle sınırlıdır.

### Bağlantıyı İptal Etme

İptal edilen bağlantı yeni arama, kayıt, yazma ve dosya istekleriyle veriye erişemez.

İptal sonrası önceden alınmış dosya adresine yapılan yeni istek de güncel izin denetiminden geçer.

## Tamamlanma Ölçütleri

- Kullanıcı gezinmeden bağlantı ekranını açar, talimatı izleyerek ayrı bir bağlantı kurar, okuma ve yazma izinlerini ayrı ayrı verir. İptal edilen bağlantının sonraki istekleri reddedilir.

## Kapsam Sınırları

- İşlem anında bağlantının güncel yetkileri uygulanır. İzinli ve açıkça istenmiş katkı için ikinci bir web onayı gerekmez.
