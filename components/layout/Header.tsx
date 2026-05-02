"use client";

import { useState, useEffect } from "react";
import { salonConfig } from "../../data/config";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      {/* ── Main bar ── */}
      <header className="w-full glass-panel border-x-0 border-t-0 border-b border-surface-border/50 py-4 px-5 lg:px-12 flex items-center justify-between gap-4">

        {/* Brand */}
        <a
          href="#top"
          className="group flex flex-col items-start transition-opacity hover:opacity-80 shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          {/* Short name on mobile, full on desktop */}
          <span className="lg:hidden text-[11px] font-bold uppercase tracking-[0.4em] text-white">
            Popüler
          </span>
          <span className="hidden lg:block text-[13px] font-bold uppercase tracking-[0.45em] text-white">
            {salonConfig.brand.shortName}
          </span>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-primary/80 mt-0.5 transition-colors group-hover:text-primary">
            {salonConfig.brand.tagline}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-12">
          {salonConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.4em] text-text-muted transition-all duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side: Randevu + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={salonConfig.contact.phoneHref}
            className="relative overflow-hidden group px-4 lg:px-6 py-2.5 border border-primary/30 bg-primary/5 transition-all duration-500 hover:bg-primary/20 hover:border-primary/80 outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative text-[9px] font-bold uppercase tracking-[0.35em] text-primary group-hover:text-white transition-colors whitespace-nowrap">
              Randevu
            </span>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 shrink-0"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className={`lg:hidden glass-panel border-b border-surface-border/50 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-6 gap-1">
          {salonConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 py-3 text-[11px] uppercase tracking-[0.35em] text-text-muted hover:text-white transition-colors border-b border-surface-border/30 last:border-0"
            >
              <span className="w-3 h-px bg-primary/50 shrink-0" />
              {item.label}
            </a>
          ))}
          <a
            href={salonConfig.contact.instagramHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 pt-5 text-[10px] uppercase tracking-[0.35em] text-primary hover:text-primary-light transition-colors"
          >
            <span className="w-3 h-px bg-primary/50 shrink-0" />
            Instagram
          </a>
        </nav>
      </div>
    </div>
  );
}
