import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import PhotoMarquee from '../components/PhotoMarquee';
import { events, photoPool } from '../data/content';

export default function Events() {
  const [featured, ...rest] = events;

  return (
    <main>
      <PageHero
        eyebrow="Events & Activities"
        lead="Where it all"
        accent="comes alive"
        subtitle="Competitions, summits, outreach drives and the everyday moments in between. This is the year as we lived it, out in the open and on the ground."
        images={events.map((e) => e.image)}
      />

      {/* Featured event */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass hover-lift grid overflow-hidden rounded-3xl md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img src={featured.image} alt={featured.name} className="h-full w-full object-cover" />
              <span className="absolute left-5 top-5 rounded-full bg-enactus-yellow px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-navy-deep">
                Flagship
              </span>
            </div>
            <div className="p-8 md:p-10">
              <p className="eyebrow mb-2">{featured.kind}</p>
              <h2 className="font-heading text-3xl font-extrabold text-navy-accent md:text-4xl">{featured.name}</h2>
              <p className="mt-4 leading-relaxed text-foreground-secondary">{featured.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.stats.map((s) => (
                  <span key={s} className="rounded-full bg-navy-accent/8 px-3 py-1.5 text-sm font-medium text-navy-accent">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event grid */}
      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">Throughout the year</p>
            <DisplayHeading lead="More than just" accent="competitions" align="center" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((e, i) => (
              <motion.article
                key={e.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass hover-lift group flex flex-col overflow-hidden rounded-3xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-navy-accent backdrop-blur">
                    <Calendar className="h-3 w-3" /> {e.when}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow mb-1.5">{e.kind}</p>
                  <h3 className="font-heading text-xl font-extrabold text-navy-accent">{e.name}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground-secondary">{e.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {e.stats.map((s) => (
                      <span key={s} className="rounded-full bg-navy-accent/8 px-2.5 py-1 text-xs font-medium text-navy-accent">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Animated photo collage */}
      <section className="py-20">
        <div className="mx-auto mb-10 max-w-6xl px-6 text-center">
          <p className="eyebrow mb-3">In the moment</p>
          <h2 className="font-heading text-2xl font-extrabold text-navy-accent md:text-3xl">Snapshots from the year</h2>
        </div>
        <div className="space-y-4">
          <PhotoMarquee images={photoPool.slice(0, 12)} />
          <PhotoMarquee images={photoPool.slice(12, 24)} reverse />
        </div>
      </section>
    </main>
  );
}
