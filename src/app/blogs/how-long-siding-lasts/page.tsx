'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import RelatedLinks from '#/BlogComponents/RelatedLinks/RelatedLinks';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faClock, faCloudSunRain, faWrench, faShieldHalved, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Siding lifespan is not a single number. Climate, install quality, and maintenance decide whether cladding lasts decades or needs early repair.",
  },
  {
    type: 'cards',
    heading: "What Actually Determines How Long Siding Lasts",
    cards: [
      { icon: faClock, title: "Material Category", body: "Vinyl and fiber cement have different failure modes. Vinyl can crack or fade; fiber cement can need paint and careful moisture management at edges." },
      { icon: faCloudSunRain, title: "Central Texas Climate", body: "UV, hail, and wind-driven rain punish west elevations and poorly flashed openings first." },
      { icon: faWrench, title: "Install Quality", body: "Weather barrier, clearances, and fastener patterns matter more than marketing claims. Bad installs fail early." },
      { icon: faShieldHalved, title: "Maintenance Habits", body: "Clear gutters, seal penetrations, and address storm damage quickly. Small leaks become big reclads." },
      { icon: faHouseChimney, title: "When to Reclad", body: "Widespread soft sheathing, repeated elevation failures, or failing hardboard often make a full reclad smarter than endless patches." },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "If you are not sure whether to repair or reclad, a free on-site estimate with photo documentation is the fastest way to decide.",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"How Long Does Siding Last in Central Texas?"}
        description={"Lifespans, climate wear, and the maintenance habits that decide whether your cladding lasts decades or needs early repair."}
        imageSrc={"/pages/blogs/seer-rating.jpg"}
        imageAlt={"How long siding lasts in Central Texas"}
        category={"Maintenance"}
        date={"June 24, 2026"}
        readTime={6}
      />
      <BlogBody sections={sections} />
      <RelatedLinks
        links={[
          { href: "/services/siding-repair", text: "Siding Repair" },
          { href: "/services/full-home-reclad", text: "Full-Home Reclad" },
        ]}
      />
      <BlogCTA
        title={"Wondering If Your Siding Still Has Life Left?"}
        body={"We'll inspect elevations and give you an honest repair-vs-reclad recommendation."}
        buttonText="Schedule Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot={"how-long-siding-lasts-blog"} />
    </>
  );
}
