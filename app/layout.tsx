import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { salonConfig } from "../data/config";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const displayFont = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Antalya Güzellik Salonu & Kuaför - Popüler VIP",
    template: "%s | Popüler Kuaför & Güzellik Salonu",
  },
  description:
    "Antalya Kepez'de 35 yıllık uzmanlıkla lazer epilasyon, mikro saç kaynak, kaş tasarımı ve profesyonel kuaför hizmetleri. Popüler Güzellik Salonu ile tanışın.",
  applicationName: "Popüler Kuaför & Güzellik Salonu",
  keywords: [
    "Antalya kuaför",
    "Antalya güzellik salonu",
    "saç kaynak merkezi",
    "lazer epilasyon Antalya",
    "Kepez kuaför",
    "kaş tasarımı Antalya",
    "mikro kaynak Antalya",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: salonConfig.brand.name,
    title: "Antalya Güzellik Salonu & Kuaför - Popüler VIP",
    description: "35 yıllık uzmanlıkla Antalya Kepez'de lazer epilasyon, saç kaynak ve profesyonel kuaför hizmetleri.",
    images: [
      {
        url: salonConfig.hero.image.src,
        width: 1800,
        height: 1200,
        alt: "Antalya Popüler Güzellik Salonu ve Kuaför Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antalya Güzellik Salonu & Kuaför - Popüler VIP",
    description: "35 yıllık uzmanlıkla Antalya Kepez'de lazer epilasyon, saç kaynak ve profesyonel kuaför hizmetleri.",
    images: [salonConfig.hero.image.src],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030303",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased selection:bg-primary/30 selection:text-white bg-background text-text-main font-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": salonConfig.brand.name,
              "image": salonConfig.hero.image.src,
              "@id": siteUrl,
              "url": siteUrl,
              "telephone": salonConfig.contact.phone,
              "priceRange": "₺₺",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": salonConfig.contact.address.split(",")[0],
                "addressLocality": "Kepez",
                "addressRegion": "Antalya",
                "postalCode": "07090",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "36.9407186",
                "longitude": "30.6757573"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ],
              "sameAs": [
                salonConfig.contact.instagramHref
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
