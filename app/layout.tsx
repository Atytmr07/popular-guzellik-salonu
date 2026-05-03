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
    default: "Güzellik Salonu Kepez Antalya | Kuaför | Lazer Epilasyon – Popüler",
    template: "%s | Popüler Kuaför & Güzellik Salonu – Kepez, Antalya",
  },
  description:
    "Kepez Masadağı'nda 35 yıllık uzmanlıkla lazer epilasyon, saç kaynak, perma saç, kaş dizayn, kalıcı makyaj ve profesyonel kuaför. Antalya'nın güvenilir güzellik salonu.",
  applicationName: "Popüler Kuaför & Güzellik Salonu",
  keywords: [
    // Lokasyon bazlı — Kepez & mahalleler
    "Kepez güzellik salonu",
    "Masadağı güzellik salonu",
    "Masadağı kuaför",
    "Mazıdağı güzellik salonu",
    "Kepez kuaför",
    "Kepez lazer epilasyon",
    "Kepez saç kaynak",
    "Kepez kaş dizayn",
    "Antalya Kepez güzellik",
    "Çankaya Mah güzellik salonu",
    // Genel Antalya aramaları
    "Antalya güzellik salonu",
    "Antalya kuaför",
    "Antalya lazer epilasyon",
    "Antalya saç kaynak merkezi",
    "Antalya perma saç",
    "Antalya kaş tasarımı",
    "Antalya kalıcı makyaj",
    "Antalya cilt bakımı",
    "Antalya iğneli epilasyon",
    "Antalya manikür pedikür",
    // Hizmet aramaları (şehirsiz — yakınımda aramaları)
    "güzellik salonu",
    "kuaför randevu",
    "lazer epilasyon randevu",
    "saç kaynak fiyat",
    "perma saç salon",
    "kalıcı kaş",
    "kalıcı eyeliner",
    "iğneli epilasyon beyaz tüy",
    "saç renklendirme balyaj",
    "profesyonel saç kesimi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: salonConfig.brand.name,
    title: "Güzellik Salonu Kepez Antalya | Kuaför | Lazer Epilasyon – Popüler",
    description: "Kepez Masadağı'nda 35 yıllık uzmanlıkla lazer epilasyon, saç kaynak, perma, kaş dizayn ve kalıcı makyaj. Antalya'nın güvenilir güzellik salonu.",
    images: [
      {
        url: salonConfig.hero.image.src,
        width: 1800,
        height: 1200,
        alt: "Popüler Kuaför ve Güzellik Salonu – Kepez Masadağı Antalya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Güzellik Salonu Kepez Antalya | Popüler Kuaför",
    description: "Kepez Masadağı'nda 35 yıllık uzmanlıkla lazer epilasyon, saç kaynak, perma, kaş dizayn ve kalıcı makyaj.",
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
        {/* BeautySalon LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": salonConfig.brand.name,
              "alternateName": ["Popüler Güzellik Salonu", "Popüler Kuaför Kepez", "Popüler Güzellik Kepez"],
              "image": `${siteUrl}${salonConfig.hero.image.src}`,
              "@id": siteUrl,
              "url": siteUrl,
              "telephone": "+902422371015",
              "priceRange": "₺₺",
              "description": "Kepez Masadağı'nda 35 yıllık uzmanlıkla lazer epilasyon, saç kaynak, perma saç, kaş dizayn, kalıcı makyaj, cilt bakımı ve profesyonel kuaför hizmetleri.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Çankaya Mah. Barış Manço Bulvarı 217D",
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
              "hasMap": "https://maps.app.goo.gl/popular-guzellik-kepez",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "430",
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Güzellik Hizmetleri",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lazer Epilasyon", "description": "Kepez'de ten tonuna özel lazer epilasyon uygulaması." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Saç Kaynak", "description": "Mikro, bant ve füzyon yöntemleriyle saç kaynak uygulaması." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Perma Saç", "description": "Kalıcı dalga ve kıvırma – perma saç uygulaması." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kaş Dizayn", "description": "Kişiye özel kaş formu tasarımı ve uygulaması." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kalıcı Makyaj", "description": "Kalıcı kaş, eyeliner ve dudak pigmentasyonu." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İğneli Epilasyon", "description": "Beyaz ve açık tüylerde kalıcı iğneli epilasyon." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cilt Bakımı", "description": "Derin temizleme, antiaging ve leke bakımı seansları." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Saç Kesim", "description": "Yüz şekline özel profesyonel saç kesimi ve fön." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Saç Renklendirme", "description": "Balyaj, ombre, röfle ve tek ton saç renklendirme." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manikür", "description": "Klasik ve kalıcı manikür uygulaması." } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pedikür", "description": "Tıbbi ve estetik pedikür uygulaması." } }
                ]
              },
              "areaServed": [
                { "@type": "City", "name": "Antalya" },
                { "@type": "AdministrativeArea", "name": "Kepez" },
                { "@type": "Place", "name": "Masadağı" },
                { "@type": "Place", "name": "Mazıdağı" },
                { "@type": "Place", "name": "Çankaya Mahallesi" }
              ],
              "sameAs": [salonConfig.contact.instagramHref]
            })
          }}
        />
        {/* FAQPage schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Kepez'de güzellik salonu nerede?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Popüler Kuaför & Güzellik Salonu, Çankaya Mah. Barış Manço Bulvarı 217D, Masadağı / Kepez, Antalya adresinde hizmet vermektedir." }
                },
                {
                  "@type": "Question",
                  "name": "Kepez'de lazer epilasyon yapan salon var mı?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Evet. Popüler Güzellik Salonu, Kepez Masadağı'nda ten tonuna özel son sistem lazer cihazlarıyla epilasyon hizmeti sunmaktadır." }
                },
                {
                  "@type": "Question",
                  "name": "Masadağı'nda kuaför var mı?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Evet. Popüler Kuaför & Güzellik Salonu, Masadağı bölgesinde saç kesim, renklendirme, perma ve saç kaynak hizmetleri vermektedir." }
                },
                {
                  "@type": "Question",
                  "name": "Antalya'da perma saç nerede yaptırılır?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Popüler Güzellik Salonu'nda saç tipine özel perma protokolü ile kalıcı dalga ve kıvırma uygulamaları yapılmaktadır. Randevu için (0242) 237 10 15 numaralı telefonu arayabilirsiniz." }
                },
                {
                  "@type": "Question",
                  "name": "İğneli epilasyon Kepez'de nerede yapılıyor?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Lazer epilasyona yanıt vermeyen beyaz ve açık renkli tüyler için iğneli epilasyon, Popüler Güzellik Salonu'nda uygulanmaktadır." }
                },
                {
                  "@type": "Question",
                  "name": "Randevu nasıl alınır?",
                  "acceptedAnswer": { "@type": "Answer", "text": "(0242) 237 10 15 numaralı telefonu arayarak veya Instagram @populer_antalya_guzellik üzerinden mesaj göndererek randevu alabilirsiniz." }
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
