"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faClipboardList, faFileContract, faSearch, faTrophy, faChartLine, faClock,
  faHome, faLayerGroup, faWrench, faBorderAll, faPaintRoller, faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustryPage() {
  const painPoints = [
    { icon: faClipboardList, problem: "Rotting wood trim and hardboard failures", consequence: "Delays and callbacks cost more than doing the exterior right the first time." },
    { icon: faClipboardList, problem: "Guidelines restrict material choices", consequence: "Owners and buyers notice inconsistent quality immediately." },
    { icon: faClipboardList, problem: "Need rot-proof details that still look right", consequence: "Without documentation and a single accountable crew, problems repeat." },
    { icon: faClipboardList, problem: "Patchwork repairs that never match", consequence: "Shortcuts on weather barrier and flashing create leaks years later." },
    { icon: faClipboardList, problem: "Open-ended hourly vendors", consequence: "Budgets get blown by change orders that should have been scoped up front." },
    { icon: faClipboardList, problem: "No warranty path", consequence: "When issues appear after close or after a storm, nobody owns the fix." },
  ];

  const whyFeatures = [
    { icon: faFileContract, title: "Flat-Rate Written Bids", description: "Clear scope and pricing before crews mobilize." },
    { icon: faFileContract, title: "Documented Completions", description: "Photo notes when you need records for ownership, insurance, or buyers." },
    { icon: faFileContract, title: "Factory-Certified Crews", description: "Installs that protect manufacturer warranties and pass inspection." },
  ];

  const processSteps = [
    { number: 1, title: "Scope Review", description: "Walk elevations or lot packages with your team.", icon: faSearch },
    { number: 2, title: "Flat Quotes", description: "Written pricing before work — no open-ended hourly surprises.", icon: faSearch },
    { number: 3, title: "Scheduled Work", description: "Access and phasing coordinated with your calendar.", icon: faSearch },
    { number: 4, title: "Closeout", description: "Completion notes, warranty support, and punch list zero.", icon: faSearch },
  ];

  const metrics = [
    { icon: faTrophy, value: 2800, label: "Homes reclad across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Industry-specific project approach", us: "✅ Built for your role", others: "❌ Generic residential only" },
    { feature: "Flat-rate written bids", us: "✅ Always", others: "❌ Hourly surprises" },
    { feature: "Documented completions", us: "✅ Available", others: "❌ Rare" },
    { feature: "Factory-certified installers", us: "✅ All crews", others: "❌ Occasional" },
    { feature: "10-Year Installation Warranty", us: "✅ Every install", others: "❌ Limited" },
  ];

  const faq = [
    { question: "Do you work with historic homes regularly?", answer: "Yes — historic homes projects are a core part of ShieldLine's Central Texas work." },
    { question: "Can you phase multi-unit or multi-lot work?", answer: "Yes — we schedule phases so access and occupancy stay manageable." },
    { question: "Do you repair and fully reclad?", answer: "Both — targeted repairs when structure allows, full reclad when it is the better long-term value." },
    { question: "Are you bonded and insured?", answer: "Yes — factory-certified installers, bonded and insured. COI available on request." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "HQ — strongest crew availability for industry projects.", badge: "Home Base" },
    { town: "Temple", benefit: "Builder and commercial coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Multifamily and residential support near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Residential and portfolio property work.", badge: "" },
    { town: "Woodway", benefit: "HOA-heavy neighborhoods and custom homes.", badge: "" },
    { town: "Bellmead", benefit: "Property management and commercial lots.", badge: "" },
  ];

  const services = [
    { icon: faHome, title: "Fiber Cement Siding", body: "Durable cladding for new builds and reclads.", link: "/services/fiber-cement-siding" },
    { icon: faLayerGroup, title: "Vinyl Siding", body: "Low-maintenance systems for volume and repair work.", link: "/services/vinyl-siding" },
    { icon: faWrench, title: "Siding Repair", body: "Storm and wear repairs with documentation.", link: "/services/siding-repair" },
    { icon: faHouseChimney, title: "Full-Home Reclad", body: "Tear-off to finish as one project.", link: "/services/full-home-reclad" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Historic Homes" },
      ]} />
      <SectionIntro
        title={"Historic Homes Exterior Solutions"}
        subtitle={"Period-sensitive exterior reclads and trim that respect historic character with modern weather performance."}
      />
      <TrustBar headline="2,800+ homes reclad · factory-certified · bonded & insured" />
      <div className={styles.section}><IndustryPainPoints industry="historic home" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Teams Choose ShieldLine" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services We Deliver" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Historic Homes FAQs"} /></div>
      <CTABanner
        headline={"Need a siding partner for historic homes?"}
        subline="Flat-rate quotes. Factory-certified crews. Call (254) 890-9090."
        primaryText="Call (254) 890-9090"
        primaryLink="tel:+12548909090"
        secondaryText="Request Estimate"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title={"Historic Homes Project Inquiry"} cityName="Waco" slug={"industries/" + "historic-homes"} spot={"historic-homes-industry-form"} formVariant={3} />
      </div>
    </main>
  );
}