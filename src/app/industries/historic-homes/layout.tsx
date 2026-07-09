import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/industries/historic-homes`;

export const metadata: Metadata = {
  title: "Historic Homes | ShieldLine Siding",
  description: "Period-sensitive exterior reclads and trim that respect historic character with modern weather performance.",
  alternates: { canonical: url },
  openGraph: {
    title: "Historic Homes | ShieldLine Siding",
    description: "Period-sensitive exterior reclads and trim that respect historic character with modern weather performance.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}