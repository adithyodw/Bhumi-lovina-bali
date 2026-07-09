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
  highlights: string;
  includedTitle: string;
  includedCopy: string;
  bookThisVilla: string;
  viewAllVillas: string;
  sqm: string;
  photoCount: string;
};

type Props = {
  villa: Villa;
  labels: Labels;
  stayBenefits: string[];
  bookHref?: string;
};

export default function VillaDetailView({
  villa,
  labels,
  stayBenefits,
  bookHref = "/#book",
}: Props) {
  const photoLabel = labels.photoCount.replace("{count}", String(villa.gallery.length));

  return (
    <article>
      <header className="relative min-h-[58vh] overflow-hidden bg-primary-dark md:min-h-[68vh]">
        <Image
          src={villa.heroImage}
          alt={`${villa.name} — luxury private pool villa at Bhumi Lovina North Bali`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-[1200px] flex-col justify-end px-6 pb-12 pt-28 md:min-h-[68vh] md:pb-16 md:pt-32">
          <Link
            href="/villas"
            className="mb-6 inline-flex w-fit items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden>←</span>
            {labels.backToVillas}
          </Link>
          <span className="mb-3 block font-sans text-[11px] uppercase tracking-[0.35em] text-white/80">
            {villa.categoryLabel} · {villa.sizeSqm} m²
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
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <Reveal>
              <p className="mb-6 text-base font-light leading-relaxed text-on-surface-muted text-pretty md:text-lg">
                {villa.intro}
              </p>
              {villa.description.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mb-5 text-base font-light leading-relaxed text-on-surface-muted text-pretty"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-10 border-t border-outline pt-8">
                <h2 className="mb-5 font-serif text-2xl font-light text-charcoal">
                  {labels.highlights}
                </h2>
                <ul className="space-y-3">
                  {villa.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" aria-hidden />
                      <span className="text-sm font-light leading-relaxed text-on-surface-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <aside className="sticky top-28 rounded-2xl border border-outline bg-surface p-6 shadow-soft md:p-8">
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
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <span className="section-label">{labels.gallery}</span>
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-2 font-serif text-3xl font-light text-balance md:text-4xl">
                  {villa.name}
                </h2>
                <p className="max-w-2xl text-sm font-light leading-relaxed text-on-surface-muted">
                  {labels.galleryCopy}
                </p>
              </div>
              <p className="font-sans text-[11px] uppercase tracking-widest text-muted">
                {photoLabel}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {villa.gallery.map((src, i) => (
              <Reveal key={src} delay={40 + (i % 6) * 35}>
                <figure
                  className={`group overflow-hidden rounded-2xl border border-outline/60 bg-sand shadow-soft ${
                    i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                    <Image
                      src={src}
                      alt={`${villa.name} — photo ${i + 1} of ${villa.gallery.length}`}
                      fill
                      priority={i < 3}
                      sizes={
                        i === 0
                          ? "(max-width: 768px) 100vw, 66vw"
                          : "(max-width: 768px) 100vw, 33vw"
                      }
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="section-label">{labels.amenities}</span>
              <h2 className="mb-3 font-serif text-3xl font-light md:text-4xl">
                {labels.amenities}
              </h2>
              <p className="mb-8 text-sm font-light leading-relaxed text-on-surface-muted">
                {villa.typeNote}
              </p>
              <ul className="grid grid-cols-1 gap-3">
                {villa.amenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-outline/50 bg-surface px-4 py-3.5"
                  >
                    <IconCheck className="mt-0.5 shrink-0 text-secondary" />
                    <span className="text-sm font-light leading-relaxed text-on-surface-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <span className="section-label">{labels.includedTitle}</span>
              <h2 className="mb-3 font-serif text-3xl font-light md:text-4xl">
                {labels.includedTitle}
              </h2>
              <p className="mb-8 text-sm font-light leading-relaxed text-on-surface-muted">
                {labels.includedCopy}
              </p>
              <ul className="grid grid-cols-1 gap-3">
                {stayBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-outline/50 bg-surface-warm px-4 py-3.5"
                  >
                    <IconCheck className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm font-light leading-relaxed text-on-surface-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-14 flex flex-col items-center gap-4 border-t border-outline pt-12 sm:flex-row sm:justify-center">
              <Link href={bookHref} className="btn-primary min-w-[220px] text-center">
                {labels.bookThisVilla}
              </Link>
              <Link
                href="/villas"
                className="inline-flex min-w-[220px] items-center justify-center rounded-lg border border-outline px-8 py-3.5 font-sans text-xs uppercase tracking-widest text-charcoal transition-colors hover:border-secondary hover:text-secondary"
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
