import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/blogs/storm-damage-siding-claim-tips`;

export const metadata: Metadata = {
  title: "Storm Damage Siding Claim Tips for Waco Homeowners | ShieldLine Siding",
  description: "How to document hail and wind damage, what adjusters look for, and when repair is smarter than a full reclad.",
  alternates: { canonical: url },
  openGraph: {
    title: "Storm Damage Siding Claim Tips for Waco Homeowners | ShieldLine Siding",
    description: "How to document hail and wind damage, what adjusters look for, and when repair is smarter than a full reclad.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
