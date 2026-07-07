import { galleryImages } from "@/lib/gallery";
import Reveal from "./Reveal";

type GalleryProps = {
  label: string;
  headline: string;
  copy: string;
};

function GalleryItem({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`group overflow-hidden rounded-2xl border border-outline/60 bg-sand shadow-soft transition-all duration-500 hover:shadow-card ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
      />
    </figure>
  );
}

export default function Gallery({ label, headline, copy }: GalleryProps) {
  const featured = galleryImages.find((img) => img.featured);
  const rest = galleryImages.filter((img) => !img.featured);

  return (
    <section id="gallery" className="section-padding bg-surface-warm">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="section-label">{label}</span>
              <h2 className="font-serif text-3xl font-light leading-tight text-balance md:text-4xl lg:text-5xl">
                {headline}
              </h2>
            </div>
            <p className="max-w-sm font-light text-on-surface-muted text-pretty">{copy}</p>
          </div>
        </Reveal>

        {featured && (
          <Reveal delay={60}>
            <GalleryItem
              src={featured.src}
              alt={featured.alt}
              width={featured.width}
              height={featured.height}
              priority
              className="mb-5 w-full"
            />
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((image, i) => (
            <Reveal key={image.slug} delay={80 + i * 50}>
              <GalleryItem
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
