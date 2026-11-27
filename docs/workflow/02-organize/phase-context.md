# Space ve Koleksiyon Ağacını Yönetme

Kullanıcı dört başlangıç Space’iyle işe başlar, kendi Space ve koleksiyon ağacını kurar, adlandırır ve yeniden düzenler. Aynı üst koleksiyon altında aynı adlı iki koleksiyon bulunmaz.

## Alt Fazlar

### Space Oluşturma

Kullanıcı, kayıtları doğrudan üye alabilen yeni bir kök koleksiyon oluşturur.

Başlangıç Space’leri ilk kullanımda hazırdır. Yeni Space aynı koleksiyon kurallarına uyar.

### Alt Koleksiyon Oluşturma

Kullanıcı mevcut bir Space veya koleksiyon altında kardeşlerinden farklı adla alt koleksiyon oluşturur.

Üst koleksiyon seçilerek oluşturulan alt koleksiyon kendi kimliğine sahiptir. Aynı ad başka bir üst koleksiyon altında kullanılabilir.

### Space veya Koleksiyonu Yeniden Adlandırma

Kullanıcı bir Space veya koleksiyonun görünür adını, kardeş ad kuralını koruyarak değiştirir.

Ad değişikliği mevcut koleksiyon kimliğini ve üyelikleri korur. Çakışma varsa mevcut ad korunur.

### Koleksiyonu Alt Ağacıyla Taşıma

Geçerli taşımada alt ağaç ve üyelikler korunur, taşınan Space kök konumunu kaybeder ve döngü ya da aynı adlı kardeş oluşturacak hedef reddedilir.

Kullanıcı hedefi seçer. Kendisini veya kendi alt ağacını hedefleyen taşıma mevcut ağacı değiştirmeden reddedilir.

## Tamamlanma Ölçütleri

- Kullanıcı yeni bir Space oluşturur, adını değiştirir, altında iç içe koleksiyonlar kurar ve bir alt ağacı taşır. Kendi alt ağacını veya aynı adlı kardeşi olan hedefi seçen taşıma ile aynı üstte aynı adlı oluşturma reddedilir.

## Kapsam Sınırları

- Başlangıç Space’leri Design, Engineering, Product ve AI & Workflows’tur. Kayıt üyelikleri ve koleksiyon silme kendi fazında, ajanın izinli alt koleksiyon açması ise ajan erişimi fazlarında ele alınır.
