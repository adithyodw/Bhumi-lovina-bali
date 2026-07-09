import Link from "next/link";
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
  href,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  href?: string;
}) {
  const inner = (
    <figure
      className={`group relative h-full overflow-hidden rounded-2xl border border-outline/60 bg-sand shadow-soft transition-all duration-500 hover:shadow-card`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      {href && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-sans text-[10px] uppercase tracking-widest text-white">
            View Villa →
          </span>
        </figcaption>
      )}
    </figure>
  );

  if (href) {
    return (
      <Link href={href} className={`relative block ${className}`}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
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
                href={image.villaSlug ? `/villas/${image.villaSlug}` : undefined}
                className="w-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
