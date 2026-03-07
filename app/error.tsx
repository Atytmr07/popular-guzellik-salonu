"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-6 text-gray-200">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/5 p-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.34em] text-[#D4AF37]">
          Bir Hata Oluştu
        </p>
        <h1 className="mt-4 text-4xl leading-tight text-white [font-family:var(--font-display)] sm:text-5xl">
          Sayfa şu anda yüklenemiyor.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 tracking-[0.1em] text-gray-400 sm:text-base">
          Beklenmeyen bir durum oluştu. Sayfayı yeniden deneyebilir ya da ana
          sayfaya dönebilirsiniz.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="luxury-button inline-flex min-h-12 items-center rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black shadow-[0_12px_30px_rgba(212,175,55,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            Tekrar Dene
          </button>
          <a
            href="/"
            className="luxury-button inline-flex min-h-12 items-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium uppercase tracking-[0.22em] text-gray-100 backdrop-blur-md transition-all duration-300 ease-out hover:border-[#D4AF37]/50 hover:bg-white/8 hover:text-[#f7e7ac]"
          >
            Ana Sayfa
          </a>
        </div>
      </div>
    </main>
  );
}
