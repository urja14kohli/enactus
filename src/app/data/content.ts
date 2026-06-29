// Central content for Enactus IGDTUW, sourced from the Annual Impact Report
// 2025-26, the 2015 to 2023 Magazine, and the Khajoor & Vidyuta project reports.

export interface ImpactStat {
  value: string;
  label: string;
}

export interface Venture {
  slug: string;
  name: string;
  tagline: string;
  area: string;
  founded: string;
  status: 'current' | 'past';
  accent: 'green' | 'navy' | 'gold' | 'rose';
  logo?: string;
  hero?: string;
  summary: string;
  about: string;
  focus: string[];
  impact: ImpactStat[];
  revenueNote?: string;
  images: string[];
  highlights: string[];
  partners?: string[];
}

export const ventures: Venture[] = [
  {
    slug: 'khajoor',
    name: 'Project Khajoor',
    tagline: 'A zero-waste, women-led venture brewing good things from discarded seeds.',
    area: 'Sustainability',
    founded: '2024',
    status: 'current',
    accent: 'gold',
    logo: '/images/projects/khajoor-logo.png',
    hero: '/images/projects/khajoor-coffee.png',
    summary:
      'We collect discarded date seeds and pulp and turn them into caffeine-free coffee, natural scrubs and diabetic-safe cakes, putting the returns back into farmer incomes and women-run packaging units.',
    about:
      'Khajoor started with a simple question: what if the seeds people throw away could become something good? Today it is a full circular loop, nothing is wasted, everything is repurposed, and the people who make it earn a fair wage from home.',
    focus: [
      'Date seeds become caffeine-free coffee',
      'Coffee grounds become exfoliating scrubs',
      'Date pulp becomes diabetic-safe cakes',
      'Women-led, home-based packaging at a fair wage',
    ],
    impact: [
      { value: '200 kg+', label: 'Agri-waste recycled' },
      { value: '11,800+', label: 'Engagements' },
      { value: '30+', label: 'Women trained' },
      { value: '22%', label: 'Sample to paid conversion' },
    ],
    revenueNote: 'Profitable from early sales, with revenue reinvested straight back into the community.',
    images: [
      '/images/projects/khajoor-dates.png',
      '/images/projects/khajoor-products.png',
      '/images/projects/khajoor-team.png',
      '/images/projects/khajoor-cup.jpg',
    ],
    highlights: [
      'Best Paper, Enactus Global Research Network',
      'Special Mention, Envision 2026 at IIT Roorkee',
      'Second Position, The Visionary\u2019s Arena',
    ],
    partners: ['Enactus IIT Roorkee'],
  },
  {
    slug: 'dhaan',
    name: 'Project Dhaan',
    tagline: 'Turning rice husk waste into reusable, everyday products people love.',
    area: 'Sustainability',
    founded: '2024',
    status: 'current',
    accent: 'green',
    hero: '/images/project_dhaan.jpeg',
    summary:
      'Dhaan converts rice husk, a by-product often burned as waste, into durable and good-looking reusable mugs that make sustainable living easy.',
    about:
      'India burns millions of tonnes of agricultural residue every year. Dhaan takes one of those by-products, rice husk, and gives it a second life as products people actually want to use, proving that being sustainable does not have to mean giving things up.',
    focus: [
      'Rice husk waste becomes reusable mugs',
      'Durable, light and genuinely good-looking',
      'Recipe cards that make the product part of daily life',
      'A B2B catalogue for institutions and events',
    ],
    impact: [
      { value: '30+', label: 'Mugs sold' },
      { value: '1,000', label: 'Mug B2B order' },
      { value: '431+', label: 'Community followers' },
      { value: '6 kg', label: 'CO2e avoided so far' },
    ],
    revenueNote: 'Early sales proved the idea, and a first 1,000-mug institutional order points to real growth ahead.',
    images: ['/images/project_dhaan.jpeg', '/images/photos/photo-26.jpg', '/images/photos/photo-25.jpg'],
    highlights: ['Winner, Convectus 2026 Business Plan', 'First institutional B2B order secured'],
  },
  {
    slug: 'sahaay',
    name: 'Project Sahaay',
    tagline: 'Mental health and well-being, made approachable and sustainable.',
    area: 'Well-being',
    founded: '2025',
    status: 'current',
    accent: 'rose',
    hero: '/images/photos/photo-03.jpg',
    summary:
      'Sahaay promotes emotional well-being through community outreach and a self-funding model of reflection journals and sticker sheets, with profits going back into community welfare.',
    about:
      'Sahaay runs on a simple idea: awareness, action and impact. Conversations about mental health only matter if they lead to real support, so every campaign is paired with on-ground outreach and accessible tools people can actually use.',
    focus: [
      'Outreach in schools, old-age homes and children\u2019s homes',
      'Reflection journals and sticker sheets',
      'Mental Health Week and awareness drives',
      'Self-funding model that gives back to communities',
    ],
    impact: [
      { value: '850+', label: 'Lives impacted' },
      { value: '6', label: 'Outreach drives' },
      { value: '70+', label: 'Journals & stickers sold' },
      { value: '10+', label: 'People employed' },
    ],
    revenueNote: 'Healthy margins on every journal, with the money flowing back into community welfare.',
    images: ['/images/photos/photo-15.jpg', '/images/photos/photo-17.jpg', '/images/photos/photo-19.jpg'],
    highlights: ['Top 10 Finalist, Zakir Hussain College Pitch', 'AI wellness platform in the works'],
    partners: ['Prabhav Trust Foundation', 'Human Peace Foundation', 'Salaam Baalak Trust', 'SKV Wazirpur'],
  },
  {
    slug: 'vidyuta',
    name: 'Project Vidyuta',
    tagline: 'Old batteries, new power. Affordable energy for people who need it most.',
    area: 'Clean Energy',
    founded: '2024',
    status: 'current',
    accent: 'navy',
    logo: '/images/projects/vidyuta-logo.png',
    hero: '/images/projects/vidyuta-product.png',
    summary:
      'Vidyuta refurbishes discarded lithium-ion cells into solar-assisted power banks for street vendors, students and anyone living without reliable electricity.',
    about:
      'Millions of usable battery cells get thrown away every year, and millions of people still lack steady power. Vidyuta connects those two problems, rebuilding old cells into safe, solar-charged power banks that are cheap, clean and built to last.',
    focus: [
      'Collect and test discarded lithium-ion cells',
      'Rebuild usable cells into power banks',
      'Solar charging with a built-in safety system',
      'Real-time battery indicator and multiple ports',
    ],
    impact: [
      { value: '10,000+', label: 'People reached' },
      { value: '2,500+', label: 'Indirectly impacted' },
      { value: '100+', label: 'Batteries refurbished' },
      { value: '91%', label: 'Round-trip efficiency' },
    ],
    revenueNote: 'Funded so far through business-plan wins, with early use cases pointing to a large reuse market.',
    images: ['/images/projects/vidyuta-detail.png', '/images/projects/vidyuta-usecase.png', '/images/projects/vidyuta-product.png'],
    highlights: ['Raised 1 lakh+ through B-Plan competitions', 'Partnered with 3 incubators', '20+ volunteers trained'],
  },
];

export const pastVentures: Venture[] = [
  {
    slug: 'dharini',
    name: 'Project Dharini',
    tagline: 'Inclusive menstrual and sexual health for every body.',
    area: 'Health & Inclusion',
    founded: '2017',
    status: 'past',
    accent: 'rose',
    hero: '/images/photos/photo-21.jpg',
    summary:
      'Our oldest project broke taboos around menstrual and sexual health and built WeFlo, a platform connecting menstruators with pride-friendly doctors and counsellors.',
    about:
      'Dharini ran for years as the heart of Enactus IGDTUW, providing affordable, inclusive health services and starting honest conversations in communities that rarely had them.',
    focus: ['Affordable, inclusive health services', 'WeFlo consultation platform', 'Awareness sessions in villages and colleges'],
    impact: [
      { value: '4,000+', label: 'Women impacted' },
      { value: '2,000+', label: 'Children reached' },
      { value: '100+', label: 'Transgender folks supported' },
    ],
    images: ['/images/photos/photo-21.jpg', '/images/photos/photo-22.jpg'],
    highlights: ['Our longest-running project'],
  },
  {
    slug: 'adva',
    name: 'Project Adva',
    tagline: 'Affordable, biodegradable water filters for all.',
    area: 'Clean Water',
    founded: '2021',
    status: 'past',
    accent: 'navy',
    hero: '/images/photos/photo-24.jpg',
    summary:
      'Adva designed a low-cost, biodegradable clay water filter, made with local potter communities, to bring clean drinking water to those who needed it.',
    about:
      'Built around the 6 Es, efficiency, easy usage, economical, eco-friendly, easy production and entrepreneurship, Adva turned a hard problem into a simple, local solution.',
    focus: ['Biodegradable clay filter', 'Sourced from local potters', 'Multi-layer natural filtration'],
    impact: [
      { value: '240+', label: 'Lives impacted' },
      { value: '8-10 L', label: 'Filtered per use' },
    ],
    images: ['/images/photos/photo-24.jpg', '/images/photos/photo-25.jpg'],
    highlights: ['Made with potter communities'],
  },
  {
    slug: 'aveksha',
    name: 'Project Aveksha',
    tagline: 'Sustainable care for stray and injured animals.',
    area: 'Animal Welfare',
    founded: '2022',
    status: 'past',
    accent: 'green',
    hero: '/images/photos/photo-04.jpg',
    summary:
      'Aveksha made eco-friendly products for stray and injured animals, earthen pots, handmade toys, clothes and mattresses, crafted by marginalized communities.',
    about:
      'Aveksha cared for animals and people at the same time, creating livelihoods while looking after the well-being of strays.',
    focus: ['Eco-friendly animal care products', 'Crafted by marginalized communities', 'Threefold development'],
    impact: [{ value: '3', label: 'Kinds of impact in one model' }],
    images: ['/images/photos/photo-04.jpg'],
    highlights: ['Care for animals, livelihoods for people'],
  },
  {
    slug: 'prakrikala',
    name: 'Project Prakrikala',
    tagline: 'Upcycling urban waste into useful, beautiful things.',
    area: 'Waste Management',
    founded: '2023',
    status: 'past',
    accent: 'gold',
    hero: '/images/photos/photo-26.jpg',
    summary:
      'Prakrikala tackled cloth, plastic, paper and bio-waste, turning urban refuse into upcycled goods made by under-represented communities.',
    about:
      'A clean-up and a livelihood rolled into one, Prakrikala showed how everyday waste can become something worth keeping.',
    focus: ['Four waste streams reused', 'Community-crafted upcycling', 'Socio-economic development'],
    impact: [{ value: '4', label: 'Waste streams reused' }],
    images: ['/images/photos/photo-26.jpg', '/images/photos/photo-27.jpg'],
    highlights: ['Built on circular-economy thinking'],
  },
];

export const allVentures = [...ventures, ...pastVentures];

export const orgStats = [
  { value: 1300, suffix: '+', label: 'Students Engaged' },
  { value: 850, suffix: '+', label: 'Lives Impacted' },
  { value: 6, suffix: '', label: 'Project Verticals' },
  { value: 8, suffix: '', label: 'Functional Teams' },
  { value: 10, suffix: '+', label: 'Partners & Collaborators' },
];

export const achievements = [
  { year: '2016', title: 'National Rookie League, Winners', detail: 'First all-girls team ever to win the Enactus India Nationals Rookie League, in Mumbai.' },
  { year: '2026', title: 'Convectus 2026, 1st Position', detail: 'Project Dhaan won the Convectus 2026 Business Plan Competition.' },
  { year: '2026', title: 'Best Paper Award', detail: 'Project Khajoor recognised at the Enactus Global Research Network Conference.' },
  { year: '2026', title: 'Envision 2026, IIT Roorkee, Top 20', detail: 'Project Khajoor reached the finals and earned a Special Mention.' },
  { year: '2026', title: 'The Visionary\u2019s Arena, 2nd Position', detail: 'Project Khajoor, hosted by SGND Khalsa College, Delhi University.' },
];

export interface EventItem {
  name: string;
  kind: string;
  when: string;
  description: string;
  stats: string[];
  image: string;
}

export const events: EventItem[] = [
  {
    name: 'CaseForge 2026',
    kind: 'Flagship Case Competition',
    when: '2026',
    description:
      'Our biggest event of the year. A pan-India case competition where students crack real business problems, backed by a pro bootcamp and an offline finale judged by industry experts.',
    stats: ['1,300+ registrations', 'Pan-India participation', 'Bootcamp + offline finale'],
    image: '/images/photos/photo-13.jpg',
  },
  {
    name: 'Under 25 Summit',
    kind: 'Student Engagement',
    when: '2025',
    description:
      'We took Enactus IGDTUW to one of the country\u2019s biggest youth platforms, showcasing our work and connecting with thousands of students.',
    stats: ['1,000+ registrations driven', 'Massive student reach', 'New collaborations'],
    image: '/images/photos/photo-14.jpg',
  },
  {
    name: 'Talent Hunt Fest',
    kind: 'Project Sahaay',
    when: 'Nov 2025',
    description:
      'A safe, fun stage for students to express themselves through performance, building confidence and starting real conversations about mental health.',
    stats: ['Creative performances', 'Student well-being focus', 'Packed turnout'],
    image: '/images/photos/photo-07.jpg',
  },
  {
    name: 'Mental Health Picnic',
    kind: 'Project Sahaay x Prabhav Trust',
    when: 'Apr 2026',
    description:
      'A day out built around games, group activities and honest conversations, proving that looking after your mind can also be joyful.',
    stats: ['Interactive games', 'Open discussions', 'Stress-relief sessions'],
    image: '/images/photos/photo-18.jpg',
  },
  {
    name: 'Community Outreach Drives',
    kind: 'Field Visits',
    when: 'Year-round',
    description:
      'From old-age homes to children\u2019s homes and schools, our teams show up in person, listen, and run hands-on sessions that actually help.',
    stats: ['Old-age & children\u2019s homes', 'School workshops', 'On-ground impact'],
    image: '/images/photos/photo-03.jpg',
  },
  {
    name: 'Orientation & Recruitment',
    kind: 'On Campus',
    when: 'Annually',
    description:
      'Every year we welcome a new batch of curious, driven students and show them what entrepreneurial action really looks like.',
    stats: ['New member intake', 'Campus buzz', 'Where the journey begins'],
    image: '/images/photos/photo-01.jpg',
  },
];

export const partners = [
  { name: 'Google Gemini', logo: '/images/partners/gemini.png' },
  { name: 'Perplexity', logo: '/images/partners/perplexity.png' },
  { name: 'Perfero Perfumes', logo: '/images/partners/perfero.png' },
  { name: 'Enactus IIT Roorkee', logo: '/images/partners/enactus-iitr.png' },
  { name: 'Comet', logo: '' },
  { name: 'Under 25', logo: '' },
  { name: 'One Take', logo: '' },
  { name: 'Prabhav Trust Foundation', logo: '' },
  { name: 'Human Peace Foundation', logo: '' },
  { name: 'Salaam Baalak Trust', logo: '' },
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

// Photo pool for collages and the gallery
export const photoPool = Array.from({ length: 34 }, (_, i) => `/images/photos/photo-${String(i + 1).padStart(2, '0')}.jpg`);
