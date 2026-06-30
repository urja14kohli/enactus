import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import PhotoMarquee from '../components/PhotoMarquee';
import { events, photoPool, type EventItem } from '../data/content';

function eventPhotos(e: EventItem) {
  return e.images?.length ? e.images : [e.image];
}

function FeaturedEventImage({ event }: { event: EventItem }) {
  const photos = eventPhotos(event);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const id = setInterval(() => setPhotoIndex((i) => (i + 1) % photos.length), 4500);
    return () => clearInterval(id);
  }, [photos.length]);

  return (
    <div className="relative h-64 md:h-auto md:min-h-[22rem]">
      <AnimatePresence mode="wait">
        <motion.img
          key={photos[photoIndex]}
          src={photos[photoIndex]}
          alt={event.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </AnimatePresence>
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {photos.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === photoIndex ? 'w-5 bg-enactus-yellow' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
      <span className="absolute left-5 top-5 rounded-full bg-enactus-yellow px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-navy-deep">
        Latest
      </span>
    </div>
  );
}

export default function Events() {
  const [featured, ...rest] = events;
  const heroImages = events.flatMap((e) => eventPhotos(e)).slice(0, 8);

  return (
    <main>
      <PageHero
        eyebrow="Events & Activities"
        lead="Where it all"
        accent="comes alive"
        subtitle="Competitions, summits, outreach drives and the everyday moments in between. This is the year as we lived it, out in the open and on the ground."
        images={heroImages}
      />

      {/* Featured event */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass hover-lift grid overflow-hidden rounded-3xl md:grid-cols-2">
            <FeaturedEventImage event={featured} />
            <div className="p-8 md:p-10">
              <p className="eyebrow mb-2">{featured.kind}</p>
              <h2 className="font-heading text-3xl font-extrabold text-navy-accent md:text-4xl">{featured.name}</h2>
              <p className="mt-1 text-sm font-semibold text-gold-accent">{featured.when}</p>
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
