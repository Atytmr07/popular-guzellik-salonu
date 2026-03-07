import { salonConfig } from "../../data/config";

export function Footer() {
    return (
        <footer className="relative bg-background pt-32 pb-16 px-6 lg:px-12 border-t border-surface-border overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative mx-auto max-w-[1600px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24 reveal-on-scroll">

                    {/* Brand Info */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">
                                {salonConfig.brand.tagline}
                            </p>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl text-white font-display text-balance leading-[1.1] tracking-tight">
                                {salonConfig.brand.name}
                            </h3>
                        </div>
                        <p className="mt-8 text-sm md:text-base leading-relaxed tracking-wider text-text-muted max-w-sm">
                            {salonConfig.footerNote}
                        </p>
                    </div>

                    <div className="lg:col-span-1 hidden lg:block" />

                    {/* Navigation */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-text-faint mb-8">
                            Bölümler
                        </h4>
                        <ul className="space-y-6">
                            {salonConfig.nav.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="group flex items-center gap-4 text-xs md:text-sm uppercase tracking-[0.25em] text-text-muted transition-colors hover:text-white"
                                    >
                                        <span className="w-4 h-px bg-surface-border transition-all group-hover:w-8 group-hover:bg-primary" />
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-text-faint mb-8">
                            İletişim
                        </h4>
                        <div className="space-y-8 text-sm tracking-wider text-text-muted leading-relaxed">
                            <a
                                href={salonConfig.contact.phoneHref}
                                className="block hover:text-primary transition-colors"
                            >
                                {salonConfig.contact.phone}
                            </a>
                            <a
                                href={salonConfig.contact.instagramHref}
                                target="_blank"
                                rel="noreferrer"
                                className="block hover:text-primary transition-colors"
                            >
                                {salonConfig.brand.instagramHandle}
                            </a>
                            <p className="max-w-[280px]">
                                {salonConfig.contact.address}
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-4 uppercase tracking-[0.3em] text-[9px] text-text-faint">
                    <p>© {new Date().getFullYear()} {salonConfig.brand.shortName}</p>
                    <div className="flex items-center gap-6">
                        <span>Tüm Hakları Saklıdır.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
