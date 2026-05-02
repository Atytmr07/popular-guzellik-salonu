import { salonConfig } from "../../data/config";

export function Hero() {
    return (
        <section id="top" className="relative min-h-[100dvh] pt-28 pb-16 px-6 lg:px-12 flex flex-col justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary-dark),transparent_40%)] opacity-25 pointer-events-none" />
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/8 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-primary-dark/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative mx-auto max-w-[1600px] w-full z-10">
                <div className="animate-slide-up text-center lg:text-left">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary mb-6 font-medium">
                        {salonConfig.hero.eyebrow}
                    </p>

                    <h1 className="text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.92] tracking-tight font-display text-balance">
                        <span className="block text-white font-bold">İddia Ediyoruz</span>
                        <span className="block italic text-primary leading-[1] mt-1">Antalya&apos;da Kaş</span>
                        <span className="block text-white font-bold mt-1">Bizim İşimiz..!</span>
                    </h1>

                    <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
                        <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-transparent" />
                        <p className="text-[10px] uppercase tracking-[0.35em] text-text-faint">
                            {salonConfig.brand.tagline}
                        </p>
                        <div className="h-[2px] w-8 bg-primary/30" />
                    </div>

                    {/* CTA */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
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
                </div>
            </div>
        </section>
    );
}
