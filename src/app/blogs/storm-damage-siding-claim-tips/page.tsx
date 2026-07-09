'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import RelatedLinks from '#/BlogComponents/RelatedLinks/RelatedLinks';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faCamera, faFileAlt, faCloudBolt, faClipboardCheck, faHandshake } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "After hail or wind, documentation and honest scope save homeowners money. Here is how to approach a siding claim in the Waco area.",
  },
  {
    type: 'cards',
    heading: "Storm Damage Claim Tips That Actually Help",
    cards: [
      { icon: faCamera, title: "Photograph Everything", body: "Capture wide elevations and close-ups of dents, lifted panels, cracked corners, and interior water stains before temporary tarps hide evidence." },
      { icon: faFileAlt, title: "Get a Detailed Scope", body: "Adjusters respond better to elevation-by-elevation notes than a single lump sum. We provide photo-backed scopes when you hire us." },
      { icon: faCloudBolt, title: "Do Not Delay Soft Spots", body: "Wind-driven rain behind failed panels can wet sheathing fast. Temporary protection matters while claims process." },
      { icon: faClipboardCheck, title: "Repair vs Replace", body: "Matching old vinyl can be hard. Partial elevations are sometimes fine; sometimes a full side is smarter. Ask for both options." },
      { icon: faHandshake, title: "Work With Your Carrier", body: "We document damage and price work clearly. Final coverage decisions always rest with your insurer and policy." },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Need help documenting storm damage? ShieldLine can inspect and provide a written scope for your claim process.",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"Storm Damage Siding Claim Tips for Waco Homeowners"}
        description={"What adjusters look for, how to document hail and wind damage, and when repair is smarter than a full reclad."}
        imageSrc={"/pages/blogs/ac-replacement.jpg"}
        imageAlt={"Storm damage siding claim tips for Waco TX"}
        category={"Insurance"}
        date={"June 15, 2026"}
        readTime={7}
      />
      <BlogBody sections={sections} />
      <RelatedLinks
        links={[
          { href: "/services/siding-repair", text: "Siding Repair" },
          { href: "/services/vinyl-siding", text: "Vinyl Siding" },
          { href: "/contact", text: "Request an Inspection" },
        ]}
      />
      <BlogCTA
        title={"Need Storm Damage Documented?"}
        body={"Call ShieldLine for a free on-site inspection and written scope after hail or wind."}
        buttonText="Call (254) 890-9090"
        buttonHref="tel:+12548909090"
      />
      <NewsletterSignup variant={1} spot={"storm-damage-siding-claim-tips-blog"} />
    </>
  );
}
