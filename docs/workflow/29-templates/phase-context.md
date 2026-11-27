# Parametreli Şablonları Yeniden Kullanma

Kullanıcı Reference örneğini Reusable Part şablonundan ayırır, prompt, brief veya doküman şablonunu değerler ve varsa varsayılanlarla doldurup özgün metni değiştirmeden kopyalar. Yetkili ajan özgün metni, değişken tanımlarını ve varsayılanları okur.

## Alt Fazlar

### Şablonu Doldurup Kopyalama

Kullanıcı doldurulmuş metni özgün şablondan ayrı olarak panoya alır.

Kullanıcı şablondaki değişkenleri kendi değerleriyle doldurur veya varsa varsayılanı kullanır. Kopyalama yeni metni panoya yazar.

### Şablonu Palette İçinde Doldurma

Kullanıcı parametreli sonucu detay ekranına geçmeden Palette içinde doldurup kopyalar.

Kullanıcı ortak arama sonucundan şablonu açar. Değişken alanlarını klavyeyle doldurup doğrudan kopyalayabilir.

## Tamamlanma Ölçütleri

- Örnek PRD ile yeniden kullanılabilir şablon ayrı türlerle bulunur. Kullanıcı detaydan veya Palette içinden doldurduğu metni kopyalar. Sonuç girilen değerleri ya da varsayılanları içerir ve özgün şablon aynı kalır. Ajan özgün metni ve değişken tanımlarını okur.

## Kapsam Sınırları

- Basit değişkenler ve isteğe bağlı varsayılanlar desteklenir. Koşul, döngü ve genel amaçlı şablon yürütme kapsam dışıdır.
