import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/services/full-home-reclad`;

export const metadata: Metadata = {
  title: "Full-Home Reclad in Waco, TX | ShieldLine Siding",
  description: "Tear-off, weather barrier, siding, soffit, fascia, and trim — managed as one coordinated project.",
  keywords: ["Full-Home Reclad Waco TX","siding contractor Waco","Full-Home Reclad Central Texas","ShieldLine Siding"],
  alternates: { canonical: url },
  openGraph: {
    title: "Full-Home Reclad in Waco, TX | ShieldLine Siding",
    description: "Tear-off, weather barrier, siding, soffit, fascia, and trim — managed as one coordinated project.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Full-Home Reclad in Waco, TX – ShieldLine Siding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Home Reclad in Waco, TX | ShieldLine Siding",
    description: "Tear-off, weather barrier, siding, soffit, fascia, and trim — managed as one coordinated project.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full-Home Reclad",
  description: "Tear-off, weather barrier, siding, soffit, fascia, and trim — managed as one coordinated project.",
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
  serviceType: "Full-Home Reclad",
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