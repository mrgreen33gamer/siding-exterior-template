import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shieldlinesiding.com";
const url = `${BASE_URL}/blogs/fiber-cement-vs-vinyl-texas`;

export const metadata: Metadata = {
  title: "Fiber Cement vs. Vinyl Siding in Texas | ShieldLine Siding",
  description: "Honest comparison of fiber cement and vinyl siding for Central Texas heat, hail, and HOA rules.",
  alternates: { canonical: url },
  openGraph: {
    title: "Fiber Cement vs. Vinyl Siding in Texas | ShieldLine Siding",
    description: "Honest comparison of fiber cement and vinyl siding for Central Texas heat, hail, and HOA rules.",
    url,
    siteName: "ShieldLine Siding",
    locale: "en_US",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
