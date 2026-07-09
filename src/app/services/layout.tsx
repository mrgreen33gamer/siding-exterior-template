import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Siding Services in Waco, TX | ShieldLine Siding",
  description:
    "Fiber cement siding, vinyl siding, siding repair, soffit and fascia, exterior trim, and full-home reclads across Central Texas. Factory-certified installers, flat-rate quotes, Lifetime Product Support + 10-Year Installation Warranty.",
  keywords: [
    "siding services Waco TX",
    "fiber cement siding Waco",
    "vinyl siding Central Texas",
    "siding repair Waco",
    "full home reclad Waco",
    "ShieldLine Siding",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Siding Services in Waco, TX | ShieldLine Siding",
    description:
      "Fiber cement, vinyl, repair, soffit and fascia, trim, and full-home reclads. Factory-certified and insured.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}