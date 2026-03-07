import { salonConfig } from "../../data/config";

export function Header() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <header className="w-full glass-panel border-x-0 border-t-0 border-b border-surface-border/50 py-4 px-6 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="group flex flex-col items-start transition-opacity hover:opacity-80"
        >
          <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.5em] text-white">
            {salonConfig.brand.shortName}
          </span>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-primary/80 mt-1 transition-colors group-hover:text-primary">
            {salonConfig.brand.tagline}
          </span>
        </a>

        {/* Desktop Nav - Full Width Luxury Bar */}
        <nav className="hidden lg:flex items-center gap-12">
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

        {/* CTA */}
        <div className="flex items-center gap-8">
          <a
            href={salonConfig.contact.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="hidden md:block text-[9px] uppercase tracking-[0.4em] text-text-muted transition-colors hover:text-white"
          >
            Instagram
          </a>
          <a
            href={salonConfig.contact.phoneHref}
            className="relative overflow-hidden group px-6 py-2.5 border border-primary/30 bg-primary/5 transition-all duration-500 hover:bg-primary/20 hover:border-primary/80 outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative text-[9px] font-bold uppercase tracking-[0.4em] text-primary group-hover:text-white transition-colors">
              Randevu
            </span>
          </a>
        </div>
      </header>
    </div>
  );
}
