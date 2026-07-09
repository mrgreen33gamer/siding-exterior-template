// ShieldLine Siding — Soffit & Fascia
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faHome, faLayerGroup, faWrench, faBorderAll, faPaintRoller, faHouseChimney,
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const SLUG = "soffit-fascia";

export default function ServicePage() {
  const expectations = [
    { icon: faSearch, title: "On-Site Assessment", description: "We inspect existing cladding, flashings, and moisture paths before recommending product or repair scope." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Tear-off, materials, labor, haul-away, and sealing are in the number — no surprise change orders mid-install." },
    { icon: faCheckCircle, title: "Manufacturer-Spec Install", description: "Proper weather barrier, fasteners, and clearances so product warranties stay valid." },
    { icon: faShieldHalved, title: "10-Year Installation Warranty", description: "Every install is backed by Lifetime Product Support plus our 10-Year Installation Warranty." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Efficient Project Timeline", description: "We stage elevations so openings are never left unprotected overnight." },
    { icon: faShieldHalved, title: "Factory-Certified Crews", description: "Bonded and insured installers who follow manufacturer instructions — not shortcuts." },
    { icon: faHome, title: "Local Since 2011", description: "ShieldLine is Waco-owned by Gina Foster. Decisions are made locally, not by a distant franchise." },
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate", description: "We measure elevations, note damage, and discuss material options in plain English.", icon: faHeadset },
    { number: 2, title: "Quote & Schedule", description: "You get a flat-rate quote. Once approved, we lock install dates and order product.", icon: faSearch },
    { number: 3, title: "Install Days", description: "Protect landscaping, install to spec, haul debris daily, keep you updated.", icon: faFileContract },
    { number: 4, title: "Walkthrough & Warranty", description: "Final walkthrough, punch list, and warranty registration support.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 2800, label: "Homes reclad across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years installing exteriors locally", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for soffit & fascia.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential coverage throughout Hewitt.", badge: "" },
    { town: "Woodway", benefit: "HOA-friendly specs and regular availability.", badge: "" },
    { town: "Temple", benefit: "Bell County coverage — permit-ready installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger homes.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Free on-site estimate before quote", us: "✅ Always", others: "❌ Often skipped" },
    { feature: "Factory-certified install crews", us: "✅ All jobs", others: "❌ Varies" },
    { feature: "Flat-rate quote (materials + labor)", us: "✅ Written", others: "❌ Hourly + extras" },
    { feature: "10-Year Installation Warranty", us: "✅ Every install", others: "❌ Rare" },
    { feature: "Lifetime Product Support", us: "✅ Manufacturer-backed", others: "❌ Limited" },
  ];

  const faq = [
    { question: "Do I need ventilated soffit?", answer: "Most homes benefit from continuous ventilation to reduce attic moisture and heat. We assess existing venting and recommend the right product." },
    { question: "Are your installers factory-certified?", answer: "Yes — ShieldLine uses factory-certified installers who are bonded and insured." },
    { question: "Do you haul away old siding?", answer: "Yes — tear-off and disposal are included in our flat-rate install quotes." },
    { question: "What warranty do you offer?", answer: "Lifetime Product Support plus a 10-Year Installation Warranty on workmanship." },
    { question: "Do you help with insurance claims?", answer: "We document storm damage, provide detailed scopes, and work with adjusters when homeowners file claims." },
    { question: "How do I get a quote?", answer: "Call (254) 890-9090 or book online for a free on-site estimate." },
  ];

  const crossServices = [
    { icon: faHome, title: "Fiber Cement Siding", body: "Durable fiber cement systems for Texas weather.", link: "/services/fiber-cement-siding" },
    { icon: faLayerGroup, title: "Vinyl Siding", body: "Low-maintenance vinyl with proper weather details.", link: "/services/vinyl-siding" },
    { icon: faWrench, title: "Siding Repair", body: "Storm and wear repairs with honest scope.", link: "/services/siding-repair" },
    { icon: faBorderAll, title: "Soffit & Fascia", body: "Ventilated eaves and rot-proof fascia.", link: "/services/soffit-fascia" },
    { icon: faPaintRoller, title: "Exterior Trim", body: "PVC and painted trim packages.", link: "/services/exterior-trim" },
    { icon: faHouseChimney, title: "Full-Home Reclad", body: "Tear-off to finish as one project.", link: "/services/full-home-reclad" },
  ].filter(c => !c.link.includes(SLUG)).slice(0, 4);

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Soffit & Fascia" },
      ]} />
      <SectionIntro
        title={"Soffit & Fascia in Waco, TX"}
        subtitle={"Ventilated soffit, aluminum-wrapped fascia, and eave repairs that stop rot and wildlife entry. Healthy eaves protect the rest of the exterior. We replace damaged boards, improve ventilation, and finish for a continuous clean line."}
      />
      <TrustBar headline="2,800+ homes reclad — factory-certified, bonded & insured" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose ShieldLine" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/" + SLUG} title={"Soffit & Fascia Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Soffit & Fascia FAQs"} /></div>
      <CTABanner
        headline="Ready to Get Started?"
        subline="Free on-site estimate. Flat-rate quotes. Factory-certified installers. Call (254) 890-9090."
        primaryText="Call Us Now"
        primaryLink="tel:+12548909090"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title={"Schedule Your Free Soffit & Fascia Estimate"} cityName="Waco" slug={"services/" + SLUG} spot={SLUG + "-page-form"} formVariant={2} />
      </div>
    </main>
  );
}