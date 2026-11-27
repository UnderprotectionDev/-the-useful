# 55: Collection ağacını Markdown ve özgün dosya paketi olarak indirme

**Spec:** [Koleksiyon Paketi İndirme](../spec.md)

**What to build:** Kullanıcı tek Collection ağacını Markdown ve özgün dosyalarla paketleyebilsin. Ortak Item kimliklerini dizinde ayırt edebilsin ve Archived olanları isteğe bağlı dahil edebilsin.

**Blocked by:** [54 — Tüm Library'yi bağımsız pakete dışa aktarma](../../30-library-export/tickets/54-library-export.md)

**Status:** ready-for-agent

## Acceptance criteria

- [ ] Navigation Collection ve alt Collection'ları kendi klasör düzeninde paketlenir; içerik Markdown ve özgün dosyalarla uygulamasız okunur.
- [ ] Ortak Item her ilgili klasörde bulunur; dizin dosyasında aynı kimlik belirtilir.
- [ ] Varsayılan paket Archived kayıt içermez; açık seçenekle içerir. Trash her iki pakette de bulunmaz.
- [ ] Seçili ağacın dışındaki üyelikler ayrı koleksiyonlar olarak pakete dahil olmaz.
