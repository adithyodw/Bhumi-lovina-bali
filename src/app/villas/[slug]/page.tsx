import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import { villas, villaBySlug, villaLocale } from "@/data/villas";
import { site, whatsappLink } from "@/lib/site";
import OTAButtons from "@/components/OTAButtons";
import Reveal from "@/components/Reveal";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return villas.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const v = villaBySlug(slug);
  if (!v) return {};
  const title = `${v.name} — ${v.categoryLabel}, Lovina North Bali`;
  return {
    title,
    description: v.intro,
    alternates: { canonical: `/villas/${v.slug}` },
    openGraph: {
      title,
      description: v.intro,
      images: [{ url: v.heroImage }],
    },
  };
}

export default async function VillaDetailPage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const villa = villaBySlug(slug);
  if (!villa) notFound();

  const locale = await getLocale();
  const t = await getTranslations("villa");
  const lv = villaLocale(villa, locale);

  const others = villas.filter((v) => v.slug !== villa.slug).slice(0, 3);
  const stayDetails = [
    { label: t("bedrooms"), value: `${villa.bedrooms}` },
    { label: t("bathroom"), value: lv.bathroom },
    { label: t("size"), value: `${villa.sizeSqm} m²` },
    { label: t("occupancy"), value: lv.occupancy },
    { label: t("checkIn"), value: t("checkInValue") },
    { label: t("checkOut"), value: t("checkOutValue") },
    { label: t("extraGuestPolicy"), value: lv.extraGuestPolicy },
    { label: t("extraBeds"), value: lv.extraBeds },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: `${villa.name} — Bhumi Lovina Residence`,
    description: villa.intro,
    url: `${site.url}/villas/${villa.slug}`,
    image: villa.heroImage.startsWith("http")
      ? villa.heroImage
      : `${site.url}${villa.heroImage}`,
    starRating: { "@type": "Rating", ratingValue: "5" },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.location.fullAddress,
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
      postalCode: site.location.postalCode,
    },
    numberOfRooms: villa.bedrooms,
    amenityFeature: villa.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
  };

  const prefill = t("bookPrefill", { name: villa.name });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <header className="relative h-[80svh] md:h-[95svh] w-full overflow-hidden flex items-end">
        <Image
          src={villa.heroImage}
          alt={`${villa.name} — ${lv.tagline}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-primary/20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-on-primary/80 mb-6 block">
            {lv.categoryLabel}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-on-primary max-w-3xl leading-[1.05] text-balance">
            {villa.name}
          </h1>
          <p className="mt-6 text-on-primary/90 text-lg md:text-xl font-light max-w-2xl text-pretty">
            {lv.tagline}
          </p>
        </div>
      </header>

      {/* Overview */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
              {t("theVilla")}
            </span>
            {lv.description.map((p, i) => (
              <p
                key={i}
                className="text-on-surface text-lg md:text-xl font-light leading-[1.75] mb-6 text-pretty"
              >
                {p}
              </p>
            ))}
          </div>
          <aside className="lg:col-span-4">
            <div className="bg-surface-container-low rounded-xl p-8 shadow-botanical">
              <span className="font-sans tracking-[0.3em] uppercase text-[10px] text-secondary mb-6 block">
                {t("details")}
              </span>
              <dl className="space-y-5">
                {stayDetails.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-outline/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    <dt className="font-sans tracking-widest uppercase text-[10px] text-secondary mb-2">
                      {item.label}
                    </dt>
                    <dd className="font-light text-on-surface leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={whatsappLink(prefill)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full text-center bg-primary text-on-primary px-8 py-4 rounded-md font-sans tracking-widest uppercase text-xs hover:bg-primary-container transition-all"
              >
                {t("bookBtn", { name: villa.name })}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 md:pb-28 px-6 md:px-12 max-w-[1600px] mx-auto">
        <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
          {t("gallery")}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-12 text-balance">
          {t("inside", { name: villa.name })}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {villa.gallery.map((src, i) => {
            const span =
              i % 5 === 0
                ? "md:col-span-4 aspect-[16/10]"
                : i % 5 === 1
                  ? "md:col-span-2 aspect-[3/4]"
                  : i % 5 === 2
                    ? "md:col-span-3 aspect-[4/3]"
                    : i % 5 === 3
                      ? "md:col-span-3 aspect-[4/3]"
                      : "md:col-span-6 aspect-[21/9]";
            return (
              <Reveal
                key={src}
                delay={i * 60}
                className={`relative overflow-hidden rounded-xl ${span}`}
              >
                <Image
                  src={src}
                  alt={`${villa.name} interior photograph ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-surface-container-low py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
            {t("amenities")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-12 text-balance">
            {t("amenitiesHeadline")}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
            {lv.amenities.map((a) => (
              <li
                key={a}
                className="font-light text-on-surface pb-4 border-b border-outline/10"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Villa details */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1200px] mx-auto">
        <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
          {t("details")}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-12 text-balance">
          {t("detailsHeadline")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-outline/10 bg-surface-container-low p-8">
            <h3 className="font-serif text-2xl font-light mb-6">
              {t("bedSetup")}
            </h3>
            <ul className="space-y-4">
              {lv.bedSetup.map((item) => (
                <li key={item} className="font-light text-on-surface-variant">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-outline/10 bg-surface-container-low p-8">
            <h3 className="font-serif text-2xl font-light mb-6">
              {t("kitchenFacilities")}
            </h3>
            <ul className="space-y-4">
              {lv.kitchenFacilities.map((item) => (
                <li key={item} className="font-light text-on-surface-variant">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-outline/10 bg-surface-container-low p-8">
            <h3 className="font-serif text-2xl font-light mb-6">
              {t("stayDetails")}
            </h3>
            <p className="font-light text-on-surface-variant leading-relaxed mb-6">
              {lv.typeNote}
            </p>
            <div className="space-y-4">
              <div>
                <div className="font-sans tracking-widest uppercase text-[10px] text-secondary mb-2">
                  {t("category")}
                </div>
                <p className="font-light text-on-surface-variant">
                  {lv.categoryLabel}
                </p>
              </div>
              <div>
                <div className="font-sans tracking-widest uppercase text-[10px] text-secondary mb-2">
                  {t("guests")}
                </div>
                <p className="font-light text-on-surface-variant">
                  {villa.maxGuests}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1100px] mx-auto text-center">
        <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
          {t("reserve")}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 leading-tight text-balance">
          {t("reserveHeadline", { name: villa.name })}
        </h2>
        <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-12 text-pretty">
          {t("reserveCopy")}
        </p>
        <div className="flex flex-col items-center gap-8">
          <a
            href={whatsappLink(prefill)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-12 py-4 rounded-md font-sans tracking-widest uppercase text-xs hover:bg-primary-container transition-all"
          >
            {t("messageWhatsApp")}
          </a>
          <div className="w-full">
            <OTAButtons />
          </div>
        </div>
      </section>

      {/* Other villas */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
          {t("alsoLabel")}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-12 text-balance">
          {t("alsoHeadline")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {others.map((v) => {
            const lother = villaLocale(v, locale);
            return (
              <Link
                key={v.slug}
                href={`/villas/${v.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6">
                  <Image
                    src={v.heroImage}
                    alt={`${v.name} — ${lother.tagline}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="font-serif text-2xl font-light mb-1">{v.name}</h3>
                <p className="text-sm text-on-surface-variant font-light">
                  {lother.tagline}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
