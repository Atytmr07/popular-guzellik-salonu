import Image from "next/image";
import { salonConfig } from "../../data/config";

export function Gallery() {
    return (
        <section id="gallery" className="py-32 px-6 lg:px-12 bg-background">
            <div className="mx-auto max-w-[1600px]">
                {/* Header */}
                <div className="mb-24 lg:w-1/2 reveal-on-scroll">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">
                        {salonConfig.gallery.eyebrow}
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-[1.05] tracking-tight text-white">
                        {salonConfig.gallery.title}
                    </h2>
                    <p className="mt-8 text-text-muted tracking-wider leading-relaxed text-sm max-w-lg">
                        {salonConfig.gallery.description}
                    </p>
                </div>

                {/* Masonry/Asymmetric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10">
                    {salonConfig.gallery.items.map((item, idx) => {
                        // Assigning custom span logic for a magazine layout
                        const colSpan = idx === 0 ? "lg:col-span-7" : idx === 1 ? "lg:col-span-5" : idx === 2 ? "lg:col-span-5 lg:-mt-24" : "lg:col-span-7";
                        const height = idx === 0 || idx === 3 ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[3/4] lg:aspect-[4/5]";

                        return (
                            <figure
                                key={item.title}
                                className={`relative group ${colSpan} reveal-on-scroll overflow-hidden`}
                                style={{ animationDelay: `${(idx % 2) * 200}ms` }}
                            >
                                <div className={`relative w-full overflow-hidden ${height} bg-surface`}>
                                    <Image
                                        src={item.image.src}
                                        alt={item.image.alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                        className="object-cover object-center transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-black/20 opacity-70 group-hover:opacity-90 transition-opacity duration-700 z-10" />

                                    {/* Accent Border on Hover */}
                                    <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-700 z-20 m-4 lg:m-6" />

                                    {/* Tags */}
                                    <div className="absolute top-6 left-6 flex gap-3 z-30 transition-transform duration-700 group-hover:-translate-y-1">
                                        <span className="glass-panel px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-white">
                                            {item.treatment}
                                        </span>
                                    </div>

                                    {/* Content moved inside image for editorial feel */}
                                    <figcaption className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 z-30 flex flex-col gap-2 translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                        <h3 className="text-2xl lg:text-4xl font-display text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <div className="w-12 h-px bg-primary mb-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
                                        <p className="text-xs lg:text-sm text-primary-light tracking-wider max-w-sm">
                                            {item.result}
                                        </p>
                                    </figcaption>
                                </div>
                            </figure>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
