"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const reels = [
  {
    id: "C6s-vOABmmT",
    embedUrl: "https://www.instagram.com/reel/C6s-vOABmmT/embed",
    title: "Bhumi Lovina villa reel by Adellianike",
  },
  {
    id: "C8E8cSKvhgC",
    embedUrl: "https://www.instagram.com/reel/C8E8cSKvhgC/embed",
    title: "Bhumi Lovina villa reel",
  },
  {
    id: "C76YNyxSbHI",
    embedUrl: "https://www.instagram.com/reel/C76YNyxSbHI/embed",
    title: "Bhumi Lovina villa experience reel",
  },
] as const;

function LazyReelEmbed({ embedUrl, title }: { embedUrl: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group overflow-hidden rounded-2xl border border-outline bg-surface shadow-soft transition-all duration-500 hover:shadow-card"
    >
      <div className="relative aspect-[9/16] w-full bg-sand">
        {visible ? (
          <iframe
            src={embedUrl}
            title={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-outline bg-cream">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M8 5v14l11-7L8 5z"
                  fill="currentColor"
                  className="text-primary"
                />
              </svg>
            </div>
            <p className="font-sans text-[10px] uppercase tracking-widest text-muted">
              Instagram Reel
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

type InstagramReelsProps = {
  label: string;
  headline: string;
  copy: string;
};

export default function InstagramReels({ label, headline, copy }: InstagramReelsProps) {
  return (
    <section id="reels" className="section-padding bg-cream">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="section-label">{label}</span>
            <h2 className="mb-5 font-serif text-3xl font-light leading-tight text-balance md:text-4xl lg:text-5xl">
              {headline}
            </h2>
            <p className="font-light leading-relaxed text-on-surface-muted text-pretty">{copy}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel, i) => (
            <Reveal key={reel.id} delay={i * 80}>
              <LazyReelEmbed embedUrl={reel.embedUrl} title={reel.title} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
