import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { villaLocale, villasByCategory } from "@/data/villas";
import { site } from "@/lib/site";
import VillaCard from "@/components/VillaCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Our Villas | ${site.shortName}`,
  description:
    "Explore all eight private pool villas at Bhumi Lovina — Suite, Executive, and Deluxe residences in Lovina, North Bali.",
  alternates: { canonical: `${site.url}/villas` },
};

const tierOrder = [
  { key: "suite" as const, labelKey: "tierSuiteHeading" as const },
  { key: "executive" as const, labelKey: "tierExecutiveHeading" as const },
  { key: "deluxe" as const, labelKey: "tierDeluxeHeading" as const },
];

export default async function VillasCatalogPage() {
  const locale = await getLocale();
  const t = await getTranslations("villaPage");

  return (
    <>
      <section className="section-padding bg-cream pt-28 md:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="section-label">{t("catalogLabel")}</span>
            <h1 className="mb-6 font-serif text-3xl font-light leading-[1.12] text-balance md:text-4xl lg:text-5xl">
              {t("catalogHeadline")}
            </h1>
            <p className="mb-14 max-w-3xl text-base font-light leading-relaxed text-on-surface-muted text-pretty md:text-lg">
              {t("catalogCopy")}
            </p>
          </Reveal>

          {tierOrder.map((tier, tierIndex) => {
            const tierVillas = villasByCategory(tier.key).map((v) =>
              villaLocale(v, locale),
            );

            return (
              <div key={tier.key} className={tierIndex > 0 ? "mt-16 md:mt-20" : ""}>
                <Reveal delay={tierIndex * 40}>
                  <h2 className="mb-8 font-serif text-2xl font-light text-charcoal md:text-3xl">
                    {t(tier.labelKey)}
                  </h2>
                </Reveal>
                <div
                  className={`grid grid-cols-1 gap-5 ${
                    tierVillas.length >= 3
                      ? "md:grid-cols-2 lg:grid-cols-3"
                      : tierVillas.length === 2
                        ? "md:grid-cols-2"
                        : "max-w-xl"
                  }`}
                >
                  {tierVillas.map((villa, i) => (
                    <Reveal key={villa.slug} delay={80 + i * 60}>
                      <VillaCard
                        villa={villa}
                        size={tierVillas.length === 1 ? "wide" : "tall"}
                        priority={tierIndex === 0 && i === 0}
                        discoverLabel={t("discover")}
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
