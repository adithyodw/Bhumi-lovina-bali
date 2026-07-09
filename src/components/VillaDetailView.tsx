import Image from "next/image";
import Link from "next/link";
import type { Villa } from "@/data/villas";
import Reveal from "./Reveal";
import { IconCheck } from "./icons";

type Labels = {
  backToVillas: string;
  bedConfiguration: string;
  occupancy: string;
  bathroom: string;
  size: string;
  storeys: string;
  bedrooms: string;
  amenities: string;
  gallery: string;
  galleryCopy: string;
  bookThisVilla: string;
  viewAllVillas: string;
  sqm: string;
};

type Props = {
  villa: Villa;
  labels: Labels;
  bookHref?: string;
};

export default function VillaDetailView({ villa, labels, bookHref = "/#book" }: Props) {
  const galleryRest = villa.gallery.slice(1);

  return (
    <article>
      <header className="relative min-h-[55vh] overflow-hidden bg-primary-dark md:min-h-[65vh]">
        <Image
          src={villa.heroImage}
          alt={`${villa.name} — luxury private pool villa at Bhumi Lovina North Bali`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-[1100px] flex-col justify-end px-6 pb-12 pt-28 md:min-h-[65vh] md:pb-16 md:pt-32">
          <Link
            href="/villas"
            className="mb-6 inline-flex w-fit items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden>←</span>
            {labels.backToVillas}
          </Link>
          <span className="mb-3 block font-sans text-[11px] uppercase tracking-[0.35em] text-white/80">
            {villa.categoryLabel}
          </span>
          <h1 className="mb-4 font-serif text-4xl font-light leading-[1.08] text-white text-balance md:text-5xl lg:text-6xl">
            {villa.name}
          </h1>
          <p className="max-w-2xl text-base font-light leading-relaxed text-white/90 text-pretty md:text-lg">
            {villa.tagline}
          </p>
        </div>
      </header>

      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <Reveal>
              <p className="mb-6 text-base font-light leading-relaxed text-on-surface-muted text-pretty md:text-lg">
                {villa.intro}
              </p>
              {villa.description.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mb-5 text-base font-light leading-relaxed text-on-surface-muted text-pretty"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={80}>
              <aside className="rounded-2xl border border-outline bg-surface p-6 shadow-soft md:p-8">
                <dl className="space-y-5">
                  <div>
                    <dt className="mb-1 font-sans text-[10px] uppercase tracking-widest text-muted">
                      {labels.size}
                    </dt>
                    <dd className="font-serif text-2xl text-charcoal">
                      {villa.sizeSqm} {labels.sqm}
                    </dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-outline pt-5">
                    <div>
                      <dt className="mb-1 font-sans text-[10px] uppercase tracking-widest text-muted">
                        {labels.storeys}
                      </dt>
                      <dd className="text-sm font-light text-charcoal">2</dd>
                    </div>
                    <div>
                      <dt className="mb-1 font-sans text-[10px] uppercase tracking-widest text-muted">
                        {labels.bedrooms}
                      </dt>
                      <dd className="text-sm font-light text-charcoal">{villa.bedrooms}</dd>
                    </div>
                  </div>
                  <div className="border-t border-outline pt-5">
                    <dt className="mb-2 font-sans text-[10px] uppercase tracking-widest text-muted">
                      {labels.bedConfiguration}
                    </dt>
                    <dd className="space-y-1">
                      {villa.bedSetup.map((bed) => (
                        <p key={bed} className="text-sm font-light text-charcoal">
                          {bed}
                        </p>
                      ))}
                    </dd>
                  </div>
                  <div className="border-t border-outline pt-5">
                    <dt className="mb-1 font-sans text-[10px] uppercase tracking-widest text-muted">
                      {labels.occupancy}
                    </dt>
                    <dd className="text-sm font-light leading-relaxed text-charcoal">
                      {villa.occupancy}
                    </dd>
                  </div>
                  <div className="border-t border-outline pt-5">
                    <dt className="mb-1 font-sans text-[10px] uppercase tracking-widest text-muted">
                      {labels.bathroom}
                    </dt>
                    <dd className="text-sm font-light text-charcoal">{villa.bathroom}</dd>
                  </div>
                </dl>
                <Link href={bookHref} className="btn-primary mt-8 w-full text-center">
                  {labels.bookThisVilla}
                </Link>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <span className="section-label">{labels.gallery}</span>
            <h2 className="mb-3 font-serif text-3xl font-light text-balance md:text-4xl">
              {villa.name}
            </h2>
            <p className="mb-10 max-w-2xl text-sm font-light leading-relaxed text-on-surface-muted">
              {labels.galleryCopy}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryRest.map((src, i) => (
              <Reveal key={src} delay={60 + i * 40}>
                <figure className="overflow-hidden rounded-2xl border border-outline/60 bg-sand shadow-soft">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={src}
                      alt={`${villa.name} private pool villa interior and exterior photo ${i + 2}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <span className="section-label">{labels.amenities}</span>
            <h2 className="mb-8 font-serif text-3xl font-light md:text-4xl">
              {labels.amenities}
            </h2>
          </Reveal>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {villa.amenities.map((item, i) => (
              <Reveal key={item} delay={i * 30}>
                <li className="flex items-start gap-3 rounded-xl border border-outline/50 bg-surface px-4 py-3.5">
                  <IconCheck className="mt-0.5 shrink-0 text-secondary" />
                  <span className="text-sm font-light leading-relaxed text-on-surface-muted">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href={bookHref} className="btn-primary min-w-[200px] text-center">
                {labels.bookThisVilla}
              </Link>
              <Link
                href="/villas"
                className="inline-flex min-w-[200px] items-center justify-center rounded-lg border border-outline px-8 py-3.5 font-sans text-xs uppercase tracking-widest text-charcoal transition-colors hover:border-secondary hover:text-secondary"
              >
                {labels.viewAllVillas}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
