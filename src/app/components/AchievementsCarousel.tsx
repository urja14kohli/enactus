import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Trophy } from 'lucide-react';
import type { Achievement } from '../data/content';

interface AchievementsCarouselProps {
  items: Achievement[];
  className?: string;
}

const AUTOPLAY_MS = 5000;

export default function AchievementsCarousel({ items, className = '' }: AchievementsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const count = items.length;

  const go = useCallback(
    (next: number) => {
      setDirection(next > index || (index === count - 1 && next === 0) ? 1 : -1);
      setIndex((next + count) % count);
    },
    [index, count],
  );

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, nextSlide]);

  const active = items[index];

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-navy-deep/5 shadow-[0_24px_60px_-32px_rgba(31,37,48,0.6)] ring-1 ring-black/5">
        <div className="relative h-[26rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem]">
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) nextSlide();
                else if (info.offset.x > 80) prev();
              }}
            >
              <img
                src={active.image}
                alt={`${active.title} — ${active.event}`}
                className="h-full w-full select-none object-cover object-center"
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-navy-deep/95 via-navy-deep/45 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
                <div className="max-w-xl">
                  <span className="display inline-block rounded-full bg-enactus-yellow px-2.5 py-0.5 text-xs leading-none text-navy-deep">
                    {active.year}
                  </span>
                  <h3 className="mt-2 flex items-start gap-2 font-heading text-lg font-extrabold leading-tight text-white sm:text-xl md:text-2xl">
                    <Trophy className="mt-0.5 hidden h-5 w-5 shrink-0 text-enactus-yellow sm:block" />
                    {active.title}
                  </h3>
                  <p className="mt-1 font-heading text-sm font-bold text-enactus-yellow sm:text-base">
                    {active.event}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-white/80 sm:text-sm">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-white/60" />
                    {active.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous achievement"
          className="absolute left-2.5 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-enactus-yellow hover:text-navy-deep sm:left-3"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next achievement"
          className="absolute right-2.5 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-enactus-yellow hover:text-navy-deep sm:right-3"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to ${item.event}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-gold-accent' : 'w-2.5 bg-navy-accent/25 hover:bg-navy-accent/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
