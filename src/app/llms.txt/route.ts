// ShieldLine Siding — AI & LLM Content Index
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET() {
  const base = 'https://www.shieldlinesiding.com';

  const content = `# ShieldLine Siding — AI & LLM Content Index

> Fiber cement, vinyl, and full-home reclads for Waco and Central Texas.
> Factory-certified installers · Bonded & insured · Lifetime Product Support + 10-Year Installation Warranty

## Business
- Name: ShieldLine Siding
- Owner: Gina Foster
- Founded: 2011
- Phone: (254) 890-9090
- Email: hello@shieldlinesiding.com
- Address: 600 N Valley Mills Dr, Waco, TX 76710
- Website: ${base}

## Services
- Fiber Cement Siding: ${base}/services/fiber-cement-siding
- Vinyl Siding: ${base}/services/vinyl-siding
- Siding Repair: ${base}/services/siding-repair
- Soffit & Fascia: ${base}/services/soffit-fascia
- Exterior Trim: ${base}/services/exterior-trim
- Full-Home Reclad: ${base}/services/full-home-reclad

## Industries
- Homebuilders: ${base}/industries/homebuilders
- Property Management: ${base}/industries/property-management
- Historic Homes: ${base}/industries/historic-homes

## Projects
- Gallery: ${base}/projects

## Key Pages
- Home: ${base}/
- About: ${base}/about
- Services: ${base}/services
- Contact: ${base}/contact
- Service Areas: ${base}/service-areas
- Blog: ${base}/blogs

## Service Area
Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and Central Texas.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
