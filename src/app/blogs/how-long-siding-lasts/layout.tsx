import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/blogs/how-long-siding-lasts`;

export const metadata: Metadata = {
  title: "How Long Does Siding Last in Central Texas? | ShieldLine Siding",
  description: "Lifespans, climate wear, and maintenance habits that decide whether siding lasts decades in Waco and Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "How Long Does Siding Last in Central Texas? | ShieldLine Siding",
    description: "Lifespans, climate wear, and maintenance habits that decide whether siding lasts decades in Waco and Central Texas.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
