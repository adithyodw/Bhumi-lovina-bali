import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { villas } from "@/data/villas";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/villas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...villas.map((villa) => ({
      url: `${site.url}/villas/${villa.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
