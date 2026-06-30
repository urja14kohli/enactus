import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Trophy } from 'lucide-react';
import Spotlight from './Spotlight';
import DisplayHeading from './DisplayHeading';
import { worldCupHighlight } from '../data/content';

const AUTOPLAY_MS = 5500;

export default function WorldCupHighlight() {
  const { images, stats, hosts, when, title, event, location } = worldCupHighlight;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const go = useCallback(
    (i: number) => {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    },
    [index],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const active = images[index];

  return (
    <section className="px-4 pb-20 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65 }}
        className="surface-dark spotlight relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] ring-1 ring-white/10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Spotlight />

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-enactus-yellow/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 grid gap-10 p-8 md:p-12 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-14">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-enactus-yellow/30 bg-enactus-yellow/10 px-4 py-1.5">
              <Trophy className="h-4 w-4 text-enactus-yellow" />
              <span className="text-xs font-bold uppercase tracking-wider text-enactus-yellow">On the world stage</span>
            </div>

            <DisplayHeading lead="Best Paper" accent="Award" size="md" light className="mb-4" />
            <p className="mb-2 font-heading text-lg font-bold text-enactus-yellow">{event} · {when}</p>
            <p className="mb-6 flex items-center gap-1.5 text-sm text-white/65">
              <MapPin className="h-4 w-4 shrink-0 text-enactus-yellow/80" />
              {location}
            </p>

            <div className="space-y-3 text-sm leading-relaxed text-white/78 md:text-[0.95rem]">
              <p>
                Our team represented <strong className="text-white">Enactus IGDTUW</strong> at the Enactus World Cup in
                Bangkok, September 2025, on behalf of Enactus India.
              </p>
              <p>
                We brought home the <strong className="text-white">{title}</strong> at the EGRN Enactus World Cup 2025,
                standing out among <strong className="text-white">170+ teams from over 21 countries</strong>, alongside
                the <strong className="text-white">Best Case Study Award</strong> for Enactus India.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-dark rounded-2xl px-3 py-4 text-center"
                >
                  <div className="display text-2xl leading-none text-enactus-yellow md:text-3xl">{s.value}</div>
                  <div className="mt-1 text-[0.65rem] uppercase tracking-wide text-white/55 md:text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/45">With gratitude to our hosts</p>
              <div className="flex flex-wrap gap-2">
                {hosts.map((host) => (
                  <span
                    key={host}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-sm"
                  >
                    {host}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.5rem] ring-1 ring-white/15 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.65)]">
              <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                <AnimatePresence custom={direction} initial={false} mode="popLayout">
                  <motion.div
                    key={index}
                    custom={direction}
                    initial={{ opacity: 0, scale: 1.04, x: direction * 40 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: direction * -40 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -70) next();
                      else if (info.offset.x > 70) prev();
                    }}
                  >
                    <img
                      src={active.src}
                      alt={active.alt}
                      className="h-full w-full object-cover object-center"
                      draggable={false}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/35 to-transparent px-5 pb-5 pt-16">
                      <p className="whitespace-pre-line text-sm font-medium leading-snug text-white/90">{active.caption}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-navy-deep/50 text-white backdrop-blur transition-colors hover:bg-enactus-yellow hover:text-navy-deep"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-navy-deep/50 text-white backdrop-blur transition-colors hover:bg-enactus-yellow hover:text-navy-deep"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show photo ${i + 1}`}
                  className={`relative min-w-[4.5rem] flex-1 overflow-hidden rounded-xl ring-2 transition-all duration-300 sm:min-w-0 ${
                    i === index ? 'ring-enactus-yellow opacity-100' : 'ring-transparent opacity-55 hover:opacity-80'
                  }`}
                >
                  <img src={img.src} alt="" className="aspect-[5/3] w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
