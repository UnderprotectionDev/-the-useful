# Ajanın Kendi Kaydını Düzeltmesi

Ajan aynı bağlantının oluşturduğu el değmemiş Aktif ve Ham kaydı tek işlemde düzeltir ve kullanıcının ilk içerik, üyelik, metadata, inceleme veya durum değişikliği yazmayı kalıcı kapatır. Aynı revizyona dayanan eşzamanlı yazmalardan yalnız biri uygulanır ve eski revizyon, kalıcı kilit ile dosya hatası ayırt edilir. Düzeltmeyle eklenen içerik de ajan kökeniyle görünür.

## Tamamlanma Ölçütleri

- Aynı bağlantı kendi el değmemiş Ham tarifine test dosyası ekler. Aynı revizyondan iki istek gönderilirse tek yazma gerçekleşir. Başka bağlantı, eski revizyon veya kullanıcı işlemiyle kapanmış kayıt reddedilir ve ret nedeni anlaşılır.
- Kullanıcı düzenlemesinden veya İncelenmiş işaretinden sonra (Ham’a geri çekilse bile) ve arşivlenip yeniden etkinleştirilen kayıtta güncelleme reddedilir. Ajanın durum değiştirme girişimi reddedilir ve kullanıcının notu ile kuralı değişmeden kalır.

## Kapsam Sınırları

- Düzeltme başlık, açıklama, içerik, dosya, etiket, kaynak ve mevcut koleksiyon üyeliğiyle sınırlıdır. İncelenmiş kaydı tekrar Ham yapmak veya arşivden çıkarmak kalıcı kilidi geri almaz. Dosya hatasında hiçbir değişiklik uygulanmaz.
