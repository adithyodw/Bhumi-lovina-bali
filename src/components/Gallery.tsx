import Image from "next/image";
import { mainVillaGallery, type GalleryImage } from "@/lib/gallery";
import Reveal from "./Reveal";

type GalleryProps = {
  label: string;
  headline: string;
  copy: string;
};

function gridSpan(image: GalleryImage, index: number) {
  const landscape = image.width >= image.height;

  if (landscape) {
    return index % 5 === 0
      ? "md:col-span-2 lg:col-span-2 aspect-[16/10]"
      : "aspect-[4/3]";
  }

  return "aspect-[4/5]";
}

function GalleryFigure({
  image,
  priority = false,
  className = "",
}: {
  image: GalleryImage;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-outline/50 bg-charcoal shadow-soft ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.02]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
        aria-hidden
      />
    </figure>
  );
}

export default function Gallery({ label, headline, copy }: GalleryProps) {
  const [hero, ...rest] = mainVillaGallery;

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

        {hero && (
          <Reveal delay={60}>
            <GalleryFigure
              image={hero}
              priority
              className="relative mb-5 aspect-[16/10] w-full shadow-elevated md:aspect-[21/9]"
            />
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {rest.map((image, index) => (
              <Reveal key={image.slug} delay={100 + index * 40}>
                <GalleryFigure
                  image={image}
                  className={`relative w-full ${gridSpan(image, index)}`}
                />
              </Reveal>
            ))}
          </div>
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
