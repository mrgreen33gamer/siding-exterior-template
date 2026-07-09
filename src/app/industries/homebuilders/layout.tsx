import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/industries/homebuilders`;

export const metadata: Metadata = {
  title: "Homebuilders | ShieldLine Siding",
  description: "Production and custom builder siding packages with schedule-aware crews and consistent specs.",
  alternates: { canonical: url },
  openGraph: {
    title: "Homebuilders | ShieldLine Siding",
    description: "Production and custom builder siding packages with schedule-aware crews and consistent specs.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}