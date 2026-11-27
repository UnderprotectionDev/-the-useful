# Ajanla Kütüphanede İçerik Keşfetme

Yetkili Codex ve Claude Code, açık kullanıcı isteğiyle aynı kütüphaneden kısa ve seçilebilir MCP sonuçları alır. Ajan Space’leri ve iç içe koleksiyonları ad, kimlik, kapsam ve kısa açıklamalarıyla keşfedebilir. Boş sonuç, izin ve geçici erişim hatalarından ayırt edilir.

## Alt Fazlar

### Bilinen Koleksiyonu Açma

Ajan adı veya kimliği bilinen koleksiyonun açıklamasını, rehberliğini, görünümünü, alt koleksiyonlarını ve doğrudan üye aktif kayıtların kısa listesini alır.

Ajan belirtilen koleksiyonun kendi bağlamıyla başlar. Alt koleksiyonların kayıtları ancak kapsamlı arama veya ayrıca seçme yoluyla bağlama girer.

### Göreve Göre Arama

Ajan Space, koleksiyon ve kayıtları ortak kapsamla arar, tekil sonuçlar kısa ve sınırlı gelir ve gerektiğinde sonraki sonuçlar alınabilir.

Koleksiyon kapsamında alt koleksiyonlar varsayılan olarak dahildir ve doğrudan üyeler seçilebilir. Ajan arşivlenmiş ve geçerliliğini yitirmiş kayıtları durum filtresiyle özellikle arayabilir. Boş yanıtta ajan sorguyu veya kapsamı değiştirebilir.

## Tamamlanma Ölçütleri

- Codex ve Claude Code, adı verilen Breadcrumb koleksiyonunu doğrudan açar. Bir koleksiyon adı verilmeden sidebar görevi arandığında ilgili tekil kayda ulaşır. Gerçekten sonuç olmayan arama, izin ve sunucu sorunundan ayırt edilebilir.
- Ajan Space’lerden başlayarak iç içe koleksiyon ağacında gezinir ve açtığı koleksiyonun amacını, açıklamasını, notunu ve varsayılan görünümünü alır.
- Web ve ajan araması aynı kapsam ve tekilleştirme kurallarını uygular. Geçmiş araması olumsuz veya eski kaydı tutumu ve geçerlilik durumuyla döndürür, varsayılan arama geçerliliğini yitirmiş kaydı döndürmez ve Trash kayıtları hiçbir sorguda çıkmaz.

## Kapsam Sınırları

- Ajan kullanıcının açık isteğiyle erişir ve yalnızca ilgili kapsamı kullanır. Keşif kısa sonuç ve seçilebilen kimlik sağlar. Tam içerik ayrıca istenir.
