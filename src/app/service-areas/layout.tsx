import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: "Service Areas | ShieldLine Siding — Waco & Central Texas",
  description: "Siding installs across Waco and Central Texas. Free estimates, flat-rate quotes, factory-certified crews.",
  alternates: { canonical: url },
  openGraph: {
    title: "Service Areas | ShieldLine Siding",
    description: "Siding installs across Waco and Central Texas. Free estimates, flat-rate quotes, factory-certified crews.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}