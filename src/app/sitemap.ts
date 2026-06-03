import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amityonline.learnlith.in";

  // Use the audit date as lastmod for existing pages.
  // Update this when content changes.
  const homepageLastMod = new Date("2026-06-03");

  return [
    // ── Homepage ────────────────────────────────────────────────
    {
      url: `${baseUrl}/`,
      lastModified: homepageLastMod,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}
