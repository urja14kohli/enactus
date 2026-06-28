import { ReactNode } from 'react';
import { motion } from 'motion/react';
import DisplayHeading from './DisplayHeading';

interface PageHeroProps {
  eyebrow: string;
  lead: ReactNode;
  accent: ReactNode;
  subtitle?: string;
}

export default function PageHero({ eyebrow, lead, accent, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-navy-deep text-white pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-enactus-yellow/10"
        style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)' }}
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow text-enactus-yellow mb-4 flex items-center gap-2">
            <span className="inline-block w-7 h-[3px] bg-enactus-yellow" /> {eyebrow}
          </div>
          <DisplayHeading lead={lead} accent={accent} size="xl" as="h1" light />
          {subtitle && <p className="text-lg md:text-xl text-white/80 max-w-2xl mt-6 leading-relaxed">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
