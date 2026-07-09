import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | ShieldLine Siding",
  description:
    "Siding services for homebuilders, property managers, and historic homes across Central Texas. Flat-rate bids and a 10-Year Installation Warranty.",
  keywords: [
    "builder siding contractor Waco",
    "property management fencing Texas",
    "HOA siding contractor Waco",
    "commercial fencing Central Texas",
    "ShieldLine Siding industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | ShieldLine Siding",
    description:
      "Builders, property managers, and HOA communities — siding and exterior work scoped for how your projects run.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
