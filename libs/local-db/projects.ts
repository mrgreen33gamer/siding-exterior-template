// libs/local-db/projects.ts
// Central data store for ShieldLine Siding projects shown on /projects
// and /projects/[slug] case study pages.

export type ProjectCategory =
  | 'Fiber Cement'
  | 'Vinyl Siding'
  | 'Full-Home Reclad'
  | 'Siding Repair'
  | 'Soffit & Fascia'
  | 'Exterior Trim';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: ProjectCategory;
  year: string;
  shortDesc: string;
  fullDesc: string;
  result: string;
  tags: string[];
  images: ProjectImage[];
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  sqft?: string;
  duration?: string;
  featured?: boolean;
}

const G = '/projects/gallery';

const fiberCement: Project[] = [
  {
    id: 'woodway-fiber-cement-reclad',
    title: 'Woodway Fiber Cement Full Reclad',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Fiber Cement',
    year: '2026',
    duration: '3 weeks',
    shortDesc: 'Full-home fiber cement reclad with new housewrap, trim, and factory-finish color.',
    fullDesc: 'The homeowners wanted a durable exterior that could handle hail and Texas heat without constant paint cycles. ShieldLine tore off failing hardboard, installed a continuous weather-resistive barrier, and clad the home in fiber cement lap siding with matching corner boards and window trim. Crews staged elevations so openings were never left unprotected overnight.',
    result: 'Full Reclad',
    tags: ['Fiber Cement', 'HOA Spec', 'Woodway'],
    images: [
      { src: `${G}/2.png`, alt: 'Fiber cement siding Woodway home', caption: 'Completed exterior' },
      { src: `${G}/3.png`, alt: 'Window trim detail after reclad', caption: 'Trim detail' },
    ],
    beforeImage: { src: `${G}/4.png`, alt: 'Home exterior before siding reclad' },
    afterImage:  { src: `${G}/2.png`, alt: 'Home after ShieldLine fiber cement install' },
    featured: true,
  },
  {
    id: 'hewitt-hardie-accent',
    title: 'Hewitt Fiber Cement with Board-and-Batten Accent',
    client: 'Private Residence',
    location: 'Hewitt, TX',
    category: 'Fiber Cement',
    year: '2025',
    duration: '2 weeks',
    shortDesc: 'Mixed lap and board-and-batten fiber cement elevations for curb appeal.',
    fullDesc: 'A Hewitt remodel mixed horizontal lap on the main body with vertical board-and-batten on the gable for contrast. ShieldLine coordinated color, texture, and trim packages and installed to manufacturer specs so warranties stayed intact.',
    result: 'Curb Appeal',
    tags: ['Board-and-Batten', 'Mixed Elevations', 'Hewitt'],
    images: [
      { src: `${G}/5.png`, alt: 'Mixed fiber cement elevations', caption: '' },
      { src: `${G}/7.png`, alt: 'Board-and-batten gable detail', caption: '' },
    ],
    featured: true,
  },
];

const vinylProjects: Project[] = [
  {
    id: 'temple-vinyl-storm-replace',
    title: 'Temple Vinyl Storm Replacement',
    client: 'Private Residence',
    location: 'Temple, TX',
    category: 'Vinyl Siding',
    year: '2025',
    duration: '1 week',
    shortDesc: 'Hail-damaged vinyl replaced with insulated vinyl and new J-channel.',
    fullDesc: 'After a spring hail event, ShieldLine documented damage for the insurance claim, removed dented panels, and installed insulated vinyl with proper starter strips and J-channel. Color-matched trim kept the home looking continuous from the street.',
    result: 'Insurance Ready',
    tags: ['Vinyl', 'Storm', 'Temple'],
    images: [
      { src: `${G}/ertret.png`, alt: 'New vinyl siding after storm', caption: '' },
      { src: `${G}/ewew.png`, alt: 'Vinyl corner and trim detail', caption: '' },
    ],
    beforeImage: { src: `${G}/gythgnb.png`, alt: 'Hail-damaged vinyl before' },
    afterImage:  { src: `${G}/ertret.png`, alt: 'Vinyl after ShieldLine replace' },
    featured: true,
  },
  {
    id: 'killeen-vinyl-partial',
    title: 'Killeen Partial Elevation Vinyl',
    client: 'Private Residence',
    location: 'Killeen, TX',
    category: 'Vinyl Siding',
    year: '2024',
    duration: '4 days',
    shortDesc: 'West-elevation vinyl replacement where sun and heat aged panels fastest.',
    fullDesc: 'Rather than force a full reclad, ShieldLine replaced the sun-baked west elevation, blended transitions, and upgraded underlayment. The homeowner saved budget while fixing the elevation that failed first.',
    result: 'Targeted Fix',
    tags: ['Partial', 'Vinyl', 'Killeen'],
    images: [
      { src: `${G}/htf.png`, alt: 'Partial vinyl elevation replacement', caption: '' },
    ],
  },
];

const recladProjects: Project[] = [
  {
    id: 'waco-full-home-reclad',
    title: 'Waco Full-Home Exterior Reclad',
    client: 'Private Residence',
    location: 'Waco, TX',
    category: 'Full-Home Reclad',
    year: '2025',
    duration: '4 weeks',
    shortDesc: 'Complete tear-off, WRB, fiber cement, soffit, fascia, and trim package.',
    fullDesc: 'A Waco family needed a turnkey exterior refresh. ShieldLine handled tear-off, weather barrier, fiber cement, aluminum-wrapped fascia, ventilated soffit, and PVC trim around openings. Project managed end-to-end with daily cleanup and final walkthrough.',
    result: 'Turnkey Exterior',
    tags: ['Full Reclad', 'Soffit', 'Waco'],
    images: [
      { src: `${G}/iou.png`, alt: 'Full home reclad completed', caption: '' },
      { src: `${G}/iytyuhn.png`, alt: 'Soffit and fascia detail', caption: '' },
    ],
    beforeImage: { src: `${G}/jyfhtgb.png`, alt: 'Home before full reclad' },
    afterImage:  { src: `${G}/iou.png`, alt: 'Home after full ShieldLine reclad' },
    featured: true,
  },
];

const repairProjects: Project[] = [
  {
    id: 'china-spring-storm-repair',
    title: 'China Spring Storm Siding Repair',
    client: 'Private Residence',
    location: 'China Spring, TX',
    category: 'Siding Repair',
    year: '2025',
    duration: '3 days',
    shortDesc: 'Targeted panel and trim repairs after wind-driven rain intrusion.',
    fullDesc: 'Wind lifted panels on the north elevation and water stained sheathing at two corners. ShieldLine replaced damaged panels, repaired underlayment, resealed penetrations, and color-matched paint so repairs disappeared into the existing elevation.',
    result: 'Leak Stopped',
    tags: ['Repair', 'Storm', 'China Spring'],
    images: [
      { src: `${G}/kgh.png`, alt: 'Siding repair after storm', caption: '' },
    ],
  },
  {
    id: 'bellmead-multifamily-patch',
    title: 'Bellmead Multifamily Panel Patch',
    client: 'Property Management',
    location: 'Bellmead, TX',
    category: 'Siding Repair',
    year: '2024',
    duration: '5 days',
    shortDesc: 'Portfolio repair tickets across three buildings after a wind event.',
    fullDesc: 'Property managers needed documented completions and one invoice contact. ShieldLine patched panels, replaced failed J-channel, and delivered photo notes for ownership.',
    result: 'Portfolio Closeout',
    tags: ['Multifamily', 'PM', 'Bellmead'],
    images: [
      { src: `${G}/liukj.png`, alt: 'Multifamily siding repairs', caption: '' },
    ],
  },
];

const soffitProjects: Project[] = [
  {
    id: 'mcgregor-soffit-fascia',
    title: 'McGregor Soffit & Fascia Refresh',
    client: 'Private Residence',
    location: 'McGregor, TX',
    category: 'Soffit & Fascia',
    year: '2025',
    duration: '4 days',
    shortDesc: 'Rotted fascia boards replaced and continuous ventilated soffit installed.',
    fullDesc: 'Woodpecker damage and rot had compromised eave lines. ShieldLine replaced fascia, wrapped with aluminum, installed ventilated soffit panels, and painted for a clean continuous eave.',
    result: 'Eave Seal',
    tags: ['Soffit', 'Fascia', 'McGregor'],
    images: [
      { src: `${G}/qwe.png`, alt: 'New soffit and fascia', caption: '' },
    ],
  },
];

const trimProjects: Project[] = [
  {
    id: 'waco-historic-trim',
    title: 'Waco Historic Home Trim Package',
    client: 'Private Residence',
    location: 'Waco, TX',
    category: 'Exterior Trim',
    year: '2024',
    duration: '1 week',
    shortDesc: 'PVC and painted trim details respectful of a historic neighborhood look.',
    fullDesc: 'A near-downtown Waco home needed rot-proof trim without losing traditional profiles. ShieldLine milled and installed PVC window casings, corner boards, and frieze details, then painted to match the approved palette.',
    result: 'Period-Correct',
    tags: ['Historic', 'Trim', 'Waco'],
    images: [
      { src: `${G}/rtet.png`, alt: 'Historic exterior trim package', caption: '' },
      { src: `${G}/sesrere.png`, alt: 'Window casing detail', caption: '' },
    ],
  },
];

export const ALL_PROJECTS: Project[] = [
  ...fiberCement,
  ...vinylProjects,
  ...recladProjects,
  ...repairProjects,
  ...soffitProjects,
  ...trimProjects,
];

export const PROJECTS_BY_CATEGORY: Record<ProjectCategory, Project[]> = {
  'Fiber Cement': fiberCement,
  'Vinyl Siding': vinylProjects,
  'Full-Home Reclad': recladProjects,
  'Siding Repair': repairProjects,
  'Soffit & Fascia': soffitProjects,
  'Exterior Trim': trimProjects,
};

export const CATEGORIES: ProjectCategory[] = [
  'Fiber Cement',
  'Vinyl Siding',
  'Full-Home Reclad',
  'Siding Repair',
  'Soffit & Fascia',
  'Exterior Trim',
];

export function getAllProjects(): Project[] { return ALL_PROJECTS; }
export function getFeaturedProjects(): Project[] { return ALL_PROJECTS.filter((p) => p.featured); }
export function getProjectById(id: string): Project | undefined { return ALL_PROJECTS.find((p) => p.id === id); }
export function getProjectBySlug(slug: string): Project | undefined { return ALL_PROJECTS.find((p) => p.id === slug); }
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return ALL_PROJECTS.filter((p) => p.category === category);
}

export default ALL_PROJECTS;
