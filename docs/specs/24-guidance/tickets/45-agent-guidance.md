# 45: Ajan kullanım rehberi ve hata yorumlama

**Spec:** [Ajan Kullanım Rehberliği](../spec.md)

**What to build:** Kullanıcı bağlantı rehberinde kütüphanenin açık istekle kullanımını, bağlamlı keşfi, metadata yorumunu, çelişki ve hata durumlarında doğru ajan davranışını bulabilsin.

**Blocked by:** [40 — Ajanla izinli alt Collection açma](../../20-agent-subcollection/tickets/40-agent-subcollection.md), [43 — Ajanın el değmemiş kendi Item'ını atomik düzeltmesi](../../22-agent-revise/tickets/43-agent-revise.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Kurulumdan erişilen rehber açık talep, bilinen koleksiyonu açma, kapsamlı arama, seçili tam kaydı okuma ve ilgili dosya seçimini anlatır.
- [ ] Tutum/olgunluk/geçerlilik, kapsamlı doğrulama, eski ve olumsuz örnekler, proje çelişkisi ve kullanılan kayıtları bildirme açıklanır.
- [ ] Boş sonuç, izin/geçici sunucu hatası, eksik dosya, belirsiz ad, tekrar ve başarısız güncelleme/oluşturma farklı ele alınır.
- [ ] İki hedef istemcide örnek görevle rehberliğin davranışı gözlenir; sistem yetki denetimi sürer.
