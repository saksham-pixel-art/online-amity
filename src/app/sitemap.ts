import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amityonline.learnlith.in";

  // Use the audit date as lastmod for existing pages.
  // Update this when content changes.
  const homepageLastMod = new Date("2026-06-03");
  const trustPagesLastMod = new Date("2026-06-03");

  return [
    // ── Homepage ────────────────────────────────────────────────
    {
      url: `${baseUrl}/`,
      lastModified: homepageLastMod,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // ── Trust / Legal Pages ─────────────────────────────────────
    {
      url: `${baseUrl}/about`,
      lastModified: trustPagesLastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: trustPagesLastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: trustPagesLastMod,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: trustPagesLastMod,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: trustPagesLastMod,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
