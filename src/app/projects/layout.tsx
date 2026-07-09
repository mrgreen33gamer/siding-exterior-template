import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/projects`;

export const metadata: Metadata = {
  title: "Projects Gallery | ShieldLine Siding — Waco TX",
  description: "Real fiber cement, vinyl, repair, and full-home reclad projects by ShieldLine Siding across Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "Projects Gallery | ShieldLine Siding",
    description: "Real fiber cement, vinyl, repair, and full-home reclad projects across Central Texas.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}