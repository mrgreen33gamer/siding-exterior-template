// ShieldLine Siding — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faHome, faLayerGroup, faWrench, faBorderAll, faPaintRoller, faHouseChimney,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faLock, faRotateLeft, faTag, faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faHome, title: "Fiber Cement Siding", body: "Durable fiber cement lap, panel, and board-and-batten systems built for Texas heat and hail.", link: "/services/fiber-cement-siding" },
    { icon: faLayerGroup, title: "Vinyl Siding", body: "Insulated and standard vinyl with proper weather details and color-matched trim.", link: "/services/vinyl-siding" },
    { icon: faWrench, title: "Siding Repair", body: "Storm damage, rot, and failed panels — honest repair-vs-replace advice.", link: "/services/siding-repair" },
    { icon: faBorderAll, title: "Soffit & Fascia", body: "Ventilated soffit and aluminum-wrapped fascia that stop rot and wildlife entry.", link: "/services/soffit-fascia" },
    { icon: faPaintRoller, title: "Exterior Trim", body: "PVC and painted trim packages for windows, corners, and architectural details.", link: "/services/exterior-trim" },
    { icon: faHouseChimney, title: "Full-Home Reclad", body: "Tear-off to finish as one coordinated project with one warranty path.", link: "/services/full-home-reclad" },
  ];

  const expectations = [
    { icon: faSearch, title: "Clear Guidance First", description: "We explain options in plain English — repair vs reclad, vinyl vs fiber cement — not just the most expensive package." },
    { icon: faCheckCircle, title: "Upfront, Written Pricing", description: "No hourly billing, no surprise add-ons. You approve the price before we order product." },
    { icon: faShieldHalved, title: "Factory-Certified Installers", description: "Every installer is factory-certified. Bonded and insured on every job." },
    { icon: faTag, title: "Lifetime Product + 10-Year Install Warranty", description: "Product support for life of the product; installation workmanship for ten years." },
  ];

  const metrics = [
    { icon: faTrophy, value: 2800, label: "Homes reclad since 2011", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real ShieldLine team member — not a call center. Free estimates most days." },
    { icon: faShieldHalved, title: "No Contracts, Ever", description: "There's no subscription or service agreement required. You hire us because the work is done right." },
    { icon: faLock, title: "Bonded & Insured", description: "Factory-certified and fully insured. Proof of insurance available on request for builders and PMs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online form. We'll schedule a free on-site estimate.", icon: faHeadset },
    { number: 2, title: "Inspect On-Site", description: "Factory-aware specialist inspects elevations and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any order. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Install & Warranty", description: "Clean install, debris hauled away, Lifetime Product + 10-Year Installation Warranty.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag, title: "Upfront Pricing, Always", description: "The written price you approve is the price you pay — no hourly billing." },
    { icon: faShieldHalved, title: "10-Year Installation Warranty", description: "Every install is backed for ten years. If our workmanship fails, we fix it." },
    { icon: faRotateLeft, title: "Satisfaction Guarantee", description: "Not happy with the result? We'll return to make it right." },
    { icon: faLock, title: "Factory-Certified · Bonded & Insured", description: "Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available crews.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for homes and HOA-friendly specs.", badge: "" },
    { town: "Temple", benefit: "Regular service area — quick turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most addresses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "✅ Always", others: "❌ Vague estimates" },
    { feature: "10-Year Installation Warranty", us: "✅ Every install", others: "❌ Rare or none" },
    { feature: "Factory-certified installers", us: "✅ All crews", others: "❌ Not always" },
    { feature: "No service contracts required", us: "✅ Always", others: "❌ Sometimes required" },
    { feature: "Free on-site estimates", us: "✅ Yes", others: "❌ Often charged" },
  ];

  const faq = [
    { question: "How much does siding cost in Waco?", answer: "Pricing depends on square footage, material, and elevation complexity. We always provide a flat-rate written quote after a free estimate." },
    { question: "Are your installers factory-certified?", answer: "Yes — ShieldLine Siding uses factory-certified installers who are bonded and insured." },
    { question: "Do you offer free estimates?", answer: "Yes — free on-site estimates and consultations. Call (254) 890-9090." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — Lifetime Product Support plus a 10-Year Installation Warranty." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll schedule a free estimate and provide written pricing before any work starts." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <SectionIntro
        title="Siding & Exterior Services in Waco, TX"
        subtitle="Fiber cement, vinyl, repair, soffit & fascia, trim, and full-home reclads — factory-certified installers, flat-rate quotes, Lifetime Product Support + 10-Year Installation Warranty."
      />
      <TrustBar headline="2,800+ homes reclad · 4.9★ from 720+ reviews · Bonded & insured" />
      <div className={styles.section}><ServiceCardComponent heading="Our Services" subheading="Everything your home needs for a durable, beautiful exterior." cards={services} /></div>
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection guarantees={guarantees} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} /></div>
      <CTABanner
        headline="Ready for a Free Estimate?"
        subline="Flat-rate quotes. Factory-certified installers. Call (254) 890-9090."
        primaryText="Call (254) 890-9090"
        primaryLink="tel:+12548909090"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2 title="Request a Free Estimate" cityName="Waco" slug="services" spot="services-index-form" formVariant={1} />
      </div>
    </main>
  );
}
