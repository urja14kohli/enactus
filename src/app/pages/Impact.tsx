import { motion } from 'motion/react';
import { Users, Leaf, IndianRupee, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import PhotoMarquee from '../components/PhotoMarquee';
import AchievementsCarousel from '../components/AchievementsCarousel';
import { orgStats, achievements, photoPool } from '../data/content';

const pillars = [
  {
    icon: <Users className="h-7 w-7" />,
    title: 'Social Impact',
    points: [
      '850+ people directly impacted',
      'Outreach in schools, old-age homes and children\u2019s homes',
      'Mental health support through Project Sahaay',
      'Everyday essentials donated to those who need them',
    ],
  },
  {
    icon: <IndianRupee className="h-7 w-7" />,
    title: 'Economic Impact',
    points: [
      'Money our projects earn goes back into the community',
      'Project Dhaan landed its first 1,000-mug order',
      '10+ people earning through our production work',
      'Several projects already running at a profit',
    ],
  },
  {
    icon: <Leaf className="h-7 w-7" />,
    title: 'Environmental Impact',
    points: [
      '200 kg+ agri-waste given a second life through Khajoor',
      'Rice husk waste turned into reusable products by Dhaan',
      '100+ lithium-ion batteries refurbished by Vidyuta',
      'Circular, zero-waste thinking across the board',
    ],
  },
];

export default function Impact() {
  return (
    <main>
      <PageHero
        eyebrow="Our Impact, 2025 / 26"
        lead="Change you"
        accent="can measure"
        subtitle="We judge every project by one thing: did it actually make life better for someone? Here is what that looked like this year."
        images={[photoPool[2], photoPool[18], photoPool[3], photoPool[14], photoPool[19]]}
      />

      {/* Numbers */}
      <section className="px-4 py-16 md:py-20">
        <div className="surface-dark mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 overflow-hidden rounded-[2rem] px-6 py-14 text-white md:grid-cols-3 lg:grid-cols-5">
          {orgStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="display mb-2 text-4xl text-enactus-yellow md:text-5xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs uppercase tracking-wider text-white/70 md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <div className="eyebrow mb-3">How we create value</div>
            <DisplayHeading lead="Three kinds" accent="of impact" size="md" />
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass hover-lift rounded-3xl p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-enactus-yellow/20 text-gold-accent">
                  {p.icon}
                </div>
                <h3 className="mb-4 font-heading text-xl font-extrabold text-navy-accent">{p.title}</h3>
                <ul className="space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-foreground-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-enactus-yellow" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo collage */}
      <section className="pb-16 md:pb-24">
        <PhotoMarquee images={photoPool.slice(0, 12)} />
      </section>

      {/* Achievements */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 max-w-2xl md:mb-10">
            <div className="eyebrow mb-3">Recognition</div>
            <DisplayHeading lead="A few wins" accent="along the way" size="md" />
          </div>
          <AchievementsCarousel items={achievements} />
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 pb-24">
        <div className="surface-dark mx-auto max-w-4xl overflow-hidden rounded-[2rem] px-6 py-16 text-center text-white md:py-20">
          <Quote className="mx-auto mb-6 h-12 w-12 text-enactus-yellow" />
          <p className="mx-auto max-w-3xl font-heading text-2xl font-semibold leading-snug md:text-3xl">
            "The projects by Enactus IGDTUW lift up communities and improve livelihoods, while shaping students into
            aware and responsible entrepreneurs."
          </p>
          <div className="mt-8 text-sm font-bold uppercase tracking-wider text-enactus-yellow">Prof. Nidhi Goel</div>
          <div className="text-sm text-white/60">Faculty Advisor, Enactus IGDTUW</div>
        </div>
      </section>
    </main>
  );
}
