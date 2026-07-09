// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.shieldlinesiding.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact ShieldLine Siding | Free Estimates in Waco, TX',
  description:
    'Request a free siding project estimate from ShieldLine Siding. Call (254) 890-9090 or fill out our online form — serving Waco and Central Texas.',
  keywords: [
    'contact ShieldLine Siding',
    'siding estimate Waco TX',
    'siding contractor quote Waco',
    'siding contractor Central Texas',
    'ShieldLine Siding contact',
    '254-753-6400',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact ShieldLine Siding | Free Estimates in Waco, TX',
    description:
      'Call, text, or submit a request. Flat-rate pricing, 10-Year Installation Warranty, licensed crews.',
    url,
    siteName: 'ShieldLine Siding',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ShieldLine Siding | Waco & Central Texas',
    description: 'Schedule a free siding project estimate. Call (254) 890-9090.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
