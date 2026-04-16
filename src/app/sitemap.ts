import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { villas } from "@/data/villas";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/villas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/experiences`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const villaRoutes: MetadataRoute.Sitemap = villas.map((v) => ({
    url: `${site.url}/villas/${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...base, ...villaRoutes];
}
