import { getLocale, getTranslations } from "next-intl/server";
import { villaLocale, villasByCategory } from "@/data/villas";
import VillaCard from "@/components/VillaCard";
import Reveal from "./Reveal";

const showcaseTiers = [
  { key: "suite" as const, labelKey: "tierSuiteHeading" as const },
  { key: "executive" as const, labelKey: "tierExecutiveHeading" as const },
  { key: "deluxe" as const, labelKey: "tierDeluxeHeading" as const },
] as const;

export default async function VillaShowcase() {
  const locale = await getLocale();
  const t = await getTranslations("villaPage");
  const th = await getTranslations("home");

  return (
    <div className="mt-20 border-t border-outline pt-16">
      <Reveal>
        <span className="section-label">{th("collectionLabel")}</span>
        <h2 className="mb-4 font-serif text-2xl font-light text-balance md:text-3xl lg:text-4xl">
          {th("collectionHeadline")}
        </h2>
        <p className="mb-12 max-w-2xl text-sm font-light leading-relaxed text-on-surface-muted text-pretty md:text-base">
          {th("collectionCopy")}
        </p>
      </Reveal>

      {showcaseTiers.map((tier, tierIndex) => {
        const tierVillas = villasByCategory(tier.key).map((v) => villaLocale(v, locale));

        return (
          <div key={tier.key} className={tierIndex > 0 ? "mt-12" : ""}>
            <Reveal delay={tierIndex * 40}>
              <h3 className="mb-6 font-serif text-xl font-light text-charcoal md:text-2xl">
                {t(tier.labelKey)}
              </h3>
            </Reveal>
            <div
              className={`grid grid-cols-1 gap-5 ${
                tierVillas.length >= 3
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : tierVillas.length === 2
                    ? "sm:grid-cols-2"
                    : "max-w-md"
              }`}
            >
              {tierVillas.map((villa, i) => (
                <Reveal key={villa.slug} delay={60 + i * 50}>
                  <VillaCard
                    villa={villa}
                    size="tall"
                    discoverLabel={t("discover")}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
