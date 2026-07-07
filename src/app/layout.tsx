import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { site } from "@/lib/site";
import { HERO_IMAGE } from "@/lib/images";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#faf9f5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Bhumi Lovina",
    "Bhumi Lovina Residence Villa",
    "luxury villa Lovina",
    "north bali villa",
    "lovina beach accommodation",
    "private pool villa bali",
    "boutique resort lovina",
    "best villa in lovina bali",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [HERO_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": `${site.url}#hotel`,
      name: site.name,
      description: site.description,
      url: site.url,
      image: `${site.url}${HERO_IMAGE}`,
      telephone: `+${site.contact.whatsapp}`,
      email: site.contact.email,
      priceRange: "$$$",
      starRating: { "@type": "Rating", ratingValue: "5" },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.location.fullAddress,
        addressLocality: site.location.locality,
        addressRegion: site.location.region,
        addressCountry: site.location.country,
        postalCode: site.location.postalCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.location.lat,
        longitude: site.location.lng,
      },
      amenityFeature: [
        "Private pool",
        "Daily housekeeping",
        "Private WiFi",
        "Kitchen facilities",
        "Air conditioning",
        "Concierge",
      ].map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
    },
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}#business`,
      name: site.name,
      url: site.url,
      image: `${site.url}${HERO_IMAGE}`,
      telephone: `+${site.contact.whatsapp}`,
      email: site.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.location.fullAddress,
        addressLocality: site.location.locality,
        addressRegion: site.location.region,
        addressCountry: site.location.country,
        postalCode: site.location.postalCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.location.lat,
        longitude: site.location.lng,
      },
      sameAs: [
        `https://instagram.com/${site.contact.instagram}`,
        site.ota.traveloka,
        site.ota.booking,
        site.ota.tiket,
      ],
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${notoSerif.variable} scroll-smooth`}
    >
      <body className="bg-background text-on-surface">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main>{children}</main>
          <Footer />
          <MobileBottomNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
