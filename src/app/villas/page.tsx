import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import { villas, villasByCategory, villaLocale } from "@/data/villas";
import Reveal from "@/components/Reveal";
import { VILLA_MAIN_GALLERY } from "@/lib/villa-images";

export const metadata: Metadata = {
  title: "Our Villas — Eight Private Villas in Lovina, North Bali",
  description:
    "Five Deluxe Villas, two Suite Villas, and a signature Executive Residence, each with a private pool. The best villa in Lovina Bali.",
  alternates: { canonical: "/villas" },
};

export default async function VillasPage() {
  const t = await getTranslations("villas");
  const locale = await getLocale();

  const sections = [
    {
      key: "deluxe" as const,
      label: t("deluxeLabel"),
      intro: t("deluxeIntro"),
    },
    {
      key: "suite" as const,
      label: t("suiteLabel"),
      intro: t("suiteIntro"),
    },
    {
      key: "executive" as const,
      label: t("execLabel"),
      intro: t("execIntro"),
    },
  ];

  return (
    <>
      {/* Hero */}
      <header className="relative h-[70svh] md:h-[85svh] w-full overflow-hidden flex items-end">
        <Image
          src={villas[0].heroImage}
          alt="Bhumi Lovina villa collection — a private plunge pool opening to the Bali Sea"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-primary/20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-on-primary/80 mb-6 block">
            {t("badge")}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-on-primary max-w-3xl leading-[1.05] text-balance">
            {t("headline")}
          </h1>
        </div>
      </header>

      {/* Main villa gallery */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-4 block">
            {t("mainVillaLabel")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-balance">
            {t("mainVillaHeadline")}
          </h2>
          <p className="mt-5 text-on-surface-variant text-lg font-light leading-relaxed text-pretty">
            {t("mainVillaCopy")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {VILLA_MAIN_GALLERY.map((src, i) => {
            const span =
              i === 0
                ? "md:col-span-4 aspect-[16/10]"
                : i === 1
                  ? "md:col-span-2 aspect-[4/5]"
                  : i === 2 || i === 3
                    ? "md:col-span-3 aspect-[4/3]"
                    : "md:col-span-2 aspect-[4/5]";

            return (
              <Reveal
                key={src}
                delay={i * 70}
                className={`relative overflow-hidden rounded-xl ${span}`}
              >
                <Image
                  src={src}
                  alt={`Main villa photograph ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Villa sections */}
      {sections.map((section) => {
        const list = villasByCategory(section.key);
        return (
          <section
            key={section.key}
            className="py-20 md:py-28 px-6 md:px-12 max-w-[1440px] mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mb-16 border-b border-outline/10 pb-10">
              <div className="max-w-2xl">
                <span className="font-sans tracking-[0.4em] uppercase text-xs text-secondary mb-4 block">
                  {section.key === "executive" ? t("signature") : t("collection")}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-balance">
                  {section.label}
                </h2>
                <p className="mt-5 text-on-surface-variant text-lg font-light leading-relaxed text-pretty">
                  {section.intro}
                </p>
              </div>
              <span className="font-sans tracking-widest uppercase text-xs text-secondary">
                {t("villaCount", { count: list.length })}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {list.map((v, i) => {
                const lv = villaLocale(v, locale);
                return (
                  <Reveal key={v.slug} delay={i * 80}>
                    <Link
                      href={`/villas/${v.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6">
                        <Image
                          src={v.heroImage}
                          alt={`${v.name} — ${lv.tagline}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-2xl font-light mb-1">
                            {v.name}
                          </h3>
                          <p className="text-sm text-on-surface-variant font-light">
                            {lv.tagline}
                          </p>
                        </div>
                        <span className="font-sans tracking-widest uppercase text-[10px] text-secondary whitespace-nowrap pt-2">
                          {v.bedrooms} BR · {v.sizeSqm} m²
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
