import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Lightbulb, Flame, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import Collage from '../components/Collage';
import WorldCupHighlight from '../components/WorldCupHighlight';
import { photoPool } from '../data/content';

const values = [
  { icon: <ShieldCheck className="h-7 w-7" />, title: 'Integrity', text: 'We hold ourselves to high standards of honesty in everything we do.' },
  { icon: <Lightbulb className="h-7 w-7" />, title: 'Innovation', text: 'We solve real problems with creativity and a builder mindset.' },
  { icon: <Flame className="h-7 w-7" />, title: 'Passion', text: 'We are driven by a genuine wish to make things better for people.' },
  { icon: <Users className="h-7 w-7" />, title: 'Together', text: 'We build as a team, with our communities and our partners.' },
];

const journey = [
  { year: '2015', text: 'Enactus IGDTUW is founded at India\u2019s first all-women technical university.' },
  { year: '2016', text: 'First all-girls team ever to win the Enactus India Nationals Rookie League, in Mumbai.' },
  { year: '2025', text: 'Best Paper Award at the EGRN Enactus World Cup in Bangkok, Sep 2025.' },
  { year: '2015 to 23', text: 'Eight years of projects across menstrual health, clean water, animal welfare and waste, touching thousands of lives.' },
  { year: '2024 to 26', text: 'A new wave of ventures, Khajoor, Dhaan, Sahaay and Vidyuta, takes our impact further.' },
];

const globalStats = [
  { v: '33', l: 'Countries' },
  { v: '1,000+', l: 'Campus Programs' },
  { v: '42,450', l: 'Student Members' },
  { v: '13.1M', l: 'Lives Impacted' },
];

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="Who We Are"
        lead="A team with"
        accent="a mission"
        subtitle="Students at IGDTUW using entrepreneurial action to create real and lasting impact."
        images={[photoPool[0], photoPool[1], photoPool[12], photoPool[2], photoPool[13]]}
      />

      {/* Mission & Vision */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-enactus-yellow/10 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-navy-accent/10 blur-3xl" />
          <div className="absolute left-1/2 top-8 h-px w-[min(90%,42rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-enactus-yellow/35 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">Why we exist</div>
            <DisplayHeading lead="Mission &" accent="vision" size="md" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              { icon: <Target className="h-7 w-7" />, title: 'Our Mission', text: 'To inspire the next generation of leaders to use innovation and entrepreneurship to take on real social, environmental and economic problems, and improve life for the communities we work with.' },
              { icon: <Eye className="h-7 w-7" />, title: 'Our Vision', text: 'A world where young leaders everywhere use innovation and business skills so that all people can thrive in a sustainable world.' },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel group relative overflow-hidden rounded-[2rem] p-9 transition-all duration-500 md:p-10"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-enactus-yellow/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/50 bg-white/30 text-gold-accent shadow-sm backdrop-blur-sm">
                  {c.icon}
                </div>
                <h2 className="relative mb-4 font-heading text-2xl font-extrabold text-navy-accent md:text-[1.65rem]">{c.title}</h2>
                <p className="relative text-base leading-relaxed text-foreground-secondary">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WorldCupHighlight />

      {/* Our Story */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="eyebrow mb-3">Our story</div>
            <DisplayHeading lead="Strong-headed" accent="changemakers" size="md" className="mb-6" />
            <p className="mb-6 leading-relaxed text-foreground-secondary">
              As students of India's first all-women technical university, we want to empower communities through
              entrepreneurship. We believe technology plus entrepreneurial action can make a real difference for
              everyone.
            </p>
            <div className="space-y-5 border-l-2 border-enactus-yellow/50 pl-6">
              {journey.map((j) => (
                <div key={j.year}>
                  <div className="display mb-1 text-xl leading-none text-gold-accent">{j.year}</div>
                  <p className="text-sm leading-relaxed text-foreground-secondary">{j.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Collage
              images={['/images/team/team-group.jpg', photoPool[1], photoPool[13], photoPool[19], photoPool[14]]}
              className="aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <div className="eyebrow mb-3">What drives us</div>
            <DisplayHeading lead="Our core" accent="values" size="md" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass hover-lift rounded-3xl p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-accent text-enactus-yellow">
                  {v.icon}
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-navy-accent">{v.title}</h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="px-4 pb-24">
        <div className="surface-dark mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-20 text-center text-white md:py-24">
          <div className="eyebrow mb-3 text-enactus-yellow">Global network</div>
          <DisplayHeading lead="Part of something" accent="bigger" size="md" align="center" light />
          <p className="mx-auto mb-14 mt-6 max-w-3xl leading-relaxed text-white/75">
            Enactus IGDTUW is one chapter of Enactus, the world's largest experiential learning platform that grows
            leaders with a head for business and a heart for the world.
          </p>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {globalStats.map((s) => (
              <div key={s.l}>
                <div className="display mb-2 text-4xl text-enactus-yellow md:text-5xl">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
          <a
            href="https://enactus.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block rounded-full bg-enactus-yellow px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy-deep transition-colors hover:bg-white"
          >
            Visit Enactus Global
          </a>
        </div>
      </section>
    </main>
  );
}
