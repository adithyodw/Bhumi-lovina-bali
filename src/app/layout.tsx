import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { site } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
    "luxury villa Lovina",
    "north bali villa",
    "lovina beach accommodation",
    "lovina dolphin tour",
    "dolphin watching bali",
    "best villa in lovina bali",
    "waterfalls in north bali",
    "gitgit waterfall",
    "sekumpul waterfall",
    "snorkeling lovina",
    "things to do in north bali",
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
        url: "/images/og/bhumi-lovina-og.jpg",
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
    images: ["/images/og/bhumi-lovina-og.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      image: `${site.url}/images/og/bhumi-lovina-og.jpg`,
      telephone: `+${site.contact.whatsapp}`,
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
        "Breakfast included",
        "Airport transfer",
        "Concierge",
        "Dolphin tour",
        "Waterfall tours",
        "Snorkeling",
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
      image: `${site.url}/images/og/bhumi-lovina-og.jpg`,
      telephone: `+${site.contact.whatsapp}`,
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
      sameAs: [`https://instagram.com/${site.contact.instagram}`],
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
      <body className="bg-background text-on-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileBottomNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
