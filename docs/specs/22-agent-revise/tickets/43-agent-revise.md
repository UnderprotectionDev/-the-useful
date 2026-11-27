# 43: Ajanın el değmemiş kendi Item'ını atomik düzeltmesi

**Spec:** [Ajanın Kendi Kaydını Düzeltmesi](../spec.md)

**What to build:** Aynı Agent connection kendi el değmemiş Active Raw Item'ını güncel Revision üzerinden atomik düzeltebilsin. Kullanıcı müdahalesi yetkiyi kalıcı kapatsın ve eşzamanlı yazmalar birbirini ezmesin.

**Blocked by:** [22 — Trash'ten önceki duruma geri yükleme](../../09-manage/tickets/22-restore-item.md), [42 — Ajanla atomik görsel ve çok dosyalı katkı](../../21-agent-contribute/tickets/42-agent-create-files.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Aynı connection kendi Active Raw Item'ında başlık, açıklama, Content, dosya, Tag, Source veya mevcut Membership'i güncel Revision ile düzeltir; ikinci Item oluşmaz.
- [ ] İki aynı Revision isteğinden yalnız biri uygulanır; eski Revision anlaşılır biçimde reddedilir.
- [ ] Owner'ın Content, Membership, metadata, inceleme veya durum değişikliği kalıcı kilitler; tekrar Raw/Active yapılsa ya da restore edilse de kilit açılmaz.
- [ ] Başka bağlantı, kilitli kayıt, izinsiz alan/durum değişikliği ve revoke edilmiş bağlantı reddedilir.
- [ ] Dosya hatasında önceki Revision ve tüm içerik korunur; eklenen içerik Origin'iyle görünür.
