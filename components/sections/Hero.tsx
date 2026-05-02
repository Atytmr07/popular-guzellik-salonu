import Image from "next/image";
import { salonConfig } from "../../data/config";

export function Hero() {
    return (
        <section id="top" className="relative min-h-[100dvh] pt-28 pb-16 px-6 lg:px-12 flex flex-col justify-center overflow-hidden">
            {/* Background with Red Accents */}
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary-dark),transparent_40%)] opacity-25 pointer-events-none" />
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/8 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-primary-dark/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative mx-auto max-w-[1600px] w-full z-10 flex flex-col gap-16">

                {/* ── PRIMARY SLOGAN ── full-width, first thing user sees */}
                <div className="animate-slide-up text-center lg:text-left">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary mb-6 font-medium">
                        {salonConfig.hero.eyebrow}
                    </p>

                    <h1 className="text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.92] tracking-tight font-display text-balance">
                        <span className="block text-white font-bold">İddia Ediyoruz</span>
                        <span className="block italic text-primary leading-[1] mt-1">Antalya&apos;da Kaş</span>
                        <span className="block text-white font-bold mt-1">Bizim İşimiz..!</span>
                    </h1>

                    {/* Decorative line beneath slogan */}
                    <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
                        <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-transparent" />
                        <p className="text-[10px] uppercase tracking-[0.35em] text-text-faint">
                            {salonConfig.brand.tagline}
                        </p>
                        <div className="h-[2px] w-8 bg-primary/30" />
                    </div>
                </div>

                {/* ── SECONDARY CONTENT GRID ── image + info */}
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

                    {/* Left: Supporting text + CTAs */}
                    <div className="flex flex-col justify-center animate-fade-in order-2 lg:order-1">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-white/80 italic leading-[1.25] tracking-tight mb-6 text-balance">
                            35 Yıllık Tecrübeyle,<br />
                            <span className="text-primary/90">Güzelliğinizin Yeni Zirvesi.</span>
                        </h2>

                        <p className="text-sm md:text-base text-text-muted max-w-lg leading-relaxed tracking-wide mb-10">
                            {salonConfig.hero.description}
                        </p>

                        {/* Highlights list */}
                        <ul className="flex flex-col gap-3 mb-10">
                            {salonConfig.hero.highlights.map((h) => (
                                <li key={h} className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-text-faint">
                                    <span className="w-5 h-px bg-primary/60 flex-shrink-0" />
                                    {h}
                                </li>
                            ))}
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                            <a
                                href={salonConfig.hero.primaryCta.href}
                                className="relative overflow-hidden group px-10 py-5 bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:shadow-[0_0_40px_rgba(196,30,58,0.5)] hover:scale-[1.02]"
                            >
                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                                <span className="relative z-10 flex items-center gap-3">
                                    {salonConfig.hero.primaryCta.label}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </a>

                            <a
                                href={salonConfig.hero.secondaryCta.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[10px] uppercase tracking-[0.35em] text-text-faint hover:text-primary transition-colors duration-300 flex items-center gap-3"
                            >
                                <span className="w-6 h-px bg-surface-border" />
                                {salonConfig.hero.secondaryCta.label}
                            </a>
                        </div>

                        {/* Signature note */}
                        <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-text-faint/60 max-w-md leading-loose">
                            {salonConfig.hero.signatureNote}
                        </p>
                    </div>

                    {/* Right: Editorial Image + Floating Stats */}
                    <div className="relative h-[60dvh] lg:h-[75dvh] w-full reveal-scale order-1 lg:order-2">
                        {/* Framed Image */}
                        <div className="absolute inset-0 w-[90%] left-[5%] top-[5%] h-[90%] z-20 overflow-hidden border border-white/5 group">
                            <Image
                                src={salonConfig.hero.image.src}
                                alt={salonConfig.hero.image.alt}
                                fill
                                priority
                                className="object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 55vw"
                            />
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        </div>

                        {/* Decorative Backing */}
                        <div className="absolute inset-0 w-[40%] right-[5%] bottom-[5%] h-[60%] border border-primary/20 z-10" />

                        {/* Floating Stats */}
                        <div className="absolute bottom-12 -left-4 lg:-left-10 z-30 flex flex-col gap-3">
                            {salonConfig.hero.stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className="glass-panel px-6 py-4 flex items-baseline gap-4 shadow-2xl animate-fade-in"
                                    style={{ animationDelay: `${(i + 1) * 200}ms` }}
                                >
                                    <span className="text-2xl font-display text-primary/90">{stat.value}</span>
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
