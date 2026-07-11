import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/services/siding-repair`;

export const metadata: Metadata = {
  title: "Siding Repair in Waco, TX | ShieldLine Siding",
  description: "Storm damage, rot, failed panels, and leak paths — honest repair-vs-replace guidance.",
  keywords: ["Siding Repair Waco TX","siding contractor Waco","Siding Repair Central Texas","ShieldLine Siding"],
  alternates: { canonical: url },
  openGraph: {
    title: "Siding Repair in Waco, TX | ShieldLine Siding",
    description: "Storm damage, rot, failed panels, and leak paths — honest repair-vs-replace guidance.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Siding Repair in Waco, TX – ShieldLine Siding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siding Repair in Waco, TX | ShieldLine Siding",
    description: "Storm damage, rot, failed panels, and leak paths — honest repair-vs-replace guidance.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Siding Repair",
  description: "Storm damage, rot, failed panels, and leak paths — honest repair-vs-replace guidance.",
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
  serviceType: "Siding Repair",
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