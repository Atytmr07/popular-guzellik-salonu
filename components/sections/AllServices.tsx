"use client";

import { useState } from "react";

const services = [
  {
    id: "kas-dizayn",
    number: "01",
    title: "Kaş Dizayn",
    tag: "Yüz Estetiği",
    description:
      "Yüz oranlarınıza ve kemik yapınıza göre kişiye özel kaş formu tasarlanır. Doğal kaş hatlarınız korunarak bakışlarınıza derinlik ve güç katılır. Her kaş seansı; ölçüm, form onayı ve hassas uygulama adımlarından oluşur.",
    highlights: ["Kişiye özel form analizi", "Mikroblading & ipek kaş", "Kaş lifting & laminasyon"],
    mediaCount: { photo: 4, video: 2 },
  },
  {
    id: "manikur",
    number: "02",
    title: "Manikür",
    tag: "El Bakımı",
    description:
      "Eller güzelliğin sessiz taçlarıdır. Profesyonel manikür seanslarımızda tırnak şekillendirme, kütikül bakımı ve kalıcı oje uygulaması bir arada sunulur. Haftalarca süren pürüzsüz, canlı ve bakımlı eller için.",
    highlights: ["Klasik & kalıcı manikür", "Fransız manikür", "Protez tırnak"],
    mediaCount: { photo: 5, video: 1 },
  },
  {
    id: "pedikur",
    number: "03",
    title: "Pedikür",
    tag: "Ayak Bakımı",
    description:
      "Ayak sağlığı ve estetiğini bir arada sunan profesyonel pedikür hizmetimizle ayak tabanı bakımı, tırnak şekillendirmesi ve kalıcı oje uygulaması eksiksiz yapılır. Sezon fark etmeksizin bakımlı ve sağlıklı ayaklar için.",
    highlights: ["Tıbbi pedikür", "Kalıcı oje & süsleme", "Ayak peeling bakımı"],
    mediaCount: { photo: 4, video: 1 },
  },
  {
    id: "makyaj",
    number: "04",
    title: "Makyaj",
    tag: "Nişan · Günlük · Özel Gün",
    description:
      "Günlük makyajdan nişan ve düğün gibi özel gün hazırlıklarına kadar her anınız için profesyonel makyaj hizmetimiz sunulmaktadır. Ten tonunuza, yüz şeklinize ve etkinliğin ruhuna uygun, uzun süre kalıcı sonuçlar elde edilir.",
    highlights: ["Nişan & gelin makyajı", "Smoky & editorial look", "Airbrush makyaj"],
    mediaCount: { photo: 5, video: 3 },
  },
  {
    id: "lazer-epilasyon",
    number: "05",
    title: "Lazer Epilasyon",
    tag: "Epilasyon",
    description:
      "Ten tonuna ve kıl yapısına özel ayarlanan lazer parametreleriyle düzenli seans takibi yapılır. Konfor odaklı protokolümüzle istenmeyen tüylerden kalıcı olarak kurtulun. Her seans öncesi cilt analizi, uygulama sonrası bakım önerileri sunulur.",
    highlights: ["Tüm bölge uygulaması", "Seans takip planı", "Konfor odaklı protokol"],
    mediaCount: { photo: 3, video: 2 },
  },
  {
    id: "igneli-epilasyon",
    number: "06",
    title: "İğneli Epilasyon",
    tag: "Epilasyon",
    description:
      "Lazer epilasyona yanıt vermeyen açık renkli veya ince tüyler için en etkili yöntem olan iğneli epilasyon, her kıl folükülünü tek tek hedef alarak kalıcı sonuç sunar. Hassas bölgeler için özellikle tercih edilen güvenilir bir yöntemdir.",
    highlights: ["Açık tüylerde kalıcı sonuç", "Folükül bazlı uygulama", "Kaş & yüz bölgesi uzmanı"],
    mediaCount: { photo: 3, video: 1 },
  },
  {
    id: "kalici-makyaj",
    number: "07",
    title: "Kalıcı Makyaj",
    tag: "Pigmentasyon",
    description:
      "Uyandığınız andan itibaren makyajlı görünmek artık mümkün. Dudak, kaş ve eyeliner bölgelerinde uygulanan kalıcı makyaj pigmentasyonu doğal ve şık bir görünüm sağlar. Uzun ömürlü, su geçirmez ve kişiye özel ton uyumu.",
    highlights: ["Kalıcı kaş & eyeliner", "Dudak pigmentasyonu", "Doğal ton uyumu"],
    mediaCount: { photo: 4, video: 2 },
  },
  {
    id: "cilt-bakimi",
    number: "08",
    title: "Cilt Bakımı",
    tag: "Cilt Sağlığı",
    description:
      "Cilt tipiniz analiz edilerek ihtiyacınıza özel protokol oluşturulur. Derinlemesine temizleme, nemlendirme, antiaging ve leke bakımı seçenekleriyle cildiniz her seferinde yenilenir. Profesyonel ürünler ve uzman ellerle parlak, sağlıklı cilt.",
    highlights: ["Cilt analizi & protokol", "Antiaging & leke bakımı", "Derin temizleme seansı"],
    mediaCount: { photo: 4, video: 1 },
  },
  {
    id: "sac-renklendirme",
    number: "09",
    title: "Saç Renklendirme",
    tag: "Kuaför",
    description:
      "Tek ton renklendirmeden balyaj, ombre ve röfleye kadar geniş bir renk yelpazesi sunulmaktadır. Ten tonunuza ve saç yapınıza göre en uygun renk paleti uzman kuaförlerimiz tarafından tasarlanır. Profesyonel ürünlerle canlı ve kalıcı sonuçlar.",
    highlights: ["Balyaj & ombre", "Tek ton & röfle", "Ten tonuna özel renk danışmanlığı"],
    mediaCount: { photo: 5, video: 2 },
  },
  {
    id: "sac-kesim",
    number: "10",
    title: "Saç Kesim",
    tag: "Kuaför",
    description:
      "Yüz şeklinize, yaşam stilinize ve saç yapınıza göre kişiye özel saç kesimi yapılır. Klasik kesimden editoryal stillere kadar geniş bir repertuarla her tercih karşılanır. Kesim sonrası fön ve şekillendirme dahildir.",
    highlights: ["Yüz şekline özel kesim", "Editoryal & trend stiller", "Fön & şekillendirme dahil"],
    mediaCount: { photo: 5, video: 2 },
  },
  {
    id: "perma-sac",
    number: "11",
    title: "Perma Saç",
    tag: "Saç Şekillendirme",
    description:
      "Kalıcı dalga ve kıvırma uygulamalarında saçın dokusunu koruyarak uzun süre dayanıklı kıvrımlar elde edilir. İnce, düz ve hacim kazanmak isteyen saçlar için ideal seçenek. Saç tipine özel perma protokolü ile sağlıklı ve canlı sonuçlar.",
    highlights: ["Kalıcı dalga & kıvırma", "Hacim kazandırıcı perma", "Saç tipine özel protokol"],
    mediaCount: { photo: 4, video: 6 },
  },
  {
    id: "sac-kaynak",
    number: "12",
    title: "Saç Kaynak",
    tag: "Kaynak Merkezi",
    description:
      "Uzunluk, yoğunluk ve dolgunluk isteyen kadınlar için premium saç kaynak uygulamaları yapılmaktadır. Mikro kaynak, bant kaynak ve füzyon yöntemleriyle doğal geçiş sağlanır. Kaynak bakımı ve yenileme seans planı dahildir.",
    highlights: ["Mikro & bant kaynak", "Füzyon uygulaması", "Kaynak bakım & yenileme"],
    mediaCount: { photo: 5, video: 3 },
  },
];

type MediaItem = { type: "photo" | "video"; label: string; index: number };

function buildMediaItems(title: string, photoCount: number, videoCount: number): MediaItem[] {
  const items: MediaItem[] = [];
  let p = 1, v = 1;
  const total = photoCount + videoCount;
  const step = photoCount > 0 && videoCount > 0 ? Math.floor(photoCount / videoCount) : 999;
  for (let i = 0; i < total; i++) {
    const dueVideo = v <= videoCount && (p - 1) % (step + 1) === step;
    if (dueVideo || p > photoCount) {
      items.push({ type: "video", label: `${title} — Video ${v}`, index: v++ });
    } else {
      items.push({ type: "photo", label: `${title} — Sonuç ${p}`, index: p++ });
    }
  }
  return items;
}

function PhotoCard({ label }: { label: string }) {
  return (
    <div className="snap-start flex-shrink-0 w-72 aspect-[4/3] glass-panel relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-primary/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/20 to-transparent" />
      {/* Image placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14 text-primary/20 group-hover:text-primary/35 transition-colors duration-300">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      {/* Top badge */}
      <div className="absolute top-3 left-3">
        <span className="text-[8px] uppercase tracking-[0.25em] text-text-faint/60 bg-black/40 px-2 py-1 backdrop-blur-sm">
          Foto
        </span>
      </div>
      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/70 leading-snug">
          {label}
        </p>
      </div>
    </div>
  );
}

function VideoCard({ label }: { label: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="snap-start flex-shrink-0 w-72 aspect-video glass-panel relative overflow-hidden bg-black">
        {/* Real video element goes here when src is available */}
        <video
          autoPlay
          controls
          className="absolute inset-0 w-full h-full object-contain"
        />
        {/* Fallback overlay if no src yet */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/80 pointer-events-none">
          <div className="w-10 h-10 rounded-full border border-primary/60 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-text-faint text-center px-4">
            İçerik Yakında
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="snap-start flex-shrink-0 w-72 aspect-video glass-panel relative flex flex-col items-center justify-center gap-4 overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => setPlaying(true)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 to-primary/3 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
      {/* Play button */}
      <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/15 transition-all duration-500 z-10 group-hover:scale-110">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-primary ml-1">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {/* Label */}
      <p className="text-[9px] uppercase tracking-[0.2em] text-text-muted text-center px-6 leading-snug z-10">
        {label}
      </p>
      {/* Video badge */}
      <div className="absolute top-3 left-3 text-[8px] uppercase tracking-[0.2em] text-primary bg-primary/10 px-2 py-1 z-10 backdrop-blur-sm">
        Video
      </div>
      {/* Click hint */}
      <div className="absolute bottom-3 right-3 text-[7px] uppercase tracking-[0.2em] text-text-faint/40 z-10">
        Oynat
      </div>
    </div>
  );
}

function MediaGallery({ title, photoCount, videoCount }: { title: string; photoCount: number; videoCount: number }) {
  const items = buildMediaItems(title, photoCount, videoCount);
  return (
    <div className="w-full flex flex-col justify-center">
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <p className="text-[9px] uppercase tracking-[0.4em] text-primary">Fotoğraf & Video</p>
        <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-text-faint/50">
          <span>{photoCount} Foto</span>
          <span className="w-px h-3 bg-surface-border" />
          <span>{videoCount} Video</span>
        </div>
      </div>

      {/* Scrollable gallery */}
      <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4">
        {items.map((item, i) =>
          item.type === "video" ? (
            <VideoCard key={i} label={item.label} />
          ) : (
            <PhotoCard key={i} label={item.label} />
          )
        )}
        {/* Add more card */}
        <div className="snap-start flex-shrink-0 w-36 aspect-[4/3] border border-dashed border-surface-border flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-colors duration-300 cursor-pointer group">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-text-faint/30 group-hover:text-primary/40 transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <p className="text-[7px] uppercase tracking-[0.2em] text-text-faint/40 group-hover:text-primary/50 transition-colors text-center leading-snug">
            İçerik<br />Yakında
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex items-center gap-2 mt-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 text-text-faint/30">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        <p className="text-[8px] uppercase tracking-[0.25em] text-text-faint/30">Kaydırarak görün</p>
      </div>
    </div>
  );
}

export function AllServices() {
  return (
    <section id="all-services" className="relative bg-background">

      {/* ── Section Header ── */}
      <div className="relative py-24 lg:py-32 px-6 lg:px-12 border-b border-surface-border">
        <div className="mx-auto max-w-[1600px]">
          <div className="reveal-on-scroll max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Tüm Hizmetlerimiz</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white leading-[1.05] tracking-tight">
              Her güzellik ihtiyacınız<br />
              <span className="italic text-primary/90">tek çatı altında.</span>
            </h2>
            <p className="mt-8 text-sm md:text-base text-text-muted leading-relaxed max-w-2xl tracking-wide">
              35 yıllık uzmanlık birikimimizle saç, cilt ve güzellik alanlarında 12 farklı hizmet kategorisinde profesyonel bakım sunuyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* ── Service Sections ── */}
      {services.map((service, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div
            key={service.id}
            id={service.id}
            className={`relative px-6 lg:px-12 py-20 lg:py-28 border-b border-surface-border reveal-on-scroll ${isEven ? "bg-background" : "bg-surface"}`}
          >
            <div className="mx-auto max-w-[1600px]">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Service info */}
                <div className={`flex flex-col gap-6 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-6">
                    <span className="text-6xl lg:text-8xl font-display text-primary/15 leading-none select-none">{service.number}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-primary">{service.tag}</p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-white leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed tracking-wide">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-text-faint">
                        <span className="w-4 h-px bg-primary/50 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="tel:+902422371015"
                    className="mt-2 inline-flex items-center gap-3 self-start px-8 py-4 border border-primary/30 bg-primary/5 text-[10px] uppercase tracking-[0.35em] text-primary hover:bg-primary/15 hover:border-primary/60 transition-all duration-300 group"
                  >
                    Randevu Al
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Scrollable media gallery */}
                <div className={`flex items-center ${!isEven ? "lg:order-1" : ""}`}>
                  <MediaGallery
                    title={service.title}
                    photoCount={service.mediaCount.photo}
                    videoCount={service.mediaCount.video}
                  />
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
