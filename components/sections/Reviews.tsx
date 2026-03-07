import { salonConfig } from "../../data/config";

export function Reviews() {
    return (
        <section id="reviews" className="py-32 px-6 lg:px-12 bg-surface">
            <div className="mx-auto max-w-[1600px] border-y border-surface-border py-24">

                {/* Quote Mark / Intro */}
                <div className="flex flex-col items-center justify-center text-center reveal-on-scroll mb-20">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">
                        {salonConfig.socialProof.eyebrow}
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white max-w-3xl leading-[1.1] text-balance">
                        {salonConfig.socialProof.title}
                    </h2>
                    <div className="mt-10 flex items-center justify-center gap-6">
                        <div className="flex gap-1 text-primary">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <div className="text-xs uppercase tracking-[0.3em] font-medium text-text-faint">
                            {salonConfig.socialProof.rating} — {salonConfig.socialProof.ratingLabel}
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {salonConfig.socialProof.reviews.map((review, idx) => (
                        <figure
                            key={idx}
                            className={`relative reveal-on-scroll ${idx === 1 ? 'md:mt-32' : ''}`}
                        >
                            {/* Massive subtle quote mark behind text */}
                            <span className="absolute -top-16 -left-8 text-[12rem] leading-none font-display text-white/[0.03] select-none pointer-events-none">
                                "
                            </span>
                            <blockquote className="relative z-10">
                                <p className="text-2xl md:text-3xl lg:text-4xl font-display text-white leading-snug text-balance">
                                    {review.quote}
                                </p>
                            </blockquote>
                            <figcaption className="mt-8 flex items-center gap-4">
                                <div className="w-8 h-px bg-primary/50" />
                                <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">
                                    {review.author}
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>

            </div>
        </section>
    );
}
