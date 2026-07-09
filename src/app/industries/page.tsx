"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Role Before We Bid",
      description: "Builders, property managers, and historic-home owners each need different schedules, documentation, and material choices. We scope siding work to how your projects actually run.",
    },
    {
      icon: faShieldHalved,
      title: "Locally Operated, Spec-Savvy",
      description: "Based in Waco since 2011, ShieldLine knows Central Texas weather, HOA guidelines, and builder punch-list expectations.",
    },
    {
      icon: faLightbulb,
      title: "Repair, Reclad & Document Under One Roof",
      description: "Storm repairs, full reclads, and board-ready photo notes — without juggling multiple exterior vendors.",
    },
  ];

  const metrics = [
    { icon: faTrophy, value: 3, label: "Partner types actively served across Texas", suffix: "", duration: 2 },
    { icon: faChartLine, value: 2800, label: "Homes reclad company-wide", suffix: "+", duration: 3 },
    { icon: faClock, value: 15, label: "Years serving Texas properties", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "HQ for builder, PM, and residential projects across McLennan County.", badge: "Headquarters" },
    { town: "Temple", benefit: "Builder and portfolio coverage across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Multifamily and residential builder support.", badge: "" },
    { town: "Hewitt", benefit: "Residential and property management portfolios.", badge: "" },
    { town: "Woodway", benefit: "HOA-heavy neighborhoods and custom homes.", badge: "" },
    { town: "Bellmead", benefit: "Managed properties and multi-unit exteriors.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Role-specific project approach", us: "✅ Built per partner type", others: "❌ Generic residential only" },
    { feature: "Local Central Texas knowledge", us: "✅ Serving Texas since 2011", others: "❌ Out-of-area crews" },
    { feature: "Repair + reclad + documentation", us: "✅ All under one roof", others: "❌ Siloed vendors" },
    { feature: "Transparent fixed pricing", us: "✅ Quote before work starts", others: "❌ Billable hours + surprises" },
    { feature: "10-Year Installation Warranty", us: "✅ Every install", others: "❌ Limited" },
  ];

  const faq = [
    {
      question: "Who does ShieldLine partner with?",
      answer: "Residential builders and general contractors, property management companies, and historic-home owners across Central Texas — plus homeowners on every service line.",
    },
    {
      question: "Do you customize scope for each partner type?",
      answer: "Yes. A builder lot schedule, a multifamily repair ticket list, and a historic trim package are scoped differently on purpose.",
    },
    {
      question: "Do you serve properties outside Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within our service radius.",
    },
    {
      question: "Can you handle both repairs and full reclads?",
      answer: "Yes — targeted repairs, partial elevations, and full-home reclads under one warranty-backed team.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro
        title="Industries We Serve"
        subtitle="Homebuilders, property management, and historic homes — factory-certified siding crews that show up with a plan."
      />
      <TrustBar headline="2,800+ homes reclad · 4.9★ · bonded & insured" />
      <div className={styles.section}><SectionIndustriesServed /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Industry Partnership FAQs" /></div>
      <CTABanner
        headline="Need a Reliable Siding Partner?"
        subline="Flat-rate quotes. Factory-certified crews. Call (254) 890-9090."
        primaryText="Call (254) 890-9090"
        primaryLink="tel:+12548909090"
        secondaryText="Request Estimate"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Industry Project Inquiry" cityName="Waco" slug="industries" spot="industries-index-form" formVariant={3} />
      </div>
    </main>
  );
}
