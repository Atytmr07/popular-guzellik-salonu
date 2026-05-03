import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const sections = [
  { id: "services",        priority: 0.9, freq: "monthly" },
  { id: "all-services",   priority: 0.9, freq: "monthly" },
  { id: "kas-dizayn",     priority: 0.8, freq: "monthly" },
  { id: "lazer-epilasyon",priority: 0.8, freq: "monthly" },
  { id: "igneli-epilasyon",priority: 0.8, freq: "monthly" },
  { id: "perma-sac",      priority: 0.8, freq: "monthly" },
  { id: "sac-kaynak",     priority: 0.8, freq: "monthly" },
  { id: "sac-kesim",      priority: 0.7, freq: "monthly" },
  { id: "sac-renklendirme",priority: 0.7, freq: "monthly" },
  { id: "kalici-makyaj",  priority: 0.7, freq: "monthly" },
  { id: "cilt-bakimi",    priority: 0.7, freq: "monthly" },
  { id: "manikur",        priority: 0.6, freq: "monthly" },
  { id: "pedikur",        priority: 0.6, freq: "monthly" },
  { id: "gallery",        priority: 0.6, freq: "monthly" },
  { id: "ekibimiz",       priority: 0.5, freq: "yearly"  },
  { id: "contact",        priority: 0.8, freq: "yearly"  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sections.map((s) => ({
      url: `${siteUrl}/#${s.id}`,
      lastModified: new Date(),
      changeFrequency: s.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: s.priority,
    })),
  ];
}
