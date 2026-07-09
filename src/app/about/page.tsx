// ShieldLine Siding — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faHammer,
  faSearch, faRocket, faStar, faTools,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2011",
      description: "ShieldLine Siding was founded in Waco by Gina Foster after years installing exteriors across Central Texas. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "Crews You Can Trust on Your Property",
      description: "Factory-certified and insured crews who protect landscaping, haul debris daily, and leave the site clean without you having to ask.",
    },
    {
      icon: faHammer,
      title: "Honest From the First Estimate",
      description: "We won't push fiber cement when vinyl is the better fit, or a full reclad when a sectional repair will do. Straight talk is how we earned 720+ reviews.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2800, label: "Homes reclad across Central Texas",                 suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",                        suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Central Texas properties",            suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free On-Site Consultation", description: "We inspect elevations, discuss materials, and give you a written flat-rate quote before any work begins.", icon: faSearch },
    { number: 2, title: "Clear Project Schedule", description: "Once you approve the quote, you get a realistic start window and daily communication while we're on site.", icon: faRocket },
    { number: 3, title: "Quality Install, Every Time", description: "Weather barrier done right, panels fastened to spec, clean transitions — and a clean site when we leave.", icon: faStar },
    { number: 4, title: "Warranty & Support", description: "Lifetime Product Support + 10-Year Installation Warranty and a local team that answers the phone after the project is done.", icon: faTools },
  ];

  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="About ShieldLine Siding"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2011. Durable exteriors for the families and businesses we call neighbors."
      />

      <TrustBar headline="2,800+ homes reclad · 4.9★ from 720+ Central Texas reviews" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Who We Are" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="15 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Siding Contractor — Ready When You Are"
        subline="Flat-rate quotes. 10-Year Installation Warranty. Licensed & insured."
        primaryText="Call Us Now"
        primaryLink="tel:+12548909090"
        secondaryText="Request Estimate Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
