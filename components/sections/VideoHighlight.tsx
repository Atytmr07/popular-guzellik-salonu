"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const PERMA_VIDEOS = [
    "/perma/perma1.mp4",
    "/perma/perma2.mp4",
    "/perma/perma3.mp4",
    "/perma/perma4.mp4",
    "/perma/perma5.mp4",
    "/perma/perma6.mp4",
    "/perma/perma7.mp4",
    "/perma/perma8.mp4",
];

function VideoCard({ src, index }: { src: string; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // IntersectionObserver: sadece ekranda görününce yükle
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px", threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Ekrandan çıkınca durdur
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting && isPlaying) {
                    videoRef.current?.pause();
                    setIsPlaying(false);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [isPlaying]);

    const togglePlay = useCallback(() => {
        const vid = videoRef.current;
        if (!vid) return;
        if (vid.paused) {
            vid.play();
            setIsPlaying(true);
        } else {
            vid.pause();
            setIsPlaying(false);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative flex-none w-[75vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden snap-center snap-always glass-panel border border-white/5 ring-1 ring-white/10 cursor-pointer group"
            onClick={togglePlay}
        >
            {/* Placeholder görsel — video yüklenene kadar */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-surface-elevated flex items-center justify-center z-10">
                    <div className="w-8 h-8 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
                </div>
            )}

            {/* Video — sadece görünür olunca src ata */}
            {isVisible && (
                <video
                    ref={videoRef}
                    src={src}
                    loop
                    playsInline
                    preload="none"
                    onLoadedData={() => setIsLoaded(true)}
                    onEnded={() => setIsPlaying(false)}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            )}

            {/* Play / Pause overlay */}
            <div
                className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-200 ${
                    isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
            >
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    {isPlaying ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </div>
            </div>

            {/* Video numarası */}
            <div className="absolute bottom-3 right-3 z-20 text-[10px] text-white/40 font-mono">
                {String(index + 1).padStart(2, "0")}
            </div>
        </div>
    );
}

export function VideoHighlight() {
    return (
        <section className="relative py-24 bg-surface overflow-hidden">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12 mb-12">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-6 reveal-on-scroll">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
                            Salon Dinamikleri
                        </p>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white tracking-tight leading-[1.05]">
                            Perma <span className="italic text-primary/90">Anları.</span>
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
                {PERMA_VIDEOS.map((src, i) => (
                    <VideoCard key={src} src={src} index={i} />
                ))}
                <div className="flex-none w-[5vw] md:w-[15vw] lg:w-[20vw]" />
            </div>
        </section>
    );
}
