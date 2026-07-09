import Image from "next/image";
import Link from "next/link";
import { HERO_ALT, HERO_IMAGE } from "@/lib/images";

type HeroBannerProps = {
  badge: string;
  title: string;
  copy: string;
  bookLabel: string;
  exploreLabel: string;
};

export default function HeroBanner({
  badge,
  title,
  copy,
  bookLabel,
  exploreLabel,
}: HeroBannerProps) {
  return (
    <header
      id="home"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-primary-dark"
    >
      <Image
        src={HERO_IMAGE}
        alt={HERO_ALT}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Strong scrim ensures text is always readable */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-primary-dark/20 mix-blend-multiply"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="mb-6 block font-sans text-[11px] uppercase tracking-[0.4em] text-white/90">
          {badge}
        </span>
        <h1 className="mb-6 font-serif text-4xl font-light leading-[1.08] text-white text-balance drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-white/90 text-pretty md:text-lg">
          {copy}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#book"
            className="inline-flex min-w-[180px] items-center justify-center rounded-lg bg-cream px-8 py-3.5 font-sans text-xs uppercase tracking-widest text-primary shadow-elevated transition-all duration-300 hover:bg-white"
          >
            {bookLabel}
          </Link>
          <Link
            href="#villa"
            className="inline-flex min-w-[180px] items-center justify-center rounded-lg border border-white/50 bg-white/10 px-8 py-3.5 font-sans text-xs uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            {exploreLabel}
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        aria-hidden
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </header>
  );
}
