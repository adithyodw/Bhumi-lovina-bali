import Image from "next/image";
import { mainVillaGallery } from "@/lib/gallery";
import Reveal from "./Reveal";

type GalleryProps = {
  label: string;
  headline: string;
  copy: string;
};

export default function Gallery({ label, headline, copy }: GalleryProps) {
  const [primary, secondary] = mainVillaGallery;

  return (
    <section id="gallery" className="section-padding bg-surface-warm">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-12 flex flex-col items-center text-center md:mb-16">
            <span className="section-label">{label}</span>
            <h2 className="mb-5 max-w-2xl font-serif text-3xl font-light leading-[1.12] text-balance md:text-4xl lg:text-5xl">
              {headline}
            </h2>
            <p className="max-w-xl text-sm font-light leading-relaxed text-on-surface-muted text-pretty md:text-base">
              {copy}
            </p>
          </div>
        </Reveal>

        {primary && (
          <Reveal delay={60}>
            <figure className="group relative mb-5 overflow-hidden rounded-2xl border border-outline/50 bg-charcoal shadow-elevated">
              <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
                <Image
                  src={primary.src}
                  alt={primary.alt}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </figure>
          </Reveal>
        )}

        {secondary && (
          <Reveal delay={120}>
            <figure className="group relative overflow-hidden rounded-2xl border border-outline/50 bg-charcoal shadow-soft">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={secondary.src}
                  alt={secondary.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </figure>
          </Reveal>
        )}

        <Reveal delay={180}>
          <p className="mt-8 text-center font-sans text-[10px] uppercase tracking-[0.28em] text-muted">
            Bhumi Lovina Residence &amp; Villa · Temukus, Lovina, North Bali
          </p>
        </Reveal>
      </div>
    </section>
  );
}
