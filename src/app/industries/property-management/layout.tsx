import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/industries/property-management`;

export const metadata: Metadata = {
  title: "Property Management | ShieldLine Siding",
  description: "Portfolio siding repair, storm response, and reclads with documented visits and one invoice contact.",
  alternates: { canonical: url },
  openGraph: {
    title: "Property Management | ShieldLine Siding",
    description: "Portfolio siding repair, storm response, and reclads with documented visits and one invoice contact.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}