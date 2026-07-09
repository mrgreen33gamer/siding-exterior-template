// libs/local-db/reviews.ts
// Static testimonials for ShieldLine Siding

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Fiber Cement Siding',
    text:     "We reclad our 1990s ranch in fiber cement. ShieldLine measured carefully, the install crew was clean and on schedule, and the house looks brand new. Pricing was upfront — no games.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Vinyl Siding',
    text:     'Hail left dents across the north elevation. ShieldLine helped with documentation, installed new vinyl with proper underlayment, and matched the color perfectly. Gina and the crew were excellent.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Full-Home Reclad',
    text:     'Full-home reclad with fiber cement and new soffit. ShieldLine staged the job so we never had open walls overnight. Fair price, great result, and the 10-year install warranty sold us.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Siding Repair',
    text:     'They repaired storm-damaged sections instead of pushing a full reclad. Honest advice, clean work, and they sealed the transitions so you cannot tell the new panels from the old.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Soffit & Fascia',
    text:     'Rotting fascia and clogged soffit vents. ShieldLine replaced the damaged boards, fixed ventilation, and painted to match. Peace of mind before the next storm season.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Exterior Trim',
    text:     'Window and corner trim was failing. ShieldLine installed PVC trim that will not rot and tied it cleanly into our existing siding. They are my go-to exterior company now.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Property Management',
    text:     'We hired ShieldLine for multi-unit siding repairs after a storm. They coordinated access, documented each building, and the inspector signed off first pass. Professional from start to finish.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Fiber Cement Siding',
    text:     'Factory-certified crew, meticulous weather barrier, and they actually cleaned up better than most remodelers. Lifetime product support and a real installation warranty — that sold me.',
  },
];

export default reviews;
