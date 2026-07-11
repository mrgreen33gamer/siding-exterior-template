import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/services/fiber-cement-siding`;

export const metadata: Metadata = {
  title: "Fiber Cement Siding in Waco, TX | ShieldLine Siding",
  description: "Durable fiber cement lap, panel, and board-and-batten systems built for Texas heat and hail.",
  keywords: ["Fiber Cement Siding Waco TX","siding contractor Waco","Fiber Cement Siding Central Texas","ShieldLine Siding"],
  alternates: { canonical: url },
  openGraph: {
    title: "Fiber Cement Siding in Waco, TX | ShieldLine Siding",
    description: "Durable fiber cement lap, panel, and board-and-batten systems built for Texas heat and hail.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Fiber Cement Siding in Waco, TX – ShieldLine Siding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiber Cement Siding in Waco, TX | ShieldLine Siding",
    description: "Durable fiber cement lap, panel, and board-and-batten systems built for Texas heat and hail.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fiber Cement Siding",
  description: "Durable fiber cement lap, panel, and board-and-batten systems built for Texas heat and hail.",
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
  serviceType: "Fiber Cement Siding",
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