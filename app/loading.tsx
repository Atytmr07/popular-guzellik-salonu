export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-6 text-gray-200">
      <div className="flex flex-col items-center gap-5">
        <div className="h-14 w-14 animate-pulse rounded-full border border-[#C41E3A]/30 bg-[#C41E3A]/10" />
        <p className="text-xs uppercase tracking-[0.34em] text-[#C41E3A]">
          Popüler yükleniyor
        </p>
      </div>
    </main>
  );
}
