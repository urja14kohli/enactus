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
  /** optional single wide photo used as a full-width faint backdrop (takes priority over images) */
  bannerImage?: string;
  /** shorter hero so content below peeks above the fold */
  compact?: boolean;
}

export default function PageHero({ eyebrow, lead, accent, subtitle, images, bannerImage, compact }: PageHeroProps) {
  return (
    <section
      className={`surface-dark relative overflow-hidden text-white ${
        compact ? 'pt-28 pb-12 md:pt-32 md:pb-14' : 'pt-36 pb-24 md:pt-44 md:pb-28'
      }`}
    >
      {bannerImage ? (
        <div className="absolute inset-0" aria-hidden>
          <img src={bannerImage} alt="" className="h-full w-full scale-110 object-cover object-bottom opacity-[0.22]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-transparent to-navy-deep/60" />
        </div>
      ) : (
        images && images.length > 0 && (
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
        )
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 ${compact ? 'mb-4' : 'mb-6'}`}>
            <span className="eyebrow text-enactus-yellow">{eyebrow}</span>
          </div>
          <DisplayHeading lead={lead} accent={accent} size="xl" as="h1" light />
          {subtitle && (
            <p className={`max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl ${compact ? 'mt-4' : 'mt-6'}`}>{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
