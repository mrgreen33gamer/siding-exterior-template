import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/services/exterior-trim`;

export const metadata: Metadata = {
  title: "Exterior Trim in Waco, TX | ShieldLine Siding",
  description: "PVC and painted trim packages for windows, corners, frieze, and architectural details.",
  keywords: ["Exterior Trim Waco TX","siding contractor Waco","Exterior Trim Central Texas","ShieldLine Siding"],
  alternates: { canonical: url },
  openGraph: {
    title: "Exterior Trim in Waco, TX | ShieldLine Siding",
    description: "PVC and painted trim packages for windows, corners, frieze, and architectural details.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Exterior Trim in Waco, TX – ShieldLine Siding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Trim in Waco, TX | ShieldLine Siding",
    description: "PVC and painted trim packages for windows, corners, frieze, and architectural details.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Exterior Trim",
  description: "PVC and painted trim packages for windows, corners, frieze, and architectural details.",
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
  serviceType: "Exterior Trim",
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