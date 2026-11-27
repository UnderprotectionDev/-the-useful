# Ajan yazma sınırı: oluşturma, kendi el değmemiş kaydını düzeltme ve alt koleksiyon açma

`create` izinli bir Agent connection yalnız şunları yapabilir: yeni Item oluşturmak (atomik; bir dosya başarısızsa hiçbir şey oluşmaz), yeni Item'a etiket ve mevcut Item'lara ilişki eklemek, mevcut bir Space/Collection altına alt koleksiyon açmak ve kendi oluşturduğu, Active ve Raw olan, kullanıcının içerik, üyelik, metadata veya durumunu hiç değiştirmediği Item'ı güncel revizyon üzerinden düzeltmek. Hedef koleksiyon her zaman kimlikle belirtilir. Aynı normalize edilmiş kaynak URL'si Active veya Archived bir Item'da varsa ilk denemede kayıt oluşmaz ve mevcut kaydın kimliği döner; ajan ancak kullanıcının açık "yine de oluştur" isteğiyle tekrar dener. Aynı üst altında aynı adlı koleksiyon varsa her zaman mevcut koleksiyonun kimliği döner. Ajan hiçbir zaman Space açamaz, koleksiyonu sonradan değiştiremez, silme/arşivleme/geri yükleme yapamaz, Stance, Maturity, Validity veya bölge yorumu belirleyemez.

## Considered Options

- **Yalnız oluşturma (önceki PRD):** En basit model, ancak "test dosyasını da ekle" gibi olağan bir takip isteği mükerrer kayıt üretiyordu.
- **Ajanın mevcut kayıtları serbestçe düzenlemesi:** Kullanıcının yazdığı bilgiyi sessizce değiştirebileceği için reddedildi. Raw + el değmemiş koşulu, istisnaya net bir kilit noktası verir.
- **Koleksiyon oluşturmanın tamamen yasaklanması:** Kullanıcı tercihiyle reddedildi; organizasyonun üst düzeyi (Space) yine kullanıcıda kalır.
