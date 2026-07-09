import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { villaBySlug, villaLocale, villas } from "@/data/villas";
import { site } from "@/lib/site";
import VillaDetailView from "@/components/VillaDetailView";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return villas.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const villa = villaBySlug(slug);
  if (!villa) return {};

  const v = villaLocale(villa, locale);
  const title = `${v.name} | ${site.shortName}`;
  const description = `${v.intro} ${v.tagline}`;

  return {
    title,
    description,
    alternates: { canonical: `${site.url}/villas/${slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/villas/${slug}`,
      images: [{ url: v.heroImage, alt: v.name }],
    },
  };
}

export default async function VillaDetailPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const t = await getTranslations("villaPage");

  const raw = villaBySlug(slug);
  if (!raw) notFound();

  const villa = villaLocale(raw, locale);

  return (
    <VillaDetailView
      villa={villa}
      labels={{
        backToVillas: t("backToVillas"),
        bedConfiguration: t("bedConfiguration"),
        occupancy: t("occupancy"),
        bathroom: t("bathroom"),
        size: t("size"),
        storeys: t("storeys"),
        bedrooms: t("bedrooms"),
        amenities: t("amenities"),
        gallery: t("gallery"),
        galleryCopy: t("galleryCopy"),
        bookThisVilla: t("bookThisVilla"),
        viewAllVillas: t("viewAllVillas"),
        sqm: t("sqm"),
      }}
    />
  );
}
