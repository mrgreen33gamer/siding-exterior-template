'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import RelatedLinks from '#/BlogComponents/RelatedLinks/RelatedLinks';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faTriangleExclamation, faHammer, faShieldHalved, faSun, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Heat, hail, HOA rules, and paint cycles all factor into the choice. Here's an honest comparison of fiber cement and vinyl siding for Waco-area homes.",
  },
  {
    type: 'cards',
    heading: "Fiber Cement vs. Vinyl: What Matters in Central Texas",
    cards: [
      { icon: faTriangleExclamation, title: "Upfront Cost", body: "Vinyl usually costs less to install; fiber cement packages cost more but often deliver a more premium look and impact resistance." },
      { icon: faHammer, title: "Maintenance", body: "Vinyl needs occasional washing — no paint cycle. Fiber cement may need paint over decades depending on finish package." },
      { icon: faShieldHalved, title: "Storm Performance", body: "Both work when installed correctly. Cheap installs fail first — weather barrier and flashing matter more than brand slogans." },
      { icon: faSun, title: "Heat & Fade", body: "Dark colors and west elevations age faster. We help pick profiles and colors that hold up in Texas sun." },
      { icon: faRulerCombined, title: "HOA Acceptance", body: "Both can pass — approved textures and colors vary. Confirm before you order materials." },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "There's no universal winner. The right siding is the one that matches your budget, maintenance tolerance, and exposure — installed to manufacturer specs.",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"Fiber Cement vs. Vinyl Siding in Texas: Which Should You Choose?"}
        description={"Heat, hail, HOA rules, and paint cycles all factor into the choice. Here's an honest comparison for Waco-area homes."}
        imageSrc={"/pages/blogs/energy-savings.jpg"}
        imageAlt={"Fiber cement vs vinyl siding comparison for Central Texas"}
        category={"Guides"}
        date={"July 3, 2026"}
        readTime={8}
      />
      <BlogBody sections={sections} />
      <RelatedLinks
        links={[
          { href: "/services/fiber-cement-siding", text: "Fiber Cement Siding" },
          { href: "/services/vinyl-siding", text: "Vinyl Siding" },
        ]}
      />
      <BlogCTA
        title={"Still Deciding Between Fiber Cement and Vinyl?"}
        body={"We'll walk your elevations and price both options with a free on-site estimate."}
        buttonText="Get Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot={"fiber-cement-vs-vinyl-texas-blog"} />
    </>
  );
}
