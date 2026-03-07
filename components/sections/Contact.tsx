import { salonConfig } from "../../data/config";

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden">
            <div className="mx-auto max-w-[1600px] grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">

                {/* Contact Info Details */}
                <div className="reveal-on-scroll flex flex-col justify-center">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">
                        Bize Ulaşın
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-[1.05] tracking-tight mb-16">
                        Randevu & İletişim
                    </h2>

                    <dl className="space-y-12">
                        <div>
                            <dt className="text-[9px] uppercase tracking-[0.4em] text-text-faint mb-4">Adres</dt>
                            <dd className="text-sm md:text-base text-text-muted leading-relaxed tracking-wide max-w-sm">
                                <p className="mb-8">{salonConfig.contact.address}</p>
                                <a
                                    href={`https://maps.google.com/?q=${encodeURIComponent(salonConfig.contact.address)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/10 text-white text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-primary hover:border-primary hover:text-background"
                                >
                                    Yol Tarifi Al
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </dd>
                        </div>

                        <div>
                            <dt className="text-[9px] uppercase tracking-[0.4em] text-text-faint mb-4">Telefon</dt>
                            <dd>
                                <a
                                    href={salonConfig.contact.phoneHref}
                                    className="text-xl md:text-2xl font-display text-white transition-colors hover:text-primary-light"
                                >
                                    {salonConfig.contact.phone}
                                </a>
                            </dd>
                        </div>

                        <div>
                            <dt className="text-[9px] uppercase tracking-[0.4em] text-text-faint mb-4">Sosyal Medya</dt>
                            <dd>
                                <a
                                    href={salonConfig.contact.instagramHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm md:text-base text-white tracking-widest transition-colors hover:text-primary-light flex items-center gap-3"
                                >
                                    {salonConfig.brand.instagramHandle}
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>

                {/* Extremely Minimal MAP - Grayscale & Blur */}
                <div className="relative h-[500px] lg:h-[700px] w-full reveal-scale group overflow-hidden bg-surface-hover">
                    <div className="absolute inset-4 z-10 border border-white/5 pointer-events-none transition-colors duration-500 group-hover:border-primary/20" />

                    {/* Grayscale Map Container */}
                    <div className="absolute inset-0 grayscale contrast-[1.1] opacity-70 transition-opacity duration-700 group-hover:opacity-100 group-hover:grayscale-0">
                        <iframe
                            src={salonConfig.contact.mapEmbedSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${salonConfig.brand.name} Google Haritalar`}
                            className="absolute inset-0 object-cover"
                        />
                    </div>

                    {/* Overlay to dim the map further ensuring text remains luxury */}
                    <div className="absolute inset-0 bg-background/30 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
                </div>

            </div>
        </section>
    );
}
