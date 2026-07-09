// src/app/layout.tsx
// ShieldLine Siding — root layout
import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, ABeeZee } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const aBeeZee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abeezee",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.shieldlinesiding.com"
  : "http://localhost:3000";

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d1b2a" },
    { media: "(prefers-color-scheme: dark)",  color: "#0d1b2a" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ShieldLine Siding | Fiber Cement, Vinyl & Exterior Remodels — Waco, TX",
    template: "%s | ShieldLine Siding",
  },
  description:
    "ShieldLine Siding is a Waco, TX siding contractor offering fiber cement siding, vinyl siding, siding repair, soffit & fascia, exterior trim, and full-home reclads across Central Texas. Factory-certified installers, bonded & insured, Lifetime Product Support + 10-Year Installation Warranty.",
  keywords: [
    "ShieldLine Siding",
    "fiber cement siding Waco TX",
    "vinyl siding Waco Texas",
    "siding repair Central Texas",
    "full home reclad Waco",
    "soffit fascia Waco TX",
    "exterior trim Hewitt TX",
    "siding contractor Temple TX",
    "James Hardie installers Killeen",
  ],
  authors: [{ name: "ShieldLine Siding", url: BASE_URL }],
  creator: "ShieldLine Siding",
  publisher: "ShieldLine Siding",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "ShieldLine Siding | Fiber Cement, Vinyl & Exterior Remodels — Waco, TX",
    description:
      "Waco-based siding company for fiber cement, vinyl, repairs, soffit & fascia, trim, and full-home reclads across Central Texas. Factory-certified & insured.",
    url: BASE_URL,
    siteName: "ShieldLine Siding",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "ShieldLine Siding — Waco TX Fiber Cement & Vinyl Siding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShieldLine Siding | Waco TX Fiber Cement & Vinyl",
    description:
      "Fiber cement, vinyl, siding repair & full-home reclads for Central Texas. Factory-certified installers — bonded & insured.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "ShieldLine Siding",
  alternateName: "ShieldLine Siding Waco",
  description:
    "Residential and commercial siding services in Waco and Central Texas — fiber cement siding, vinyl siding, siding repair, soffit & fascia, exterior trim, and full-home reclads. Factory-certified installers, bonded & insured, Lifetime Product Support + 10-Year Installation Warranty.",
  url: BASE_URL,
  telephone: "+12548909090",
  email: "hello@shieldlinesiding.com",
  foundingDate: "2011",
  founder: {
    "@type": "Person",
    name: "Gina Foster",
    jobTitle: "Owner & Lead Estimator",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "600 N Valley Mills Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76710",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Siding & Exterior Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fiber Cement Siding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vinyl Siding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Siding Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soffit & Fascia" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Trim" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Home Reclad" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/shieldlinesiding",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${aBeeZee.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#0ea5e9" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#0d1b2a",
                }}
              >
                <PulseLoader size={50} color="#0ea5e9" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
