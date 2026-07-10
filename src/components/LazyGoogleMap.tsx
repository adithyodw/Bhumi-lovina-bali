"use client";

import { useEffect, useRef, useState } from "react";

type LazyGoogleMapProps = {
  src: string;
  title: string;
  className?: string;
};

export default function LazyGoogleMap({ src, title, className = "" }: LazyGoogleMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px", threshold: 0.01 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {visible ? (
        <iframe
          title={title}
          src={src}
          loading="lazy"
          className="h-full min-h-[400px] w-full border-0 grayscale-[30%] contrast-[1.1]"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className="flex h-full min-h-[400px] w-full items-center justify-center bg-primary-dark/10"
          aria-hidden
        >
          <div className="h-8 w-8 animate-pulse rounded-full bg-cream/30" />
        </div>
      )}
    </div>
  );
}
