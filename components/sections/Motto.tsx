export function Motto() {
    return (
        <section className="relative py-24 lg:py-32 px-6 lg:px-12 flex items-center justify-center overflow-hidden border-y border-surface-border bg-surface">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary-dark),transparent_60%)] opacity-[0.03] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center reveal-on-scroll">

                <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-display italic leading-[1.2] text-balance mb-6">
                    <span className="text-text-main">"İddia Ediyoruz</span>
                    <br />
                    <span className="text-primary/90">Antalyada Kaş </span>
                    <span className="text-text-main">Bizim İşimiz..!"</span>
                </h2>

                <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-12" />
            </div>
        </section>
    );
}
