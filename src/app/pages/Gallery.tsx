import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import PageHero from '../components/PageHero';

const images = Array.from({ length: 25 }, (_, i) => `/images/gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`);

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        lead="Moments That"
        accent="Matter"
        subtitle="Glimpses of our journey — events, field visits, competitions and the people behind the impact."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {images.map((src, index) => (
              <motion.button
                key={src}
                type="button"
                onClick={() => setActive(src)}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 8) * 0.04 }}
                className="group relative mb-4 block w-full overflow-hidden rounded-xl break-inside-avoid"
              >
                <img
                  src={src}
                  alt={`Enactus IGDTUW gallery ${index + 1}`}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/30 transition-colors" />
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
            className="fixed inset-0 z-[100] bg-navy-deep/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={active}
              alt="Enlarged"
              className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
