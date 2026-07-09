import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/services/vinyl-siding`;

export const metadata: Metadata = {
  title: "Vinyl Siding in Waco, TX | ShieldLine Siding",
  description: "Insulated and standard vinyl systems with proper J-channel, starter strips, and color-matched trim.",
  keywords: ["Vinyl Siding Waco TX","siding contractor Waco","Vinyl Siding Central Texas","ShieldLine Siding"],
  alternates: { canonical: url },
  openGraph: {
    title: "Vinyl Siding in Waco, TX | ShieldLine Siding",
    description: "Insulated and standard vinyl systems with proper J-channel, starter strips, and color-matched trim.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Vinyl Siding in Waco, TX – ShieldLine Siding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinyl Siding in Waco, TX | ShieldLine Siding",
    description: "Insulated and standard vinyl systems with proper J-channel, starter strips, and color-matched trim.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vinyl Siding",
  description: "Insulated and standard vinyl systems with proper J-channel, starter strips, and color-matched trim.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "ShieldLine Siding",
    url: BASE_URL,
    telephone: "+12548909090",
    address: {
      "@type": "PostalAddress",
      streetAddress: "600 N Valley Mills Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76710",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco" },
    { "@type": "City", name: "Temple" },
    { "@type": "City", name: "Killeen" },
    { "@type": "City", name: "Hewitt" },
    { "@type": "City", name: "Woodway" },
  ],
  serviceType: "Vinyl Siding",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}