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
  /** transparent hero — banner lives on the parent page for a seamless fade */
  seamless?: boolean;
  /** fade the hero into the site cream background (no hard divider) */
  blendToCream?: boolean;
}

export default function PageHero({ eyebrow, lead, accent, subtitle, images, bannerImage, compact, seamless, blendToCream }: PageHeroProps) {
  const blendPad = compact ? 'pt-28 pb-36 md:pt-32 md:pb-44' : 'pt-36 pb-40 md:pt-44 md:pb-52';

  return (
    <section
      className={`relative text-white ${
        blendToCream ? 'overflow-visible bg-transparent' : seamless ? 'overflow-hidden bg-transparent' : 'surface-dark overflow-hidden'
      } ${blendToCream ? blendPad : compact ? 'pt-28 pb-12 md:pt-32 md:pb-14' : 'pt-36 pb-24 md:pt-44 md:pb-28'}`}
    >
      {blendToCream && bannerImage ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 -bottom-28 md:-bottom-36" aria-hidden>
          <div className="absolute inset-x-0 top-0 h-[300px] sm:h-[330px] md:h-[360px]">
            <img
              src={bannerImage}
              alt=""
              className="h-full w-full object-cover object-[center_73%] opacity-[0.22] [mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)]"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, #1B222D 0%, rgba(27,34,45,0.94) 14%, rgba(27,34,45,0.72) 30%, rgba(27,34,45,0.42) 48%, rgba(27,34,45,0.16) 64%, rgba(244,241,234,0.45) 78%, rgba(244,241,234,0.78) 88%, rgba(244,241,234,0.94) 96%, #F4F1EA 100%)',
            }}
          />
        </div>
      ) : !seamless && bannerImage ? (
        <div className="absolute inset-0" aria-hidden>
          <img src={bannerImage} alt="" className="h-full w-full object-cover object-bottom opacity-[0.22]" />
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
