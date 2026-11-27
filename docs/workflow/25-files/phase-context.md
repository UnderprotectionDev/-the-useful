# Çok Dosyalı İçeriği Özgün Yollarıyla Yeniden Kullanma

Kullanıcı saklanan dosyaları özgün ad, göreli yol ve baytlarıyla kullanır. Metin ve kod dosyalarını ayrı ayrı alabilir veya saklanan dosyaların tamamını tek paket olarak indirebilir.

## Alt Fazlar

### Klasör veya ZIP’ten Kayıt Oluşturma

Kullanıcı klasör veya ZIP’i bıraktığında atlanan sistem ve bağımlılık dosyalarını kaydetmeden önce görür ve kalan dosyalar özgün göreli yollarıyla saklanır.

Örneğin .git/, node_modules/ ve .DS_Store atlanır. Kullanıcı alınacak içeriği ve atlanan öğeleri kaydetme öncesinde görür.

### Dosya Ağacında Gezinme ve Tek Dosya Alma

Kullanıcı dosya ağacından seçtiği metin veya kodu kopyalar ya da saklanan asıl dosyayı indirir.

Kullanıcı tek dosyanın adını, göreli yolunu ve saklanan gerçek içeriğini ayırt edebilir. İndirme için ilgili dosyanın saklanmış olması gerekir.

### Kayıt Dosyalarını Paket Olarak İndirme

Kullanıcı kaydın saklanan dosyalarını özgün klasör düzeniyle ve baytları korunarak tek paket hâlinde alır.

Paket yalnız seçilen kaydın saklanan dosyalarını içerir. Özgün göreli yollar ve dosya baytları kullanılabilir durumda kalır.

## Tamamlanma Ölçütleri

- Sistem ve bağımlılık dosyaları içeren bir bileşen klasörü ile aynı yapıda bir ZIP yüklenir. Kullanıcı atlanan dosyaları kayıttan önce görür ve kayıttaki tekil dosyaların ve indirilen paketin adları, göreli yolları ve baytları saklananlarla eşleşir.

## Kapsam Sınırları

- Dosya biçimi ve klasör düzeni saklanan içeriğe aittir. Harici bağlantı saklanan dosya gibi sunulmaz. Otomatik harici kaynak içe aktarımı, çalıştırma ve kurulum kapsam dışıdır.
