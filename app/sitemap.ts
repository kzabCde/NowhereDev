import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.siteUrl) return [];

  return [
    {
      url: siteConfig.siteUrl.replace(/\/$/, ""),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
