import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";
import { HERO_BOOK, VILLA_KAYU } from "@/lib/images";

export const metadata: Metadata = {
  title: "Villa Information — Bhumi Lovina Residence",
  description:
    "Everything you need to know before your stay at Bhumi Lovina — villa facilities, check-in times, guest rules, and cancellation policy.",
  alternates: { canonical: "/info" },
};

export default async function InfoPage() {
  const t = await getTranslations("info");
  const tv = await getTranslations("villas");

  const facilities = [
    t("facilityPool"),
    t("facilityWifi"),
    t("facilityKitchen"),
    t("facilityFridge"),
    t("facilityDining"),
    t("facilityTv"),
    t("facilityHeater"),
    t("facilityAc"),
    t("facilityBalcony"),
    t("facilityBathroom"),
  ];

  const villaTypes = [
    {
      name: tv("deluxeLabel"),
      count: t("deluxeCount"),
      note: t("deluxeNote"),
      max: t("deluxeMax"),
      strict: false,
    },
    {
      name: tv("suiteLabel"),
      count: t("suiteCount"),
      note: t("suiteNote"),
      max: t("suiteMax"),
      strict: false,
    },
    {
      name: tv("execLabel"),
      count: t("execCount"),
      note: t("execNote"),
      max: t("execMax"),
      strict: true,
    },
  ];

  const rules = [
    { heading: t("lateCheckout"), body: t("lateCheckoutBody") },
    { heading: t("damages"), body: t("damagesBody") },
    { heading: t("lostItems"), body: t("lostItemsBody") },
    { heading: t("villaUpgrades"), body: t("villaUpgradesBody") },
    { heading: t("noisePolicy"), body: t("noisePolicyBody") },
  ];

  return (
    <>
      {/* Hero */}
      <header className="relative h-[65svh] md:h-[80svh] w-full overflow-hidden flex items-end">
        <Image
          src={HERO_BOOK}
          alt="Tranquil private pool at Bhumi Lovina Residence, North Bali"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-primary/20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-on-primary/70 mb-6 block">
            {t("badge")}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-on-primary max-w-3xl leading-[1.05] text-balance">
            {t("headline")}
          </h1>
          <p className="mt-6 text-on-primary/80 text-base md:text-lg font-light max-w-xl text-pretty">
            {t("heroCopy")}
          </p>
        </div>
      </header>

      {/* Overview Stats */}
      <Reveal>
        <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "8", label: t("villaUnits") },
              { value: "2", label: t("bedroomsPerVilla") },
              { value: "14:00", label: t("checkin") },
              { value: "11:00", label: t("checkout") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-light text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-sans tracking-[0.2em] uppercase text-[10px] text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* About + Image */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src={VILLA_KAYU}
              alt="Private villa bedroom at Bhumi Lovina Residence"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <Reveal>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
              {t("aboutLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-8 text-balance">
              {t("aboutHeadline")}
            </h2>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-10 text-pretty">
              {t("aboutCopy")}
            </p>
            <dl className="space-y-4 border-t border-outline/10 pt-8">
              {[
                [t("bedroomsTerm"), t("bedroomsDetail")],
                [t("occupancyTerm"), t("occupancyDetail")],
                [t("extraAdultTerm"), t("extraAdultDetail")],
                [t("extraChildTerm"), t("extraChildDetail")],
                [t("bathroomTerm"), t("bathroomDetail")],
              ].map(([term, detail]) => (
                <div key={term} className="flex justify-between gap-8 text-sm">
                  <dt className="text-on-surface-variant font-light">{term}</dt>
                  <dd className="text-on-surface font-light text-right">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-primary text-on-primary py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary-fixed-dim mb-6 block">
              {t("facilitiesLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-4 text-balance">
              {t("facilitiesHeadline")}
            </h2>
            <p className="text-on-primary/70 font-light mb-14 max-w-xl text-pretty">
              {t("facilitiesCopy")}
            </p>
          </Reveal>

          <Reveal>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 mb-16">
              {facilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-light text-on-primary/90">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary-fixed-dim shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Villa type cards */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {villaTypes.map((type) => (
                <div
                  key={type.name}
                  className={`rounded-xl p-7 border ${
                    type.strict
                      ? "border-secondary-fixed-dim/40 bg-on-primary/5"
                      : "border-on-primary/10 bg-on-primary/5"
                  }`}
                >
                  <span className="font-sans tracking-[0.3em] uppercase text-[10px] text-secondary-fixed-dim mb-3 block">
                    {type.count}
                  </span>
                  <h3 className="font-serif text-2xl font-light mb-3">
                    {type.name}
                  </h3>
                  <p className="text-sm text-on-primary/70 font-light mb-4">
                    {type.note}
                  </p>
                  <div className="border-t border-on-primary/10 pt-4">
                    <span className="font-sans tracking-[0.2em] uppercase text-[10px] text-secondary-fixed-dim block mb-1">
                      {t("maxOccupancy")}
                    </span>
                    <p className={`text-sm font-light ${type.strict ? "text-tertiary-fixed-dim" : "text-on-primary/80"}`}>
                      {type.max}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Guest Rules */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1000px] mx-auto">
        <Reveal>
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
            {t("rulesLabel")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-12 text-balance">
            {t("rulesHeadline")}
          </h2>
        </Reveal>

        <div className="divide-y divide-outline/10 border-t border-outline/10">
          {rules.map((rule) => (
            <Reveal key={rule.heading}>
              <div className="py-7 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
                <h3 className="font-serif text-xl font-light text-primary">
                  {rule.heading}
                </h3>
                <p className="md:col-span-2 text-on-surface-variant font-light leading-relaxed text-pretty">
                  {rule.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Terms & Cancellation */}
      <section className="bg-surface-container-low py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
              {t("termsLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-10 text-balance">
              {t("termsHeadline")}
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-xl p-8 border border-outline/10">
                <div className="font-sans tracking-[0.3em] uppercase text-[10px] text-secondary mb-3">
                  {t("reschedulingLabel")}
                </div>
                <p className="font-serif text-xl font-light mb-3">
                  {t("reschedulingValue")}
                </p>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  {t("reschedulingBody")}
                </p>
              </div>

              <div className="bg-surface rounded-xl p-8 border border-outline/10">
                <div className="font-sans tracking-[0.3em] uppercase text-[10px] text-secondary mb-3">
                  {t("cancellationLabel")}
                </div>
                <p className="font-serif text-xl font-light mb-3">
                  {t("cancellationValue")}
                </p>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  {t("cancellationBody")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[900px] mx-auto text-center">
        <Reveal>
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-6 block">
            {t("ctaLabel")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 text-balance">
            {t("ctaHeadline")}
          </h2>
          <p className="text-on-surface-variant text-lg font-light mb-10 max-w-lg mx-auto text-pretty">
            {t("ctaCopy")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink(t("ctaPrefill"))}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-10 py-4 rounded-md font-sans tracking-widest uppercase text-xs hover:bg-primary-container transition-all"
            >
              {t("ctaWhatsApp")}
            </a>
            <Link
              href="/book"
              className="border border-primary/20 text-primary px-10 py-4 rounded-md font-sans tracking-widest uppercase text-xs hover:bg-surface-container transition-all"
            >
              {t("ctaBook")}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
