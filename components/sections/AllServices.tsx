"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";

// ─── Media types ────────────────────────────────────────────────────────────
type PhotoFile = {
  type: "photo";
  src: string;   // e.g. "/media/kas-dizayn/sonuc-1.jpg"
  alt: string;
};

type VideoFile = {
  type: "video";
  src: string;   // e.g. "/media/perma-sac/video-1.mp4"
  poster?: string;
  label: string;
};

// Instagram Reel — sadece reel ID'si yeterli
// Örnek: permalink "https://www.instagram.com/reel/DW4Ara1jQmX/" → id: "DW4Ara1jQmX"
type InstagramFile = {
  type: "instagram";
  id: string;
  label: string;
};

type MediaFile = PhotoFile | VideoFile | InstagramFile;

// ─── Service data ────────────────────────────────────────────────────────────
// When you receive media files for a service, add them to the `media` array.
// Leave the array empty ([]) until files are provided — the UI will show a
// "İçerik Yakında" placeholder automatically.
const services = [
  {
    id: "kas-dizayn",
    number: "01",
    title: "Kaş Dizayn",
    tag: "Yüz Estetiği",
    description:
      "Yüz oranlarınıza ve kemik yapınıza göre kişiye özel kaş formu tasarlanır. Doğal kaş hatlarınız korunarak bakışlarınıza derinlik ve güç katılır. Her kaş seansı; ölçüm, form onayı ve hassas uygulama adımlarından oluşur.",
    highlights: ["Kişiye özel form analizi", "Mikroblading & ipek kaş"],
    media: [
      { type: "video", src: "/kas-dizayn/kas1.mp4", label: "Kaş Dizayn 01" },
      { type: "video", src: "/kas-dizayn/kas2.mp4", label: "Kaş Dizayn 02" },
      { type: "video", src: "/kas-dizayn/kas3.mp4", label: "Kaş Dizayn 03" },
      { type: "video", src: "/kas-dizayn/kas4.mp4", label: "Kaş Dizayn 04" },
      { type: "video", src: "/kas-dizayn/kas5.mp4", label: "Kaş Dizayn 05" },
      { type: "video", src: "/kas-dizayn/kas6.mp4", label: "Kaş Dizayn 06" },
      { type: "video", src: "/kas-dizayn/kas7.mp4", label: "Kaş Dizayn 07" },
      { type: "video", src: "/kas-dizayn/kas8.mp4", label: "Kaş Dizayn 08" },
      { type: "video", src: "/kas-dizayn/kas9.mp4", label: "Kaş Dizayn 09" },
    ] as MediaFile[],
  },
  {
    id: "manikur",
    number: "02",
    title: "Manikür",
    tag: "El Bakımı",
    description:
      "Eller güzelliğin sessiz taçlarıdır. Profesyonel manikür seanslarımızda kütikül bakımı ve el bakımı uygulamaları bir arada sunulur. Haftalarca süren pürüzsüz, canlı ve bakımlı eller için.",
    highlights: ["Klasik & kalıcı manikür", "Fransız manikür"],
    media: [
      { type: "video", src: "/manikur/manikur1.mp4", label: "Manikür 01" },
      { type: "video", src: "/manikur/manikur2.mp4", label: "Manikür 02" },
      { type: "video", src: "/manikur/manikur3.mp4", label: "Manikür 03" },
    ] as MediaFile[],
  },
  {
    id: "pedikur",
    number: "03",
    title: "Pedikür",
    tag: "Ayak Bakımı",
    description:
      "Ayak sağlığı ve estetiğini bir arada sunan profesyonel pedikür hizmetimizle ayak tabanı ve kütikül bakımı eksiksiz yapılır. Sezon fark etmeksizin bakımlı ve sağlıklı ayaklar için.",
    highlights: ["Tıbbi pedikür", "Ayak peeling bakımı"],
    media: [
      { type: "video", src: "/pedikur/pedikur1.mp4", label: "Pedikür 01" },
      { type: "video", src: "/pedikur/pedikur2.mp4", label: "Pedikür 02" },
      { type: "video", src: "/pedikur/pedikur3.mp4", label: "Pedikür 03" },
      { type: "video", src: "/pedikur/pedikur4.mp4", label: "Pedikür 04" },
      { type: "video", src: "/pedikur/pedikur5.mp4", label: "Pedikür 05" },
    ] as MediaFile[],
  },
  {
    id: "lazer-epilasyon",
    number: "05",
    title: "Lazer Epilasyon",
    tag: "Epilasyon",
    description:
      "Ten tonuna ve kıl yapısına özel ayarlanan lazer parametreleriyle düzenli seans takibi yapılır. Konfor odaklı protokolümüzle istenmeyen tüylerden kalıcı olarak kurtulun. Her seans öncesi cilt analizi, uygulama sonrası bakım önerileri sunulur.",
    highlights: ["Tüm bölge uygulaması", "Seans takip planı", "Konfor odaklı protokol"],
    media: [
      { type: "video", src: "/lazer-epilasyon/lazer1.mp4", label: "Lazer Epilasyon 01" },
      { type: "video", src: "/lazer-epilasyon/lazer2.mp4", label: "Lazer Epilasyon 02" },
      { type: "video", src: "/lazer-epilasyon/lazer3.mp4", label: "Lazer Epilasyon 03" },
      { type: "video", src: "/lazer-epilasyon/lazer4.mp4", label: "Lazer Epilasyon 04" },
    ] as MediaFile[],
  },
  {
    id: "igneli-epilasyon",
    number: "06",
    title: "İğneli Epilasyon",
    tag: "Epilasyon",
    description:
      "Lazer epilasyona yanıt vermeyen açık renkli veya ince tüyler için en etkili yöntem olan iğneli epilasyon, her kıl folükülünü tek tek hedef alarak kalıcı sonuç sunar. Hassas bölgeler için özellikle tercih edilen güvenilir bir yöntemdir.",
    highlights: ["Açık tüylerde kalıcı sonuç", "Folükül bazlı uygulama", "Kaş & yüz bölgesi uzmanı"],
    media: [
      { type: "video", src: "/igneli-epilasyon/igneli1.mp4", label: "İğneli Epilasyon 01" },
      { type: "video", src: "/igneli-epilasyon/igneli2.mp4", label: "İğneli Epilasyon 02" },
      { type: "video", src: "/igneli-epilasyon/igneli3.mp4", label: "İğneli Epilasyon 03" },
      { type: "video", src: "/igneli-epilasyon/igneli4.mp4", label: "İğneli Epilasyon 04" },
    ] as MediaFile[],
  },
  {
    id: "kalici-makyaj",
    number: "07",
    title: "Kalıcı Makyaj",
    tag: "Pigmentasyon",
    description:
      "Uyandığınız andan itibaren makyajlı görünmek artık mümkün. Dudak, kaş ve eyeliner bölgelerinde uygulanan kalıcı makyaj pigmentasyonu doğal ve şık bir görünüm sağlar. Uzun ömürlü, su geçirmez ve kişiye özel ton uyumu.",
    highlights: ["Kalıcı kaş & eyeliner", "Dudak pigmentasyonu", "Doğal ton uyumu"],
    media: [
      { type: "video", src: "/kalici-makyaj/kalici-makyaj1.mp4", label: "Kalıcı Makyaj 01" },
      { type: "video", src: "/kalici-makyaj/kalici-makyaj2.mp4", label: "Kalıcı Makyaj 02" },
      { type: "video", src: "/kalici-makyaj/kalici-makyaj3.mp4", label: "Kalıcı Makyaj 03" },
      { type: "video", src: "/kalici-makyaj/kalici-makyaj4.mp4", label: "Kalıcı Makyaj 04" },
      { type: "video", src: "/kalici-makyaj/kalici-makyaj5.mp4", label: "Kalıcı Makyaj 05" },
      { type: "video", src: "/kalici-makyaj/kalici-makyaj6.mp4", label: "Kalıcı Makyaj 06" },
    ] as MediaFile[],
  },
  {
    id: "cilt-bakimi",
    number: "08",
    title: "Cilt Bakımı",
    tag: "Cilt Sağlığı",
    description:
      "Cilt tipiniz analiz edilerek ihtiyacınıza özel protokol oluşturulur. Derinlemesine temizleme, nemlendirme, antiaging ve leke bakımı seçenekleriyle cildiniz her seferinde yenilenir. Profesyonel ürünler ve uzman ellerle parlak, sağlıklı cilt.",
    highlights: ["Cilt analizi & protokol", "Antiaging & leke bakımı", "Derin temizleme seansı"],
    media: [
      { type: "video", src: "/cilt-bakimi/cilt1.mp4", label: "Cilt Bakımı 01" },
      { type: "video", src: "/cilt-bakimi/cilt2.mp4", label: "Cilt Bakımı 02" },
      { type: "video", src: "/cilt-bakimi/cilt3.mp4", label: "Cilt Bakımı 03" },
      { type: "video", src: "/cilt-bakimi/cilt4.mp4", label: "Cilt Bakımı 04" },
      { type: "video", src: "/cilt-bakimi/cilt5.mp4", label: "Cilt Bakımı 05" },
    ] as MediaFile[],
  },
  {
    id: "sac-renklendirme",
    number: "09",
    title: "Saç Renklendirme",
    tag: "Kuaför",
    description:
      "Tek ton renklendirmeden balyaj, ombre ve röfleye kadar geniş bir renk yelpazesi sunulmaktadır. Ten tonunuza ve saç yapınıza göre en uygun renk paleti uzman kuaförlerimiz tarafından tasarlanır. Profesyonel ürünlerle canlı ve kalıcı sonuçlar.",
    highlights: ["Balyaj & ombre", "Tek ton & röfle", "Ten tonuna özel renk danışmanlığı"],
    media: [
      { type: "video", src: "/sac-renklendirme/sac-renk1.mp4", label: "Saç Renklendirme 01" },
      { type: "video", src: "/sac-renklendirme/sac-renk2.mp4", label: "Saç Renklendirme 02" },
      { type: "video", src: "/sac-renklendirme/sac-renk3.mp4", label: "Saç Renklendirme 03" },
    ] as MediaFile[],
  },
  {
    id: "sac-kesim",
    number: "10",
    title: "Saç Kesim",
    tag: "Kuaför",
    description:
      "Yüz şeklinize, yaşam stilinize ve saç yapınıza göre kişiye özel saç kesimi yapılır. Klasik kesimden editoryal stillere kadar geniş bir repertuarla her tercih karşılanır. Kesim sonrası fön ve şekillendirme dahildir.",
    highlights: ["Yüz şekline özel kesim", "Editoryal & trend stiller", "Fön & şekillendirme dahil"],
    media: [
      { type: "video", src: "/sac-kesim/sac-kesim1.mp4", label: "Saç Kesim 01" },
      { type: "video", src: "/sac-kesim/sac-kesim2.mp4", label: "Saç Kesim 02" },
      { type: "video", src: "/sac-kesim/sac-kesim3.mp4", label: "Saç Kesim 03" },
      { type: "video", src: "/sac-kesim/sac-kesim4.mp4", label: "Saç Kesim 04" },
      { type: "video", src: "/sac-kesim/sac-kesim5.mp4", label: "Saç Kesim 05" },
      { type: "video", src: "/sac-kesim/sac-kesim6.mp4", label: "Saç Kesim 06" },
      { type: "video", src: "/sac-kesim/sac-kesim7.mp4", label: "Saç Kesim 07" },
    ] as MediaFile[],
  },
  {
    id: "perma-sac",
    number: "11",
    title: "Perma Saç",
    tag: "Saç Şekillendirme",
    description:
      "Kalıcı dalga ve kıvırma uygulamalarında saçın dokusunu koruyarak uzun süre dayanıklı kıvrımlar elde edilir. İnce, düz ve hacim kazanmak isteyen saçlar için ideal seçenek. Saç tipine özel perma protokolü ile sağlıklı ve canlı sonuçlar.",
    highlights: ["Kalıcı dalga & kıvırma", "Hacim kazandırıcı perma", "Saç tipine özel protokol"],
    media: [
      { type: "video", src: "/perma/perma1.mp4", label: "Perma 01" },
      { type: "video", src: "/perma/perma2.mp4", label: "Perma 02" },
      { type: "video", src: "/perma/perma3.mp4", label: "Perma 03" },
      { type: "video", src: "/perma/perma4.mp4", label: "Perma 04" },
      { type: "video", src: "/perma/perma5.mp4", label: "Perma 05" },
      { type: "video", src: "/perma/perma6.mp4", label: "Perma 06" },
      { type: "video", src: "/perma/perma7.mp4", label: "Perma 07" },
      { type: "video", src: "/perma/perma8.mp4", label: "Perma 08" },
    ] as MediaFile[],
  },
  {
    id: "sac-kaynak",
    number: "12",
    title: "Saç Kaynak",
    tag: "Kaynak Merkezi",
    description:
      "Uzunluk, yoğunluk ve dolgunluk isteyen kadınlar için premium saç kaynak uygulamaları yapılmaktadır. Mikro kaynak, bant kaynak ve füzyon yöntemleriyle doğal geçiş sağlanır. Kaynak bakımı ve yenileme seans planı dahildir.",
    highlights: ["Mikro & bant kaynak", "Füzyon uygulaması", "Kaynak bakım & yenileme"],
    media: [
      { type: "video", src: "/sac-kaynak/kaynak1.mp4", label: "Saç Kaynak 01" },
      { type: "video", src: "/sac-kaynak/kaynak2.mp4", label: "Saç Kaynak 02" },
      { type: "video", src: "/sac-kaynak/kaynak3.mp4", label: "Saç Kaynak 03" },
    ] as MediaFile[],
  },
];

// ─── Grid column helper ───────────────────────────────────────────────────────
// Returns Tailwind grid-cols classes based on item count for a balanced layout.
function gridColsClass(count: number): string {
  if (count === 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-2";
  if (count === 3) return "grid-cols-2 sm:grid-cols-3";
  if (count === 4) return "grid-cols-2";
  if (count === 5) return "grid-cols-2 sm:grid-cols-3";
  return "grid-cols-2 sm:grid-cols-3"; // 6+
}

// ─── Photo card ───────────────────────────────────────────────────────────────
function PhotoCard({ file }: { file: PhotoFile }) {
  return (
    <div className="relative aspect-[9/16] bg-surface overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-500">
      <Image
        src={file.src}
        alt={file.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
      {/* Inner accent border on hover */}
      <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-700 m-2" />
      {/* Badge */}
      <div className="absolute top-2 left-2">
        <span className="glass-panel px-2 py-1 text-[7px] uppercase tracking-[0.25em] text-white/70">Foto</span>
      </div>
      {/* Label reveal */}
      <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="w-4 h-px bg-primary mb-1.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-75" />
        <p className="text-[8px] uppercase tracking-[0.15em] text-white/70 leading-snug line-clamp-2">{file.alt}</p>
      </div>
    </div>
  );
}

// ─── Video card (grid, single item) ──────────────────────────────────────────
function VideoCard({ file, sizes }: { file: VideoFile; sizes?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }, []);

  return (
    <div
      className="relative aspect-[9/16] bg-surface overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-500"
      onClick={toggle}
    >
      {/* Poster via explicit img if provided */}
      {file.poster && (
        <Image
          src={file.poster}
          alt={file.label}
          fill
          sizes={sizes ?? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"}
          className="object-cover object-center"
        />
      )}

      {/* Video — always mounted, preload=metadata renders first frame */}
      <video
        ref={videoRef}
        src={file.src}
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={(e) => { e.currentTarget.currentTime = 0.001; }}
        onEnded={() => setPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Overlay — hidden when playing */}
      <div className={`absolute inset-0 z-20 transition-opacity duration-300 ${playing ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-primary/5 to-black/20" />
        <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-700 m-2" />
        <div className="absolute top-2 left-2">
          <span className="glass-panel px-2 py-1 text-[7px] uppercase tracking-[0.25em] text-primary">Video</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-4 h-px bg-primary mb-1.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-75" />
          <p className="text-[8px] uppercase tracking-[0.15em] text-white/70 leading-snug line-clamp-2">{file.label}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Carousel item ────────────────────────────────────────────────────────────
function CarouselVideoCard({ file, index }: { file: VideoFile; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: "300px", threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Pause when scrolled out of view
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !playing) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (!e.isIntersecting) { videoRef.current?.pause(); setPlaying(false); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [playing]);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex-none w-[52vw] sm:w-[38vw] md:w-[28vw] lg:w-[200px] xl:w-[220px] aspect-[9/16] rounded-xl overflow-hidden snap-center snap-always cursor-pointer group border border-white/5"
      onClick={toggle}
    >
      {/* Video — lazy loaded, first frame via metadata seek */}
      {visible && (
        <video
          ref={videoRef}
          src={file.src}
          loop
          playsInline
          preload="metadata"
          onLoadedMetadata={(e) => { e.currentTarget.currentTime = 0.001; }}
          onEnded={() => setPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-200 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/20 transition-all duration-300">
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>

      {/* Index badge */}
      <div className="absolute bottom-2 right-2 z-10 text-[9px] text-white/40 font-mono">
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}

// ─── Video carousel (for services with multiple videos) ───────────────────────
function VideoCarousel({ files }: { files: VideoFile[] }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <p className="text-[9px] uppercase tracking-[0.4em] text-primary">Video</p>
        <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-text-faint/50">
          <span>{files.length} video</span>
          <span className="w-px h-3 bg-surface-border" />
          <span>Kaydırın →</span>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2 -mx-1 px-1">
        {files.map((file, i) => (
          <CarouselVideoCard key={file.src} file={file} index={i} />
        ))}
        <div className="flex-none w-4" />
      </div>
    </div>
  );
}

// ─── Instagram Reel card ──────────────────────────────────────────────────────
function InstagramCard({ file }: { file: InstagramFile }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative aspect-[9/16] bg-surface overflow-hidden group">
      {/* Collapsed: teaser overlay */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 cursor-pointer z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-primary/5 to-black/20" />
          <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-700 m-2" />
          {/* Instagram icon */}
          <div className="relative z-10 w-14 h-14 rounded-full border border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          {/* Labels */}
          <div className="relative z-10 flex flex-col items-center gap-1">
            <span className="text-[8px] uppercase tracking-[0.3em] text-primary">Reel</span>
            <p className="text-[8px] uppercase tracking-[0.15em] text-white/60 text-center px-3 leading-snug line-clamp-2">
              {file.label}
            </p>
          </div>
          {/* Badge */}
          <div className="absolute top-2 left-2">
            <span className="glass-panel px-2 py-1 text-[7px] uppercase tracking-[0.25em] text-primary">Instagram</span>
          </div>
        </button>
      )}

      {/* Expanded: Instagram iframe embed */}
      {open && (
        <iframe
          src={`https://www.instagram.com/reel/${file.id}/embed/`}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          title={file.label}
        />
      )}
    </div>
  );
}

// ─── Placeholder (no media yet) ───────────────────────────────────────────────
function EmptyGallery() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4 border border-dashed border-surface-border rounded-sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10 text-primary/20">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <p className="text-[9px] uppercase tracking-[0.35em] text-text-faint/40 text-center">
        Fotoğraf & Videolar<br />Yakında Eklenecek
      </p>
    </div>
  );
}

// ─── Media gallery ────────────────────────────────────────────────────────────
function MediaGallery({ media }: { media: MediaFile[] }) {
  if (media.length === 0) return <EmptyGallery />;

  const videoFiles = media.filter((m): m is VideoFile => m.type === "video");
  const otherFiles = media.filter((m) => m.type !== "video");

  // Multiple videos with no mixed content → carousel
  if (videoFiles.length >= 2 && otherFiles.length === 0) {
    return <VideoCarousel files={videoFiles} />;
  }

  const photos = media.filter((m) => m.type === "photo").length;
  const videos = videoFiles.length;
  const reels  = media.filter((m) => m.type === "instagram").length;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <p className="text-[9px] uppercase tracking-[0.4em] text-primary">Fotoğraf & Video</p>
        <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-text-faint/50">
          {photos > 0 && <span>{photos} Foto</span>}
          {photos > 0 && (videos + reels) > 0 && <span className="w-px h-3 bg-surface-border" />}
          {videos > 0 && <span>{videos} Video</span>}
          {videos > 0 && reels > 0 && <span className="w-px h-3 bg-surface-border" />}
          {reels > 0 && <span>{reels} Reel</span>}
        </div>
      </div>
      <div className={`grid ${gridColsClass(media.length)} gap-3`}>
        {media.map((file, i) =>
          file.type === "photo" ? (
            <PhotoCard key={i} file={file} />
          ) : file.type === "instagram" ? (
            <InstagramCard key={i} file={file} />
          ) : (
            <VideoCard key={i} file={file} />
          )
        )}
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function AllServices() {
  return (
    <section id="all-services" className="relative bg-background">

      {/* Section Header */}
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

      {/* Service Sections */}
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
                    <span className="text-6xl lg:text-8xl font-display text-primary/15 leading-none select-none">
                      {service.number}
                    </span>
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
                        <span className="w-4 h-px bg-primary/50 shrink-0" />
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

                {/* Media gallery */}
                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                  <MediaGallery media={service.media} />
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
