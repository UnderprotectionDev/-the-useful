# Ajanla Alt Koleksiyon Açma

Ajan açık istek ve yazma izniyle mevcut bir Space veya koleksiyon altında yalnız ad ve isteğe bağlı açıklamayla alt koleksiyon açar. Aynı üstte aynı ad varsa mevcut kimlik döner ve koleksiyonun ajan kökeni görünür.

## Tamamlanma Ölçütleri

- Yazma yetkili ajan açık istekle Engineering altında yalnız ad verilerek Drizzle alt koleksiyonunu oluşturur. Tekrarlanan istekte var olan kimlik döner ve webde oluşturucu bağlantı ayırt edilir.
- Space açma ve açılan koleksiyonu yeniden adlandırma girişimleri reddedilir. Yalnız okuma yetkili veya iptal edilmiş bağlantı koleksiyon açamaz.

## Kapsam Sınırları

- Ajan mevcut üst koleksiyonun altında alt koleksiyon açabilir. Space açma, koleksiyonu yeniden adlandırma, düzenleme, taşıma ve silme kullanıcıya aittir.
