// ShieldLine Siding — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faHome, faLayerGroup, faWrench, faBorderAll, faPaintRoller, faHouseChimney,
  faTrophy, faChartLine, faClock,
  faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faClipboardCheck, faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faHome,
      title: "Fiber Cement Siding",
      body: "Durable fiber cement lap, panel, and board-and-batten systems built for Texas heat and hail — factory-certified install.",
      link: "/services/fiber-cement-siding",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faLayerGroup,
      title: "Vinyl Siding",
      body: "Insulated and standard vinyl with proper J-channel, starter strips, and color-matched trim for low-maintenance curb appeal.",
      link: "/services/vinyl-siding",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faWrench,
      title: "Siding Repair",
      body: "Storm damage, rot, and failed panels — honest repair-vs-replace advice and insurance documentation when you need it.",
      link: "/services/siding-repair",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faBorderAll,
      title: "Soffit & Fascia",
      body: "Ventilated soffit and aluminum-wrapped fascia that stop rot, wildlife entry, and attic moisture problems.",
      link: "/services/soffit-fascia",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faPaintRoller,
      title: "Exterior Trim",
      body: "PVC and painted trim for windows, corners, and architectural details that hold up in Central Texas humidity.",
      link: "/services/exterior-trim",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faHouseChimney,
      title: "Full-Home Reclad",
      body: "Tear-off, weather barrier, siding, soffit, fascia, and trim — managed as one coordinated project with one warranty path.",
      link: "/services/full-home-reclad",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2800, label: "Homes reclad across Central Texas",       suffix: "+", duration: 3 },
    { icon: faClock,     value: 15,   label: "Years of local exterior experience",     suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",           suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price after a free on-site estimate. No hourly billing, no surprise add-ons mid-install.",
    },
    {
      icon: faShieldHalved,
      title: "Factory-Certified Installers",
      description: "Every crew is factory-certified, bonded, and insured. We install to manufacturer specs so product warranties stay valid.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2011",
      description: "We're not a franchise. ShieldLine was founded in Waco by Gina Foster. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll schedule a free on-site estimate that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Inspect & Advise",
      description: "A ShieldLine specialist inspects elevations, reviews material options, and explains trade-offs in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any order is placed. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Install & Warranty",
      description: "Factory-certified install, clean job site, Lifetime Product Support + 10-Year Installation Warranty.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Product Guidance",
      description: "We recommend fiber cement, vinyl, or repair based on your home and budget — not what's easiest to sell.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Install",
      description: "Landscaping protected, debris hauled daily, home left clean. Every single job.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote after estimate. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Manufacturer-Spec Install",
      description: "Proper weather barrier, fasteners, and clearances so product warranties stay valid and the exterior lasts.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available crews in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential coverage. On our regular route.",                      badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and HOA-friendly specs.",        badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                   badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",       badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",            badge: "" },
  ];

  const faq = [
    {
      question: "How much does siding cost in Waco?",
      answer: "Most residential projects range by square footage, material (vinyl vs fiber cement), and elevation complexity. Full-home reclads are quoted as a package after a free on-site estimate.",
    },
    {
      question: "Do you offer free on-site estimates?",
      answer: "Yes — free estimates across Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, and Bellmead. Call (254) 890-9090.",
    },
    {
      question: "How quickly can you start my project?",
      answer: "Most estimates are scheduled within a few days. Install dates depend on product lead times — typically 1–3 weeks after order for common packages.",
    },
    {
      question: "What siding services do you offer?",
      answer: "Fiber cement siding, vinyl siding, siding repair, soffit & fascia, exterior trim, and full-home reclads.",
    },
    {
      question: "Are your installers certified and insured?",
      answer: "Yes — ShieldLine Siding uses factory-certified installers who are bonded and insured. Documentation available on request.",
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes — Lifetime Product Support plus a 10-Year Installation Warranty covering workmanship on every install.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted siding company — factory-certified, insured, and warrantied on every install"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Siding & Exteriors Done Right"
          subheading="From fiber cement reclads to targeted storm repairs — ShieldLine handles it all."
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <CTABanner
        headline="Exteriors That Look New Again."
        subline="Fiber cement, vinyl, and repair — weather-tight installs with trim details that photograph well."
        primaryText="Call (254) 890-9090"
        primaryLink="tel:+12548909090"
        secondaryText="Exterior Consult"
        secondaryLink="/contact"
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} />
      </div>
      <div className={styles.section}>
        <WhatToExpect expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request Your Free Siding Estimate" cityName="Waco" slug="home" spot="home-page-form" formVariant={1} />
      </div>
    </main>
  );
}
