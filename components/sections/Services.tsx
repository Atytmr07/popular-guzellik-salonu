import { salonConfig, type ServiceKey } from "../../data/config";

function ServiceIcon({ service }: { service: ServiceKey }) {
    // We can return a more minimalistic/editorial 01, 02, 03 or refined SVG.
    // Using numeric indices creates a highly editorial list approach.
    const map: Record<ServiceKey, string> = {
        laser: "01",
        extensions: "02",
        hair: "03"
    };
    return <span className="text-sm font-display text-primary/50">{map[service]}.</span>;
}

export function Services() {
    return (
        <section id="services" className="relative py-32 px-6 lg:px-12 bg-surface">
            <div className="mx-auto max-w-[1600px]">
                {/* Header */}
                <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12 reveal-on-scroll">
                    <div className="max-w-3xl">
                        <h2 className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">
                            {salonConfig.services.eyebrow}
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-7xl font-display text-white leading-[1.05] tracking-tight">
                            {salonConfig.services.title}
                        </h3>
                    </div>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed tracking-wider max-w-sm">
                        {salonConfig.services.description}
                    </p>
                </div>

                {/* Service Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {salonConfig.services.items.map((service, idx) => (
                        <article
                            key={service.title}
                            className="group relative p-8 lg:p-12 glass-panel transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.02] flex flex-col justify-between min-h-[350px] lg:min-h-[420px] reveal-on-scroll overflow-hidden"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            {/* Accent Line on Top */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                            <div>
                                <div className="mb-6 lg:mb-10 text-5xl lg:text-6xl font-display text-primary/20 group-hover:text-primary transition-colors duration-500 italic">
                                    <ServiceIcon service={service.key} />
                                </div>
                                <h4 className="text-2xl lg:text-3xl font-display text-text-main mb-6 group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </h4>
                                <p className="text-sm text-text-muted leading-relaxed tracking-wide">
                                    {service.description}
                                </p>
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
