export function VideoHighlight() {
    const videos = [
        { id: 1, src: "/video1.mp4" },
        { id: 2, src: "/video2.mp4" },
        { id: 3, src: "/video3.mp4" },
        { id: 4, src: "/video4.mp4" },
        { id: 5, src: "/video5.mp4" },
        { id: 6, src: "/video6.mp4" }
    ];

    return (
        <section className="relative py-24 bg-surface overflow-hidden">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12 mb-12">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-6 reveal-on-scroll">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
                            Salon Dinamikleri
                        </p>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white tracking-tight leading-[1.05]">
                            İşlem <span className="italic text-primary/90">Anları.</span>
                        </h2>
                    </div>
                    <div className="hidden lg:flex items-center gap-4 text-xs text-text-faint uppercase font-semibold tracking-wider">
                        <span className="w-12 h-px bg-surface-border" />
                        Kaydırın
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary/50">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full pl-6 lg:pl-12 flex gap-4 lg:gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8">
                {videos.map((vid) => (
                    <div
                        key={vid.id}
                        className="relative flex-none w-[75vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden snap-center snap-always glass-panel border border-white/5 ring-1 ring-white/10"
                    >
                        {/* 
                          Using generic placeholder paths (video1.mp4).
                          The user must place their actual vertical video files in public/ with matching names.
                        */}
                        <video
                            src={vid.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />

                    </div>
                ))}

                {/* Spacer block to allow last item to scroll fully to the left on desktop edge cases */}
                <div className="flex-none w-[5vw] md:w-[15vw] lg:w-[20vw]" />
            </div>
        </section>
    );
}
