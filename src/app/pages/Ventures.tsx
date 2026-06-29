import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import { allVentures, ventures, type Venture } from '../data/content';

const accentMap: Record<Venture['accent'], { text: string; dot: string; chip: string; ring: string }> = {
  green: { text: 'text-emerald-700', dot: 'bg-emerald-500', chip: 'bg-emerald-500/10 text-emerald-700', ring: 'ring-emerald-500/30' },
  navy: { text: 'text-navy-accent', dot: 'bg-navy-accent', chip: 'bg-navy-accent/10 text-navy-accent', ring: 'ring-navy-accent/25' },
  gold: { text: 'text-gold-accent', dot: 'bg-enactus-yellow', chip: 'bg-enactus-yellow/15 text-gold-accent', ring: 'ring-enactus-yellow/40' },
  rose: { text: 'text-rose-700', dot: 'bg-rose-500', chip: 'bg-rose-500/10 text-rose-700', ring: 'ring-rose-500/30' },
};

const timeline = [...allVentures].sort((a, b) => Number(a.founded) - Number(b.founded));

function TimelineCard({ v, index }: { v: Venture; index: number }) {
  const a = accentMap[v.accent];
  const left = index % 2 === 0;
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-12">
      {/* node on the line */}
      <div className="absolute left-4 top-7 z-10 -translate-x-1/2 md:left-1/2">
        <span className={`block h-4 w-4 rounded-full ${a.dot} ring-4 ring-[var(--background)] shadow`} />
      </div>

      {/* spacer for the empty side on desktop */}
      {!left && <div className="hidden md:block" />}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
        className={`ml-12 md:ml-0 ${left ? 'md:pr-2' : 'md:col-start-2 md:pl-2'}`}
      >
        <Link
          to={`/ventures/${v.slug}`}
          className={`group glass hover-lift block overflow-hidden rounded-3xl ring-1 ${a.ring}`}
        >
          <div className="relative h-44 overflow-hidden sm:h-52">
            {v.hero ? (
              <img
                src={v.hero}
                alt={v.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="surface-dark flex h-full w-full items-center justify-center">
                <span className="font-display text-5xl text-white/20">{v.name.split(' ').pop()}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 font-display text-sm tracking-wide text-navy-accent backdrop-blur">
              {v.founded}
            </span>
            {v.status === 'current' && (
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> Active
              </span>
            )}
            {v.logo && (
              <div className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 p-1.5 shadow backdrop-blur">
                <img src={v.logo} alt="" className="h-full w-full object-contain" />
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${a.chip}`}>{v.area}</span>
            </div>
            <h3 className="font-heading text-2xl font-extrabold text-navy-accent">{v.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground-secondary">{v.tagline}</p>
            <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-bold ${a.text}`}>
              View the project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function Ventures() {
  return (
    <main>
      <PageHero
        eyebrow="Our Ventures"
        lead="Ideas that"
        accent="grew up"
        subtitle="Every project started as a student noticing a problem and deciding to do something about it. Here is how our ventures have grown over the years. Tap any one to see the full story."
        images={ventures.map((v) => v.hero!).filter(Boolean)}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="eyebrow mb-3">The timeline</p>
            <DisplayHeading lead="From first idea" accent="to real impact" align="center" />
          </div>

          <div className="relative">
            {/* center line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-navy-accent/20 to-transparent md:left-1/2" />
            <div className="space-y-12 md:space-y-16">
              {timeline.map((v, i) => (
                <TimelineCard key={v.slug} v={v} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-12 text-center md:py-16">
            <p className="eyebrow mb-3">Got an idea?</p>
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold text-navy-accent md:text-4xl">
              The next venture on this timeline could be yours.
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-accent px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-navy-deep"
            >
              Start something with us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
