# 14 · Agent Connections

Ortak bileşenler: [Design System](design-system.md). Kabuk: [Shared Shell](00-shared-shell.md). Durumlar: [Shared Dialogs & States](17-shared-dialogs-and-states.md).

| Ekran | Ne çizilir |
| --- | --- |
| 14.1 · Agent connections | Bağlantı adı, read/create izinleri, New connection, Manage permissions, Revoke |
| 14.2 · Create connection and setup | Name, Read, Create, Create connection, bağlantı talimatı, Copy |
| 14.3 · Manage and revoke | Seçili bağlantı, bağımsız izinler, Save, Revoke connection |
| 14.4 · Agent usage guide | Keşif → seçim → tam okuma → proje uyumu |
| 14.5 · Agent-origin Item | 05 Detail içinde bağlantı Origin'i, ajan açıklaması ve içerik/Tag/Relationship kökeni |

## 14.1 · Agent connections

**Artboard’lar**

- [ ] `14.1 · Agent connections · Default · 1440`
- [ ] `14.1 · Agent connections · Empty · 1440`

### İçerik ve eylemler

Bağlantı adı, read/create izinleri, New connection, Manage permissions, Revoke; Codex ve Claude Code ayrı.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [17-agent-connections](../../specs/17-agent-connections/spec.md).

## 14.2 · Create connection and setup

**Artboard’lar**

- [ ] `14.2 · Create connection and setup · Permissions · 1440`
- [ ] `14.2 · Create connection and setup · Setup instructions · 1440`

### İçerik ve eylemler

Name, Read, Create, Create connection, bağlantı talimatı, Copy; gerçek credential çizimde yok; açık kullanıcı isteğiyle kullanım.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Bağlantı credential’ı yalnız oluşturma/kurulum bağlamında örnek placeholder ile gösterilir; gerçek credential yok. İzinli create için ikinci web onayı yok.

**Spec:** [17-agent-connections](../../specs/17-agent-connections/spec.md).

## 14.3 · Manage and revoke

**Artboard’lar**

- [ ] `14.3 · Manage and revoke · Edit permissions · 1440`
- [ ] `14.3 · Manage and revoke · Revoke confirmation · 1440`

### İçerik ve eylemler

Seçili bağlantı, bağımsız izinler, Save, Revoke connection; sonraki istekler ve önceki dosya adreslerine yeni erişim iptal edilir.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Başarı, boş içerik veya validation durumları ilgili eylemin sonucuna göre gösterilir.

**Spec:** [17-agent-connections](../../specs/17-agent-connections/spec.md).

## 14.4 · Agent usage guide

**Artboard’lar**

- [ ] `14.4 · Agent usage guide · Guide · 1440`

### İçerik ve eylemler

Keşif → seçim → tam okuma → proje uyumu; Stance, Origin, Maturity, Validity; belirsiz hedef, tekrar, çelişki ve boş sonuç/hata ayrımı.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Bilinen Collection ile başla, kapsamlı arama ve seçili dosya okuma; eski/olumsuz örnekleri yorumla, proje çelişkisini ve kullanılan kayıtları bildir. Boş sonuç, izin, geçici hata, eksik dosya, belirsiz ad, tekrar ve başarısız yazma ayrı açıklanır.

**Spec:** [24-guidance](../../specs/24-guidance/spec.md).

## 14.5 · Agent-origin Item

**Artboard’lar**

- [ ] `14.5 · Agent-origin Item · Contribution · 1440`
- [ ] `14.5 · Agent-origin Item · Owner edited · 1440`

### İçerik ve eylemler

05 Detail içinde bağlantı Origin'i, ajan açıklaması ve içerik/Tag/Relationship kökeni; owner ilk değişikliğinde kalıcı ajan yazma kilidi; Raw'a dönüş açmaz.

### Durumlar

- Loading, Error ve uzun içerik: ortak 17/DS desenleri.
- Yeni agent Item Active, Raw, Unspecified Stance ve Unspecified kullanıcı Validity’si; ajan teknik gözlemi ayrı Origin. Kullanıcı değişikliği sonrası Raw/Active veya restore kilidi açmaz; başarısız ajan düzeltmesi eski içeriği korur.

**Spec:** [20-agent-subcollection](../../specs/20-agent-subcollection/spec.md) · [21-agent-contribute](../../specs/21-agent-contribute/spec.md) · [22-agent-revise](../../specs/22-agent-revise/spec.md).
