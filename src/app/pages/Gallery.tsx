import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import PageHero from '../components/PageHero';
import { buildGalleryItems, photoPool } from '../data/content';

const images = buildGalleryItems();

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        lead="Moments that"
        accent="stayed with us"
        subtitle="Events, field visits, competitions and the people behind it all. A look at our journey, one frame at a time."
        images={[
          '/images/events/under25-summit-crowd.png',
          '/images/events/enactova.png',
          photoPool[0],
          photoPool[12],
          photoPool[18],
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-2 gap-4 [column-fill:_balance] md:columns-3 lg:columns-4">
            {images.map((item, index) => (
              <motion.button
                key={item.src + index}
                type="button"
                onClick={() => setActive(item.src)}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 8) * 0.04 }}
                className={`group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-background-cream ring-1 ring-black/5 shadow-sm ${
                  item.zoom ? 'aspect-[4/5]' : ''
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt ?? `Enactus IGDTUW gallery ${index + 1}`}
                  loading="lazy"
                  className={
                    item.zoom
                      ? 'h-full w-full scale-[1.45] object-cover object-center transition-transform duration-500 group-hover:scale-[1.55]'
                      : 'w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  }
                />
                <div className="absolute inset-0 bg-navy-deep/0 transition-colors group-hover:bg-navy-deep/25" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/90 p-6 backdrop-blur-md"
          >
            <button
              className="absolute right-6 top-6 text-white/80 transition-colors hover:text-white"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={active}
              alt="Enlarged"
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl ring-1 ring-white/15"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
