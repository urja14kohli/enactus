import { motion } from 'motion/react';
import { Users, Leaf, IndianRupee, Quote, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import Wedge from '../components/Wedge';
import { orgStats, achievements } from '../data/content';

const pillars = [
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Social Impact',
    points: [
      '850+ beneficiaries directly impacted',
      'Outreach across schools, old-age homes & children\u2019s homes',
      'Mental health interventions through Project Sahaay',
      '\u20B91,500+ worth of essentials donated',
    ],
  },
  {
    icon: <IndianRupee className="w-7 h-7" />,
    title: 'Economic Impact',
    points: [
      '\u20B932,607+ recorded revenue across projects',
      'Project Sahaay: 51% profit margin',
      'Project Dhaan: 1,000-mug institutional order',
      '10+ individuals employed through production',
    ],
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: 'Environmental Impact',
    points: [
      '200 kg+ agri-waste upcycled via Khajoor',
      'Rice husk waste repurposed via Dhaan',
      '100+ Li-ion batteries refurbished via Vidyuta',
      'Circular economy practices promoted',
    ],
  },
];

export default function Impact() {
  return (
    <div>
      <PageHero
        eyebrow="Our Impact · 2025–26"
        lead="Measurable"
        accent="Change"
        subtitle="Every initiative is measured by the lives it improves and the systems it makes more sustainable."
      />

      {/* Numbers */}
      <section className="bg-navy-accent text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6">
          {orgStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="display text-4xl md:text-5xl text-enactus-yellow mb-2">
                <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-3">How We Create Value</div>
            <DisplayHeading lead="Three Dimensions" accent="Of Impact" size="md" />
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border-color rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-enactus-yellow/15 text-gold-accent flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-navy-accent mb-4">{p.title}</h3>
                <ul className="space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-foreground-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-enactus-yellow shrink-0 mt-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Wedge color="secondary" direction="down-left" />

      {/* Achievements timeline */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-3">Recognition</div>
            <DisplayHeading lead="A Track Record" accent="Of Excellence" size="md" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-border-color rounded-2xl p-6 flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-navy-accent text-enactus-yellow flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="display text-lg text-gold-accent leading-none mb-1">{a.year}</div>
                  <h3 className="font-heading font-bold text-navy-accent leading-snug mb-1">{a.title}</h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">{a.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-navy-deep text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-12 h-12 text-enactus-yellow mx-auto mb-6" />
          <p className="font-heading font-semibold text-2xl md:text-3xl leading-snug mb-8">
            “The projects undertaken by Enactus IGDTUW uplift communities and improve their livelihoods while honing
            students into socially aware and responsible entrepreneurs.”
          </p>
          <div className="text-enactus-yellow font-bold uppercase tracking-wider text-sm">Prof. Nidhi Goel</div>
          <div className="text-white/60 text-sm">Faculty Advisor, Enactus IGDTUW</div>
        </div>
      </section>
    </div>
  );
}
