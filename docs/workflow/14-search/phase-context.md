# Kütüphanede Arama ve Geçmişi Bulma

Kullanıcı başlık, koleksiyon adı, açıklama, etiket, saklanan metin ve kod, metinsel dosya adı ve kaynak üzerinden arar. Arama klavyeyle kullanılabilir, sonuçlar tekil kayıt kimliğiyle ayırt edilebilir ve kullanıcı sonuç yoksa sorguyu ya da kapsamı değiştirebilir.

## Alt Fazlar

### Genel ve Kapsamlı Arama

Kapsamlı arama alt koleksiyonları varsayılan olarak dahil eder, doğrudan üyelikle sınırlandırılabilir ve tür, koleksiyon, köken ve durum eksenleriyle filtrelenebilir.

Sonuçlar başlık, varsa açıklama, tür, önizleme ve ilgili koleksiyonlarla ayırt edilir. Kayıt kimliği birden çok eşleşen üyelikten gelse de değişmez.

### Arşivlenmiş ve Geçerliliğini Yitirmiş Kayıtları Bulma

Arşiv ve geçerliliğini yitirmiş kayıtlar açık filtreyle bulunur, Trash kayıtları yalnızca Trash görünümünde kalır.

Olağan aramada arşivlenmiş ve geçerliliğini yitirmiş kayıtlar filtrelenir. Açık geçmiş filtresiyle dönen kayıtlar güncel örneklerden durumlarıyla ayırt edilir.

## Tamamlanma Ölçütleri

- Aynı kaydı bir üst ve alt koleksiyonda arayan kullanıcı, kapsamlı aramada kaydı bir kez görür. Doğrudan üyelik kapsamı ve geçmiş filtreleri değiştirildiğinde sonuçlar beklenen kayıtları içerir.
- Kullanıcı aramayı klavyeyle yürütür ve içerik büyüdüğünde sonuçlar kullanılabilir kalır.

## Kapsam Sınırları

- Temel arama saklanmış metin ve metadata ile çalışır. İkili dosya içeriği, yalnız URL’si saklanan sayfaların metni, OCR ve anlamsal arama kapsam dışıdır.
