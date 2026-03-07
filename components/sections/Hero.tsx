import Image from "next/image";
import { salonConfig } from "../../data/config";

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] pt-32 pb-16 px-6 lg:px-12 flex items-center justify-center overflow-hidden">
            {/* Background with Gold Accents */}
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary-dark),transparent_40%)] opacity-20 pointer-events-none" />
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative mx-auto max-w-[1600px] w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-center z-10">
                {/* Left: Typography */}
                <div className="flex flex-col justify-center animate-slide-up">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary mb-8 font-medium">
                        {salonConfig.hero.eyebrow}
                    </p>

                    <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tight font-display mb-8 text-balance">
                        <span className="block text-white">23 Yıllık</span>
                        <span className="block italic text-primary/90">Tecrübeyle,</span>
                        <span className="block text-white mt-2">Güzelliğin</span>
                        <span className="block text-white">Zirvesi.</span>
                    </h1>

                    <p className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed tracking-wide mb-12">
                        {salonConfig.hero.description}
                    </p>

                    {/* CTA & Actions */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <a
                            href={salonConfig.hero.primaryCta.href}
                            className="relative overflow-hidden group px-10 py-5 bg-gradient-to-r from-primary-dark via-primary to-primary-light text-background text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
                        >
                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            <span className="relative z-10 flex items-center gap-3">
                                {salonConfig.hero.primaryCta.label}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </a>

                        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-text-faint">
                            <span className="w-8 h-px bg-surface-border" />
                            <span>{salonConfig.hero.signatureNote}</span>
                        </div>
                    </div>
                </div>

                {/* Right: Editorial Image */}
                <div className="relative h-[65dvh] lg:h-[85dvh] w-full reveal-scale">
                    {/* Framed Image */}
                    <div className="absolute inset-0 w-[90%] left-[5%] top-[5%] h-[90%] z-20 overflow-hidden border border-white/5 group">
                        <Image
                            src={salonConfig.hero.image.src}
                            alt={salonConfig.hero.image.alt}
                            fill
                            priority
                            className="object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>

                    {/* Decorative Backing / Layout Shift */}
                    <div className="absolute inset-0 w-[40%] right-[5%] bottom-[5%] h-[60%] border border-primary/20 z-10" />

                    {/* Floating Stats */}
                    <div className="absolute bottom-12 -left-6 lg:-left-12 z-30 flex flex-col gap-3">
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
        </section>
    );
}
