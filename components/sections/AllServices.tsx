const services = [
  {
    id: "kas-dizayn",
    number: "01",
    title: "Kaş Dizayn",
    tag: "Yüz Estetiği",
    description:
      "Yüz oranlarınıza ve kemik yapınıza göre kişiye özel kaş formu tasarlanır. Doğal kaş hatlarınız korunarak bakışlarınıza derinlik ve güç katılır. Her kaş seansı; ölçüm, form onayı ve hassas uygulama adımlarından oluşur.",
    highlights: ["Kişiye özel form analizi", "Mikroblading & ipek kaş", "Kaş lifting & laminasyon"],
  },
  {
    id: "manikur",
    number: "02",
    title: "Manikür",
    tag: "El Bakımı",
    description:
      "Eller güzelliğin sessiz taçlarıdır. Profesyonel manikür seanslarımızda tırnak şekillendirme, kütikül bakımı ve kalıcı oje uygulaması bir arada sunulur. Haftalarca süren pürüzsüz, canlı ve bakımlı eller için.",
    highlights: ["Klasik & kalıcı manikür", "Fransız manikür", "Protez tırnak"],
  },
  {
    id: "pedikur",
    number: "03",
    title: "Pedikür",
    tag: "Ayak Bakımı",
    description:
      "Ayak sağlığı ve estetiğini bir arada sunan profesyonel pedikür hizmetimizle ayak tabanı bakımı, tırnak şekillendirmesi ve kalıcı oje uygulaması eksiksiz yapılır. Sezon fark etmeksizin bakımlı ve sağlıklı ayaklar için.",
    highlights: ["Tıbbi pedikür", "Kalıcı oje & süsleme", "Ayak peeling bakımı"],
  },
  {
    id: "makyaj",
    number: "04",
    title: "Makyaj",
    tag: "Nişan · Günlük · Özel Gün",
    description:
      "Günlük makyajdan nişan ve düğün gibi özel gün hazırlıklarına kadar her anınız için profesyonel makyaj hizmetimiz sunulmaktadır. Ten tonunuza, yüz şeklinize ve etkinliğin ruhuna uygun, uzun süre kalıcı sonuçlar elde edilir.",
    highlights: ["Nişan & gelin makyajı", "Smoky & editorial look", "Airbrush makyaj"],
  },
  {
    id: "lazer-epilasyon",
    number: "05",
    title: "Lazer Epilasyon",
    tag: "Epilasyon",
    description:
      "Ten tonuna ve kıl yapısına özel ayarlanan lazer parametreleriyle düzenli seans takibi yapılır. Konfor odaklı protokolümüzle istenmeyen tüylerden kalıcı olarak kurtulun. Her seans öncesi cilt analizi, uygulama sonrası bakım önerileri sunulur.",
    highlights: ["Tüm bölge uygulaması", "Seans takip planı", "Konfor odaklı protokol"],
  },
  {
    id: "igneli-epilasyon",
    number: "06",
    title: "İğneli Epilasyon",
    tag: "Epilasyon",
    description:
      "Lazer epilasyona yanıt vermeyen açık renkli veya ince tüyler için en etkili yöntem olan iğneli epilasyon, her kıl folükülünü tek tek hedef alarak kalıcı sonuç sunar. Hassas bölgeler için özellikle tercih edilen güvenilir bir yöntemdir.",
    highlights: ["Açık tüylerde kalıcı sonuç", "Folükül bazlı uygulama", "Kaş & yüz bölgesi uzmanı"],
  },
  {
    id: "kalici-makyaj",
    number: "07",
    title: "Kalıcı Makyaj",
    tag: "Pigmentasyon",
    description:
      "Uyandığınız andan itibaren makyajlı görünmek artık mümkün. Dudak, kaş ve eyeliner bölgelerinde uygulanan kalıcı makyaj pigmentasyonu doğal ve şık bir görünüm sağlar. Uzun ömürlü, su geçirmez ve kişiye özel ton uyumu.",
    highlights: ["Kalıcı kaş & eyeliner", "Dudak pigmentasyonu", "Doğal ton uyumu"],
  },
  {
    id: "cilt-bakimi",
    number: "08",
    title: "Cilt Bakımı",
    tag: "Cilt Sağlığı",
    description:
      "Cilt tipiniz analiz edilerek ihtiyacınıza özel protokol oluşturulur. Derinlemesine temizleme, nemlendirme, antiaging ve leke bakımı seçenekleriyle cildiniz her seferinde yenilenir. Profesyonel ürünler ve uzman ellerle parlak, sağlıklı cilt.",
    highlights: ["Cilt analizi & protokol", "Antiaging & leke bakımı", "Derin temizleme seansı"],
  },
  {
    id: "sac-renklendirme",
    number: "09",
    title: "Saç Renklendirme",
    tag: "Kuaför",
    description:
      "Tek ton renklendirmeden balyaj, ombre ve röfleye kadar geniş bir renk yelpazesi sunulmaktadır. Ten tonunuza ve saç yapınıza göre en uygun renk paleti uzman kuaförlerimiz tarafından tasarlanır. Profesyonel ürünlerle canlı ve kalıcı sonuçlar.",
    highlights: ["Balyaj & ombre", "Tek ton & röfle", "Ten tonuna özel renk danışmanlığı"],
  },
  {
    id: "sac-kesim",
    number: "10",
    title: "Saç Kesim",
    tag: "Kuaför",
    description:
      "Yüz şeklinize, yaşam stilinize ve saç yapınıza göre kişiye özel saç kesimi yapılır. Klasik kesimden editoryal stillere kadar geniş bir repertuarla her tercih karşılanır. Kesim sonrası fön ve şekillendirme dahildir.",
    highlights: ["Yüz şekline özel kesim", "Editoryal & trend stiller", "Fön & şekillendirme dahil"],
  },
  {
    id: "perma-sac",
    number: "11",
    title: "Perma Saç",
    tag: "Saç Şekillendirme",
    description:
      "Kalıcı dalga ve kıvırma uygulamalarında saçın dokusunu koruyarak uzun süre dayanıklı kıvrımlar elde edilir. İnce, düz ve hacim kazanmak isteyen saçlar için ideal seçenek. Saç tipine özel perma protokolü ile sağlıklı ve canlı sonuçlar.",
    highlights: ["Kalıcı dalga & kıvırma", "Hacim kazandırıcı perma", "Saç tipine özel protokol"],
    hasVideoGallery: true,
  },
  {
    id: "sac-kaynak",
    number: "12",
    title: "Saç Kaynak",
    tag: "Kaynak Merkezi",
    description:
      "Uzunluk, yoğunluk ve dolgunluk isteyen kadınlar için premium saç kaynak uygulamaları yapılmaktadır. Mikro kaynak, bant kaynak ve füzyon yöntemleriyle doğal geçiş sağlanır. Kaynak bakımı ve yenileme seans planı dahildir.",
    highlights: ["Mikro & bant kaynak", "Füzyon uygulaması", "Kaynak bakım & yenileme"],
  },
];

const videoPlaceholders = [
  { label: "Perma Uygulama — Müşteri 1", duration: "0:42" },
  { label: "Perma Sonuç — Müşteri 2", duration: "0:58" },
  { label: "Perma Öncesi & Sonrası", duration: "1:10" },
  { label: "Perma Teknik — Yakın Plan", duration: "0:35" },
  { label: "Perma Fön & Bitirme", duration: "0:50" },
  { label: "Müşteri Yorumu — Perma", duration: "1:20" },
];

function VideoPlaceholder({ label, duration }: { label: string; duration: string }) {
  return (
    <div className="relative aspect-[9/16] bg-surface glass-panel flex flex-col items-center justify-center gap-4 group hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      {/* Play icon */}
      <div className="w-14 h-14 rounded-full border border-primary/40 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary ml-1">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <div className="text-center px-4 z-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-text-muted leading-snug">{label}</p>
        <p className="text-[9px] tracking-[0.2em] text-primary/60 mt-2">{duration}</p>
      </div>
      <div className="absolute bottom-3 right-3 text-[8px] uppercase tracking-[0.25em] text-text-faint/50">Yakında</div>
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
              <div className={`grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start ${!isEven ? "lg:grid-cols-[1.5fr_1fr]" : ""}`}>

                {/* Number + Tag */}
                <div className={`flex flex-col gap-6 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-6">
                    <span className="text-6xl lg:text-8xl font-display text-primary/15 leading-none select-none">{service.number}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-primary">{service.tag}</p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-white leading-tight tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm md:text-base text-text-muted leading-relaxed tracking-wide max-w-lg">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-3 mt-2">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-text-faint">
                        <span className="w-4 h-px bg-primary/50 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="tel:+902422371015"
                    className="mt-4 inline-flex items-center gap-3 self-start px-8 py-4 border border-primary/30 bg-primary/5 text-[10px] uppercase tracking-[0.35em] text-primary hover:bg-primary/15 hover:border-primary/60 transition-all duration-300 group"
                  >
                    Randevu Al
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Right side: Decorative panel OR Video gallery for perma */}
                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                  {service.hasVideoGallery ? (
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-primary mb-6">Perma Saç Videoları</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {videoPlaceholders.map((v) => (
                          <VideoPlaceholder key={v.label} label={v.label} duration={v.duration} />
                        ))}
                      </div>
                      <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-text-faint/50">
                        * Videolar yakında yüklenecektir. Instagram sayfamızı takip edin.
                      </p>
                    </div>
                  ) : (
                    <div className="relative h-64 lg:h-80 glass-panel overflow-hidden flex items-center justify-center">
                      <div
                        className="absolute inset-0 opacity-5"
                        style={{
                          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(196,30,58,0.3) 40px, rgba(196,30,58,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(196,30,58,0.3) 40px, rgba(196,30,58,0.3) 41px)"
                        }}
                      />
                      <div className="relative z-10 text-center px-8">
                        <span className="block text-[80px] lg:text-[120px] font-display text-primary/10 leading-none select-none">{service.number}</span>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-text-faint mt-4">{service.tag}</p>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
