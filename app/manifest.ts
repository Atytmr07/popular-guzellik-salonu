import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Popüler Kuaför & Güzellik Salonu",
    short_name: "Popüler",
    description:
      "Antalya Kepez'de 35 yıllık uzmanlıkla lazer epilasyon, mikro saç kaynak ve kuaför hizmetleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#111111",
    lang: "tr-TR",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
