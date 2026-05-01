const pillars = [
  {
    number: "01",
    title: "35 Yıllık Usta Deneyimi",
    description:
      "Ekibimiz, güzellik sektöründe onlarca yıl boyunca birikmiş bilgi ve el becerisini her seansa yansıtır. Yıllar içinde binlerce müşteriyle çalışarak geliştirilen uzmanlık, her uygulamada hissedilir fark yaratır.",
  },
  {
    number: "02",
    title: "Sürekli Gelişen Teknik Bilgi",
    description:
      "Güzellik teknolojileri ve trendlerini yakından takip eden ekibimiz, yurt içi ve yurt dışı eğitimlerle kendini sürekli yeniler. Lazer sistemleri, kalıcı makyaj pigmentasyonu ve saç kaynak teknikleri her zaman güncel tutulur.",
  },
  {
    number: "03",
    title: "Kişiye Özel Yaklaşım",
    description:
      "Her müşterinin yüz yapısı, ten tonu, saç dokusu ve beklentisi farklıdır. Ekibimiz standart şablonlar yerine her zaman kişiye özel analiz yapar ve en uygun uygulamayı tasarlar. Sizi siz yapan özellikler ön plana çıkar.",
  },
  {
    number: "04",
    title: "Hijyen & Profesyonellik Standardı",
    description:
      "Salonumuzda uygulanan titiz hijyen protokolleri ve tek kullanımlık malzeme politikası, her müşterimizin güvenli ve konforlu bir deneyim yaşamasını sağlar. Profesyonellik, kapıdan girişten seansın bitimine kadar sürer.",
  },
];

export function Staff() {
  return (
    <section id="ekibimiz" className="relative py-24 lg:py-36 px-6 lg:px-12 bg-surface border-y border-surface-border overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,var(--color-primary-dark),transparent_50%)] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-20 lg:mb-28 reveal-on-scroll">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Ekibimiz</p>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display text-white leading-[1.05] tracking-tight">
              Güzellikte ustalık<br />
              <span className="italic text-primary/90">elden gelen bir sanattır.</span>
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed tracking-wide max-w-lg lg:pb-3">
              Popüler Güzellik Salonu&apos;nda her uzman, güzellik tutkusunu yılların disiplini ve teknik ustalığıyla birleştirir.
              Ekibimiz salt servis değil, sizi gerçekten anlayan bir deneyim sunar.
            </p>
          </div>
        </div>

        {/* Large feature quote */}
        <div className="relative mb-20 lg:mb-28 glass-panel px-8 lg:px-16 py-12 lg:py-16 reveal-scale overflow-hidden">
          <div className="absolute top-4 left-8 text-[120px] lg:text-[180px] font-display text-primary/5 leading-none select-none pointer-events-none">"</div>
          <div className="relative z-10 max-w-4xl">
            <p className="text-xl md:text-2xl lg:text-3xl font-display italic text-white/90 leading-[1.5] tracking-tight">
              Bir müşteriyi güzel hissettirmek yetmez — onu{" "}
              <span className="text-primary">güçlü, kendinden emin ve bakımlı</span>{" "}
              hissettirmek asıl hedefimizdir. Bu fark, 35 yıllık deneyimin bize öğrettiği en önemli derstir.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="w-12 h-px bg-primary/50" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-text-faint">Popüler Güzellik Salonu Ekibi</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-28">
          {pillars.map((pillar, idx) => (
            <article
              key={pillar.number}
              className="group relative p-8 lg:p-10 glass-panel hover:-translate-y-1 transition-all duration-500 hover:bg-white/[0.02] reveal-on-scroll overflow-hidden"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <div className="flex items-start gap-6 mb-6">
                <span className="text-4xl lg:text-5xl font-display text-primary/20 group-hover:text-primary/40 transition-colors duration-500 leading-none select-none">
                  {pillar.number}
                </span>
                <div className="h-px flex-1 bg-surface-border mt-6" />
              </div>
              <h3 className="text-xl lg:text-2xl font-display text-white mb-4 group-hover:text-white transition-colors leading-tight">
                {pillar.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed tracking-wide">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-surface-border reveal-on-scroll">
          {[
            { value: "35+", label: "Yıllık Tecrübe" },
            { value: "430+", label: "Mutlu Müşteri" },
            { value: "12", label: "Hizmet Kategorisi" },
            { value: "4.9", label: "Google Puanı" },
          ].map((stat) => (
            <div key={stat.label} className="bg-background px-6 py-10 text-center group hover:bg-surface transition-colors duration-300">
              <p className="text-3xl lg:text-5xl font-display text-primary/80 group-hover:text-primary transition-colors mb-3">
                {stat.value}
              </p>
              <p className="text-[9px] uppercase tracking-[0.4em] text-text-faint">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
