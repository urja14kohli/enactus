// Central content for Enactus IGDTUW, sourced from the Annual Impact Report
// 2025-26, the 2015-2023 Magazine, and the Khajoor & Vidyuta project reports.

export interface Venture {
  slug: string;
  name: string;
  tagline: string;
  area: string;
  description: string;
  image?: string;
  logo?: string;
  established?: string;
  status: 'current' | 'past';
  accent: 'green' | 'navy' | 'gold' | 'rose';
  highlights: string[];
}

export const ventures: Venture[] = [
  {
    slug: 'khajoor',
    name: 'Project Khajoor',
    tagline: 'A zero-waste, women-led circular economy brewing from discarded seeds.',
    area: 'Sustainability · Circular Economy',
    description:
      'Khajoor collects agri-waste like discarded date seeds and pulp and processes them into value-added products — caffeine-free coffee, natural scrubs, and diabetic-safe cakes — reinvesting returns into farmer incomes and home-based, women-run packaging units.',
    image: '/images/projects/khajoor-coffee.png',
    logo: '/images/projects/khajoor-logo.png',
    established: 'Est. Oct 2024',
    status: 'current',
    accent: 'gold',
    highlights: ['₹50,000+ revenue', '200 kg+ agri-waste recycled', '30+ women trained', 'Best Paper — Enactus Global Research Network'],
  },
  {
    slug: 'dhaan',
    name: 'Project Dhaan',
    tagline: 'Turning rice husk waste into reusable, sustainable lifestyle products.',
    area: 'Sustainability · Circular Economy',
    description:
      'Dhaan converts agricultural residue such as rice husk into durable, aesthetically appealing reusable mugs — promoting sustainable consumption while reducing the environmental impact of waste burning.',
    image: '/images/project_dhaan.jpeg',
    status: 'current',
    accent: 'green',
    highlights: ['Winner — Convectus’26 B-Plan', '1,000-mug institutional B2B order', '30+ mugs sold'],
  },
  {
    slug: 'sahaay',
    name: 'Project Sahaay',
    tagline: 'Mental health advocacy powered by a sustainable social enterprise.',
    area: 'Mental Health · Well-being',
    description:
      'Sahaay promotes emotional resilience and accessible well-being through community outreach and a revenue-generating model of reflection journals and sticker sheets, reinvesting profit into community welfare.',
    status: 'current',
    accent: 'rose',
    highlights: ['850+ lives impacted', '₹7,007 revenue · 51% margin', '6 outreach initiatives', 'Top 10 — Zakir Hussain College Pitch'],
  },
  {
    slug: 'vidyuta',
    name: 'Project Vidyuta',
    tagline: 'Turning old batteries into powerful, affordable energy.',
    area: 'Clean Energy · E-waste',
    description:
      'Vidyuta refurbishes discarded lithium-ion cells into solar-assisted power banks for people without reliable electricity — street vendors, students, and adventurers — giving e-waste a second life.',
    image: '/images/projects/vidyuta-product.png',
    logo: '/images/projects/vidyuta-logo.png',
    established: 'Est. Oct 2024',
    status: 'current',
    accent: 'navy',
    highlights: ['10,000+ people reached', '100+ batteries refurbished', '20+ volunteers trained', '₹1 lakh+ raised via B-Plans'],
  },
];

export const pastVentures: Venture[] = [
  {
    slug: 'dharini',
    name: 'Project Dharini',
    tagline: 'Inclusive menstrual and sexual health for every body.',
    area: 'Health · Inclusion',
    description:
      'Our oldest project dissolved taboos around menstrual and sexual health, providing affordable, inclusive services and the WeFlo platform connecting menstruators with pride-friendly gynaecologists and counsellors.',
    status: 'past',
    accent: 'rose',
    highlights: ['4,000+ women impacted', '2,000+ children reached', '100+ transgender folks supported'],
  },
  {
    slug: 'adva',
    name: 'Project Adva',
    tagline: 'Affordable, biodegradable water filtration for all.',
    area: 'Clean Water · SDG 6',
    description:
      'Adva designed a low-cost, biodegradable clay water filter — sourced from local potter communities — to bring clean drinking water to economically weaker sections in and around Delhi.',
    status: 'past',
    accent: 'navy',
    highlights: ['240+ lives impacted', 'Potter community employed', 'Biodegradable filter design'],
  },
  {
    slug: 'aveksha',
    name: 'Project Aveksha',
    tagline: 'Sustainable care for stray and injured animals.',
    area: 'Animal Welfare',
    description:
      'Aveksha provides eco-friendly products for injured and stray animals — earthen pots, handmade toys, clothes and mattresses — crafted by marginalized communities, ensuring threefold development.',
    status: 'past',
    accent: 'green',
    highlights: ['Eco-friendly animal care', 'Livelihoods for artisans'],
  },
  {
    slug: 'prakrikala',
    name: 'Project Prakrikala',
    tagline: 'Upcycling urban waste into innovative products.',
    area: 'Waste Management',
    description:
      'Focused on cloth, plastic, paper and bio-waste, Prakrikala transforms locally sourced urban refuse into upcycled goods crafted by under-represented communities, promoting their socio-economic development.',
    status: 'past',
    accent: 'gold',
    highlights: ['4 waste verticals', 'Community-crafted upcycling'],
  },
];

export const orgStats = [
  { value: 1300, suffix: '+', label: 'Students Engaged' },
  { value: 850, suffix: '+', label: 'Lives Impacted' },
  { value: 32607, prefix: '₹', suffix: '+', label: 'Revenue Generated' },
  { value: 4, suffix: '', label: 'Active Ventures' },
  { value: 10, suffix: '+', label: 'Partners & Collaborators' },
];

export const achievements = [
  { year: '2016', title: 'National Rookie League — Winners', detail: 'First all-girls team ever to win the Enactus India Nationals Rookie League, in Mumbai.' },
  { year: '2026', title: 'Convectus’26 — 1st Position', detail: 'Project Dhaan won the Convectus’26 Business Plan Competition.' },
  { year: '2026', title: 'Best Paper Award', detail: 'Project Khajoor recognised at the Enactus Global Research Network Conference.' },
  { year: '2026', title: 'Envision’26, IIT Roorkee — Top 20', detail: 'Project Khajoor reached the finals and earned a Special Mention Award.' },
  { year: '2026', title: 'The Visionary’s Arena — 2nd Position', detail: 'Project Khajoor, hosted by SGND Khalsa College, Delhi University.' },
];

export const partners = [
  'Google Gemini',
  'Perplexity',
  'Comet',
  'Under 25',
  'Enactus IIT Roorkee',
  'Prabhav Trust Foundation',
  'Human Peace Foundation',
  'Salaam Baalak Trust',
  'SKV Wazirpur',
];

export const departments = [
  'Projects',
  'Event Management',
  'Sponsorship',
  'Media & Marketing',
  'Human Resources',
  'Research',
  'Finance',
  'Involve',
];
