import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";
import { Manrope, Noto_Serif } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { site } from "@/lib/site";
import { HERO_IMAGE } from "@/lib/images";
import {
  jsonLdGraph,
  OG_DESCRIPTION,
  OG_TITLE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_TITLE,
} from "@/lib/seo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

/** Route server rendering to edge regions closest to Indonesia and major travel markets. */
export const preferredRegion = ["sin1", "hnd1", "syd1", "iad1", "fra1", "sfo1"];

export const viewport: Viewport = {
  themeColor: "#faf9f5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: SEO_TITLE,
    template: `%s | ${site.name}`,
  },
  description: SEO_DESCRIPTION,
  applicationName: site.name,
  keywords: SEO_KEYWORDS,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Bhumi Lovina luxury 2-bedroom private pool villa estate in Lovina North Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  preload(HERO_IMAGE, { as: "image", fetchPriority: "high" });

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${notoSerif.variable}`}
    >
      <body className="bg-background text-on-surface">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
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
