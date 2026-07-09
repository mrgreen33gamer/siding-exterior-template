// ShieldLine Siding — Service Areas
"use client";

import styles from "./page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import LocalCitationBlock from "#/PageComponents/LocalCitationBlock/LocalCitationBlock";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant2 from "#/PageComponents/ContactForms/Variant2/Form";

export default function ServiceAreasPage() {
  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available crews.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential coverage on our regular route.", badge: "" },
    { town: "Woodway", benefit: "HOA-friendly specs and regular availability.", badge: "" },
    { town: "Temple", benefit: "Bell County coverage with reliable turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area homes.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most addresses.", badge: "" },
    { town: "McGregor", benefit: "Residential and rural exterior projects welcome.", badge: "" },
    { town: "Bellmead", benefit: "Residential and multifamily exterior work.", badge: "" },
  ];

  const faq = [
    { question: "What areas does ShieldLine serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you charge trip fees?", answer: "Most addresses in our core service area have no trip charge. Ask when you book if you are near the edge of our radius." },
    { question: "How fast can you schedule an estimate?", answer: "Most free on-site estimates are scheduled within a few days. Call (254) 890-9090." },
    { question: "Do you handle storm damage across the region?", answer: "Yes — we document storm damage and provide written scopes for homeowners and property managers across Central Texas." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
      <SectionIntro
        title="Siding Service Areas Across Central Texas"
        subtitle="Factory-certified crews based in Waco — serving McLennan, Bell, and surrounding counties with flat-rate quotes and a 10-Year Installation Warranty."
      />
      <TrustBar headline="2,800+ homes reclad · 4.9★ from 720+ reviews · Bonded & insured" />
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} title="Where We Install Across Central Texas" />
      </div>
      <div className={styles.section}>
        <LocalCitationBlock />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Service Area FAQs" />
      </div>
      <CTABanner
        headline="Need Siding Work in Your Town?"
        subline="Free on-site estimate. Flat-rate quotes. Call (254) 890-9090."
        primaryText="Call (254) 890-9090"
        primaryLink="tel:+12548909090"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2 title="Request a Free Estimate" cityName="Waco" slug="service-areas" spot="service-areas-form" formVariant={1} />
      </div>
    </main>
  );
}