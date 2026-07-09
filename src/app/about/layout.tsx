import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";

export const metadata: Metadata = {
  title: "About ShieldLine Siding — Waco TX Siding Contractor Since 2011",
  description:
    "Meet ShieldLine Siding. Locally owned and operated in Waco, Texas since 2011 by Gina Foster. Factory-certified installers, bonded & insured, flat-rate quotes, and Lifetime Product Support + 10-Year Installation Warranty. Serving Waco, Temple, Killeen, Hewitt, Woodway, and Central Texas.",
  keywords: [
    "about ShieldLine Siding",
    "Waco siding company",
    "siding contractor Waco TX",
    "Gina Foster ShieldLine Siding",
    "factory-certified siding Waco",
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About ShieldLine Siding — Waco TX Since 2011",
    description:
      "Locally owned siding and exterior builder in Waco, TX. Licensed & insured, flat-rate quotes, 10-Year Installation Warranty.",
    url: `${BASE_URL}/about`,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
