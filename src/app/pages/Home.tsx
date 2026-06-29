import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Rocket, Users, Trophy, Quote } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import DisplayHeading from '../components/DisplayHeading';
import Collage from '../components/Collage';
import PhotoMarquee from '../components/PhotoMarquee';
import Spotlight from '../components/Spotlight';
import { ventures, orgStats, achievements, partners, photoPool } from '../data/content';

const heroStats = [
  { value: '850+', label: 'Lives impacted' },
  { value: '6', label: 'Live projects' },
  { value: '10+', label: 'Years strong' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen items-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-team.jpg" alt="Team Enactus IGDTUW" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/92 via-navy-deep/72 to-navy-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-navy-deep/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="glass-dark mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-enactus-yellow" />
              <span className="eyebrow text-enactus-yellow">Enactus IGDTUW</span>
            </div>
            <h1 className="display mb-6 text-5xl text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Turning ideas <br />
              into <span className="text-enactus-yellow">impact</span>
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              We are students at India's first all-women technical university, using business ideas to solve
              real problems for real communities.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/ventures"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-enactus-yellow px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy-deep transition-colors hover:bg-white"
              >
                Explore ventures <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                Join us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* glass stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute inset-x-0 bottom-0 z-10"
        >
          <div className="mx-auto max-w-7xl px-6 pb-8">
            <div className="glass-dark inline-flex flex-wrap gap-x-10 gap-y-3 rounded-2xl px-7 py-4">
              {heroStats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span className="font-display text-2xl text-enactus-yellow">{s.value}</span>
                  <span className="text-xs uppercase tracking-wider text-white/70">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============ VISION ============ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-4">Why we exist</div>
            <DisplayHeading lead="Young leaders," accent="real change" size="lg" className="mb-6" />
            <p className="mb-6 font-heading text-xl font-semibold leading-snug text-navy-accent md:text-2xl">
              We use innovation and business skills so that more people can thrive in a sustainable world.
            </p>
            <p className="mb-4 leading-relaxed text-foreground-secondary">
              Since 2015, Enactus IGDTUW has turned student ideas into real social, environmental and economic
              change. In 2016 we became the{' '}
              <span className="font-semibold text-navy-accent">first all-girls team ever</span> to win the Enactus
              India Nationals Rookie League.
            </p>
            <p className="leading-relaxed text-foreground-secondary">
              Today our project teams and functional teams keep doing the same thing: spotting a problem,
              building a fix, and measuring whether it actually helped.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Collage
              images={[
                '/images/team/team-group.jpg',
                photoPool[0],
                photoPool[2],
                photoPool[12],
                photoPool[3],
              ]}
              className="aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* ============ IMPACT IN NUMBERS ============ */}
      <section className="px-4 pb-20 md:pb-28">
        <div className="surface-dark spotlight relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-16 text-white md:py-20">
          <Spotlight />
          <div className="relative z-10 mb-14 text-center">
            <div className="eyebrow mb-3 text-enactus-yellow">Our impact, 2025 / 26</div>
            <DisplayHeading lead="The numbers" accent="so far" size="lg" align="center" light />
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
            {orgStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="display mb-2 text-4xl text-enactus-yellow md:text-5xl">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-wider text-white/70 md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <div className="eyebrow mb-3">What we do</div>
            <DisplayHeading lead="Build." accent="Lead. Compete." size="md" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: <Rocket className="h-9 w-9" />, title: 'Build', text: 'We start ventures that solve real social, environmental and economic problems, and run them like actual businesses.' },
              { icon: <Users className="h-9 w-9" />, title: 'Lead', text: 'We grow into confident changemakers through hands-on entrepreneurship, teamwork and mentorship.' },
              { icon: <Trophy className="h-9 w-9" />, title: 'Compete', text: 'We take our ideas to national and global stages and test them against the very best.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass hover-lift rounded-3xl p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-enactus-yellow/20 text-gold-accent">
                  {item.icon}
                </div>
                <h3 className="mb-3 font-heading text-2xl font-extrabold text-navy-accent">{item.title}</h3>
                <p className="leading-relaxed text-foreground-secondary">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED VENTURES ============ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="eyebrow mb-3">Our ventures</div>
              <DisplayHeading lead="Ideas that" accent="do something" size="md" />
            </div>
            <Link
              to="/ventures"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-navy-accent transition-colors hover:text-gold-accent"
            >
              See the full timeline <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {ventures.map((v, i) => (
              <motion.div
                key={v.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link to={`/ventures/${v.slug}`} className="group glass hover-lift block overflow-hidden rounded-3xl">
                  <div className="relative h-40 overflow-hidden">
                    {v.hero ? (
                      <img src={v.hero} alt={v.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="surface-dark flex h-full w-full items-center justify-center">
                        <span className="font-display text-3xl text-white/20">{v.name.split(' ').pop()}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold-accent">{v.area}</span>
                    <h3 className="mt-1 font-heading text-lg font-extrabold text-navy-accent">{v.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-foreground-secondary">{v.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-navy-accent">
                      View <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LIFE AT ENACTUS (animated collage) ============ */}
      <section className="pb-20">
        <div className="mx-auto mb-10 max-w-7xl px-6">
          <div className="eyebrow mb-3">Life at Enactus</div>
          <DisplayHeading lead="Out in the field," accent="on the stage" size="md" />
        </div>
        <div className="space-y-4">
          <PhotoMarquee images={photoPool.slice(0, 12)} />
          <PhotoMarquee images={photoPool.slice(12, 24)} reverse />
        </div>
      </section>

      {/* ============ ACHIEVEMENTS ============ */}
      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <div className="eyebrow mb-3">Recognition</div>
            <DisplayHeading lead="A few things" accent="we are proud of" size="md" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="glass rounded-2xl p-6"
              >
                <div className="display mb-2 text-lg leading-none text-gold-accent">{a.year}</div>
                <h3 className="mb-1 font-heading font-bold leading-snug text-navy-accent">{a.title}</h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">{a.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNERS ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="eyebrow mb-3">The people in our corner</div>
          <h2 className="mb-10 font-heading text-2xl font-extrabold text-navy-accent md:text-3xl">
            Partners &amp; collaborators
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {partners.map((p) => (
              <div
                key={p.name}
                className="glass flex h-24 items-center justify-center rounded-2xl px-4"
              >
                {p.logo ? (
                  <img src={p.logo} alt={p.name} className="max-h-12 max-w-[80%] object-contain" />
                ) : (
                  <span className="text-sm font-semibold text-navy-accent">{p.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="px-4 pb-20">
        <div className="surface-dark mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-6 py-16 text-center text-white md:py-20">
          <Quote className="mx-auto mb-6 h-12 w-12 text-enactus-yellow" />
          <p className="mx-auto max-w-3xl font-heading text-2xl font-semibold leading-snug md:text-3xl">
            "Enactus IGDTUW gives students a real platform to build their skills and drive sustainable change
            through innovation and entrepreneurship."
          </p>
          <div className="mt-8 text-sm font-bold uppercase tracking-wider text-enactus-yellow">Dr. (Mrs.) Amita Dev</div>
          <div className="text-sm text-white/60">Vice Chancellor, IGDTUW</div>
        </div>
      </section>

      {/* ============ JOIN CTA ============ */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:py-20">
            <div className="eyebrow mb-3">Recruitment</div>
            <DisplayHeading lead="Come build" accent="something real" size="xl" align="center" />
            <p className="mx-auto mb-10 mt-6 max-w-2xl text-lg text-foreground-secondary md:text-xl">
              You do not need a perfect plan or a business background. You just need to care about a problem and be
              ready to work on it with people who feel the same.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-accent px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-navy-deep"
              >
                Become an Enactor <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-accent/30 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-navy-accent transition-colors hover:bg-navy-accent hover:text-white"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
