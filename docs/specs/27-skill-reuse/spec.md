# Skill Dosyalarını İnceleme ve Yeniden Kullanma

**Status:** ready-for-agent

## Problem Statement

Bir Skill'i yeni görevde elle kullanmadan önce giriş ve yardımcı dosyalarını doğru yollardan incelemek ve taşımak istiyorum.

## Solution

Kullanıcı Skill’in hangi koşulda kullanılacağını, giriş ve yardımcı dosyalarını, varsa kaynağını ve sürümünü görür, özgün paketi indirebilir. Yetkili ajan açık istekle giriş metnini ve gerekli yardımcı dosyaları eksiksiz alır.

## User Stories

1. Kütüphane sahibi olarak Skill giriş dosyasını görmek istiyorum. Böylece kullanım koşulunu anlayabileyim.
2. Kütüphane sahibi olarak yardımcı dosyaları açmak istiyorum. Böylece gereken ek bağlamı inceleyebileyim.
3. Kütüphane sahibi olarak kaynak ve sürümü görmek istiyorum. Böylece hangi içeriği aldığımı bilebileyim.
4. Kütüphane sahibi olarak özgün Skill paketini indirmek istiyorum. Böylece kendi ortamıma taşıyabileyim.
5. Kütüphane sahibi olarak ajanın giriş ve ilgili yardımcı dosyaları okumasını istiyorum. Böylece görevde gerekli parçayı alabilsin.

## Implementation Decisions

- Skill Reusable Part olup giriş ve yardımcı dosyaları saklanan Content üzerinden sunulur; kullanım koşulu, varsa Source/sürüm metadata'sı gösterilir.
- Özgün dosya ve paket yolları ortak dosya ağacı/indirme sözleşmesini kullanır.
- MCP, açık istek ve read izniyle gerçek giriş ve gerekli yardımcı dosyaları döndürür; kurulum ve yürütme yeteneği yoktur.

## Testing Decisions

- En yüksek test sınırı yetkili MCP istemci çağrısı ve gözlemlenebilir web akışı olur. Testler sonuçları, kalıcı veriyi ve dışarıdan görülebilen hata davranışını doğrular.
- MCP SDK istemcisiyle sözleşme testleri ve gerekli gerçek Codex/Claude Code denemeleri kullanılır. Storage contract testleri özgün dosya baytları ve yetkili erişimi doğrular. Gerekli domain değişmezleri izole gerçek PostgreSQL ile bun:test integration testinde doğrulanır.
- Test referansı PRD §15.2 (V-18) ve TECH-STACK test araçlarıdır. Mevcut uygulama/test kodu bulunmadığından bu senaryolar ilk testlerin dayanağıdır.

### Faz kabul senaryoları

- Kullanıcı çok dosyalı bir Skill’i ZIP veya klasörden kaydedip giriş dosyasını ve örnek yardımcı dosyalarını açar, özgün yollarıyla paketi indirir. Ajan açık istekle aynı giriş ve ilgili yardımcı dosyaların gerçek içeriğini alır.

### Ek davranış kontrolleri

- ZIP veya klasörden kaydedilen Skill'in kullanım koşulu, giriş dosyası, yardımcı dosyaları, varsa Source ve sürümü görünür.
- Kullanıcı giriş ve yardımcı dosyayı açar, özgün yollarla paketi indirir.
- Yetkili ajan açık istekle giriş ve seçili gerçek yardımcı dosyaları eksiksiz okur.

## Out of Scope

- Skill kullanıcının taşıyabileceği bir yeniden kullanılabilir parçadır. Otomatik kurulum, yürütme ve harici kaynaktan otomatik içe aktarma kapsam dışıdır.

## Further Notes

- Kaynak faz: [27-skill-reuse](../../workflow/27-skill-reuse/phase-context.md).
- PRD izlenebilirliği: FR-21, FR-22, FR-32 · V-18. [PRD](../../PRD.md) · [GLOSSARY](../../../GLOSSARY.md) · [TECH-STACK](../../TECH-STACK.md).
- Ticket'lar: [50 — Skill'i web ve MCP üzerinden özgün dosyalarıyla inceleme](tickets/50-skill-reuse.md).
