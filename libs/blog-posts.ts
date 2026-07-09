// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'fiber-cement-vs-vinyl-texas',
    title:    'Fiber Cement vs. Vinyl Siding in Texas: Which Should You Choose?',
    excerpt:  'Heat, hail, and HOA rules put different demands on siding. An honest comparison of fiber cement and vinyl for Central Texas homes.',
    category: 'Guides',
    date:     'July 3, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/after.jpg',
    imageAlt: 'Fiber cement vs vinyl siding comparison for Texas homes',
    featured: true,
  },
  {
    slug:     'how-long-siding-lasts',
    title:    'How Long Does Siding Last in Central Texas?',
    excerpt:  'Lifespans, climate wear, and the maintenance habits that decide whether your cladding lasts decades or needs early repair.',
    category: 'Maintenance',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/home/welcome/before.jpg',
    imageAlt: 'How long siding lasts in Central Texas climate',
  },
  {
    slug:     'storm-damage-siding-claim-tips',
    title:    'Storm Damage Siding Claim Tips for Waco Homeowners',
    excerpt:  'What adjusters look for, how to document hail and wind damage, and when repair is smarter than a full reclad.',
    category: 'Insurance',
    date:     'June 15, 2026',
    readTime: 7,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
    imageAlt: 'Storm damage siding claim tips for Waco TX homeowners',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
