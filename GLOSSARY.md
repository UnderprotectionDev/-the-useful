# The Useful Parts

Dijital ürün geliştirmede yeniden kullanılabilen kişisel bilgi ve parçaların, insan ve AI ajanları tarafından ortak kullanıldığı kütüphane. Kanonik terimler arayüz diliyle uyumlu olarak İngilizcedir; Türkçe karşılıklar PRD'de kullanılabilir.

## Organizasyon

**Library (Kütüphane)**:
Tek kullanıcıya ait bütün Space, Collection ve Item'ların toplamı.
_Avoid_: Workspace, arşiv

**Collection (Koleksiyon)**:
Belirli bir konu, problem veya amaca göre oluşturulan, iç içe olabilen Item grubu. Item'lar üyelikle bağlanır, kopyalanmaz.
_Avoid_: Folder, klasör, board

**Space (Alan)**:
Üst koleksiyonu olmayan kök Collection; Item'lar doğrudan üye olabilir ve bütün Collection kuralları geçerlidir. Design, Engineering, Product ve AI & Workflows varsayılan Space'lerdir.
_Avoid_: Domain, kategori, bölüm

**Membership (Üyelik)**:
Bir Item ile bir Collection arasındaki bağ. Bir Item birden fazla Membership taşıyabilir; Membership'i kaldırmak Item'ı silmez.

**Inbox (Gelen kutusu)**:
Hiçbir Collection'a üyeliği olmayan aktif Item'ların görünümü. Ayrı bir durum veya onay kuyruğu değildir.
_Avoid_: Queue, unsorted

**Tag (Etiket)**:
Collection hiyerarşisinden bağımsız, kesişen özellikleri belirten serbest sınıflandırma.

## Item ve içerik

**Item (Kayıt)**:
Bağımsız olarak bulunabilen, açılabilen ve tek kimliği olan bilgi birimi.
_Avoid_: Asset, entry, card, snippet

**Item type (Kayıt türü)**:
Item'ın nasıl kullanılacağını belirten isteğe bağlı sınıf: Reference, Recipe, Reusable Part, Principle veya Note.

**Reference (Referans)**:
İncelenecek örnek veya harici bilgi; doğrudan uygulanması beklenmez.

**Recipe (Tarif)**:
Bir problemi çözmek için uygulanabilir yaklaşım.

**Reusable Part (Yeniden kullanılabilir parça)**:
Doğrudan kullanılabilen veya uyarlanabilen somut çıktı: çok dosyalı kod, Skill, prompt veya doküman şablonu.
_Avoid_: Component (yalnız UI bileşeni anlamında kullanılır)

**Principle (İlke / Karar)**:
Gerekçesiyle birlikte bir kural, standart veya alınmış karar. Bağlayıcılığını tür değil Stance belirler.
_Avoid_: Rule (Stance değeriyle karışır), standard, ADR

**Note (Not)**:
Türü henüz belirlenmemiş veya yapılandırılması gerekmeyen kayıt.

**Skill**:
Giriş dosyası (ör. `SKILL.md`) ve yardımcı dosyalarıyla saklanan Reusable Part. Kütüphane Skill'i kurmaz veya çalıştırmaz.

**Template variable (Şablon değişkeni)**:
Parametreli metindeki `{{name}}` veya `{{name:default}}` biçimindeki doldurulabilir alan. Doldurmak özgün şablonu değiştirmez.

**Region comment (Bölge yorumu)**:
Asıl görsel üzerinde işaretlenmiş dikdörtgen bölgeye bağlı kişisel metin. Görselin geri kalanının onaylandığı anlamına gelmez.

**Content (İçerik)**:
Bir Item'ın taşıdığı metin, kod, görsel, medya, bağlantı ve dosyaların bütünü.

**Revision (Revizyon)**:
Bir Item'ın belirli bir andaki içerik ve özellik hâli; eşzamanlı değişikliklerin birbirini ezmemesi için güncellemeler son revizyona dayanır.
_Avoid_: Version (içerik sürüm geçmişi özelliği için kullanılır)

**Source (Kaynak)**:
Item'ın bilgisinin geldiği yer: URL, proje, commit veya doküman.

**Relationship (İlişki)**:
İki Item arasındaki türü belirli bağ: related to, derived from, implements, alternative to, supersedes.

## Anlam ve durum

**Stance (Tutum)**:
Kullanıcının Item hakkındaki açık değerlendirmesi: Unspecified, Inspiration, Preference, Rule, Alternative, Avoid. Yalnız kullanıcı belirler.
_Avoid_: Rating, onay

**Lifecycle (Yaşam döngüsü)**:
Item'ın olağan keşifte yer alıp almadığı: Active, Archived veya Trashed. Yalnız kullanıcı işlemleriyle değişir.

**Archived (Arşivlenmiş)**:
Olağan keşiften çıkarılmış, özellikle arandığında insan ve ajan tarafından görülebilen Item.
_Avoid_: Deprecated (Validity değeridir)

**Trash (Çöp kutusu)**:
Trashed Item'ların kalıcı silinene veya geri yüklenene kadar tutulduğu yer; ajanlar Trash'i göremez.

**Maturity (Olgunluk)**:
Item'ın kullanıcı tarafından incelenip incelenmediği: Raw veya Reviewed. Ajanın oluşturduğu Item her zaman Raw başlar.
_Avoid_: Draft, taslak

**Validity (Geçerlilik)**:
Item'ın teknik doğruluk durumu: Unspecified, Verified, Needs reverification veya Deprecated.

**Origin (Köken)**:
Bir Item'ı, Collection'ı, ilişkiyi veya içerik parçasını kimin ürettiği: kullanıcı, belirli bir Agent connection veya AI hizmeti.

## Ajan erişimi

**Agent connection (Ajan bağlantısı)**:
Tek bir ajan istemcisine verilen, ayrı yönetilen ve iptal edilebilen erişim; `read` ve `create` izinlerini taşır.
_Avoid_: Integration, token, API key

**Agent-editable item (Ajanın düzeltebileceği kayıt)**:
Aynı Agent connection'ın oluşturduğu Active ve Raw Item. Kullanıcının içerik, üyelik, metadata veya durum üzerindeki ilk değişikliği, kaydı ajan düzenlemesine kalıcı olarak kapatır.

**Unreviewed agent items (İncelenmemiş ajan kayıtları)**:
Origin'i bir Agent connection olan Active ve Raw Item'ları gösteren sabit filtre.

**Collection package (Koleksiyon paketi)**:
Bir Collection'ın alt koleksiyonlarıyla birlikte, klasör ağacını yansıtan Markdown ve özgün dosyalar hâlinde indirilen kopyası. Knowledge Pack değildir.
_Avoid_: Context Pack, export (tam kütüphane dışa aktarımı için kullanılır)

**Knowledge Pack (Bilgi paketi)**:
Farklı Collection ve Item'lardan kullanıcı tarafından oluşturulan amaç odaklı seçki. MVP'de yoktur.
_Avoid_: Context Pack, bundle

## Kapsam etiketleri

**MVP**:
İlk sürümde bulunan ve kabul testleriyle doğrulanan yetenek.

**Öncelikli aday**:
MVP sonrasında üzerinde uzlaşılmış, takvimsiz geliştirme adayı (PRD §14.2).

**İhtiyaca bağlı**:
Yalnız gerçek kullanımda somut ihtiyaç görülürse değerlendirilecek fırsat (PRD §14.3).

**Hedef dışı**:
Ürünün hedeflemediği kapsam (PRD §14.4).
