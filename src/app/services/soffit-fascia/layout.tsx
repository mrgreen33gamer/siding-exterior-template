import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/services/soffit-fascia`;

export const metadata: Metadata = {
  title: "Soffit & Fascia in Waco, TX | ShieldLine Siding",
  description: "Ventilated soffit, aluminum-wrapped fascia, and eave repairs that stop rot and wildlife entry.",
  keywords: ["Soffit & Fascia Waco TX","siding contractor Waco","Soffit & Fascia Central Texas","ShieldLine Siding"],
  alternates: { canonical: url },
  openGraph: {
    title: "Soffit & Fascia in Waco, TX | ShieldLine Siding",
    description: "Ventilated soffit, aluminum-wrapped fascia, and eave repairs that stop rot and wildlife entry.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Soffit & Fascia in Waco, TX – ShieldLine Siding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soffit & Fascia in Waco, TX | ShieldLine Siding",
    description: "Ventilated soffit, aluminum-wrapped fascia, and eave repairs that stop rot and wildlife entry.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Soffit & Fascia",
  description: "Ventilated soffit, aluminum-wrapped fascia, and eave repairs that stop rot and wildlife entry.",
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
  serviceType: "Soffit & Fascia",
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