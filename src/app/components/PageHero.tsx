import { ReactNode } from 'react';
import { motion } from 'motion/react';
import DisplayHeading from './DisplayHeading';

interface PageHeroProps {
  eyebrow: string;
  lead: ReactNode;
  accent: ReactNode;
  subtitle?: string;
  /** optional faint photos tiled behind the heading */
  images?: string[];
}

export default function PageHero({ eyebrow, lead, accent, subtitle, images }: PageHeroProps) {
  return (
    <section className="surface-dark relative overflow-hidden pt-36 pb-24 text-white md:pt-44 md:pb-28">
      {images && images.length > 0 && (
        <div className="absolute inset-0 opacity-[0.16]" aria-hidden>
          <div className="grid h-full grid-cols-3 sm:grid-cols-5">
            {images.slice(0, 5).map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <img src={src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-dark mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-enactus-yellow" />
            <span className="eyebrow text-enactus-yellow">{eyebrow}</span>
          </div>
          <DisplayHeading lead={lead} accent={accent} size="xl" as="h1" light />
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
