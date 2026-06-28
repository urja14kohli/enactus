import { motion } from 'motion/react';
import { Leaf, HeartPulse, BatteryCharging, Recycle, Sparkles } from 'lucide-react';
import type { Venture } from '../data/content';

const accentBg: Record<string, string> = {
  green: 'from-emerald-700 to-emerald-900',
  navy: 'from-navy-accent to-navy-deep',
  gold: 'from-amber-600 to-yellow-800',
  rose: 'from-rose-700 to-rose-900',
};

const accentIcon: Record<string, JSX.Element> = {
  green: <Recycle className="w-12 h-12" />,
  navy: <BatteryCharging className="w-12 h-12" />,
  gold: <Leaf className="w-12 h-12" />,
  rose: <HeartPulse className="w-12 h-12" />,
};

export default function VentureCard({ venture, index = 0 }: { venture: Venture; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group bg-white rounded-2xl overflow-hidden border border-border-color shadow-sm hover:shadow-xl transition-shadow flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
        {venture.image ? (
          <>
            <img
              src={venture.image}
              alt={venture.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
          </>
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${accentBg[venture.accent]} flex items-center justify-center text-white/90`}>
            {accentIcon[venture.accent]}
            <Sparkles className="absolute top-4 right-4 w-5 h-5 text-white/40" />
          </div>
        )}
        {venture.logo && (
          <div className="absolute bottom-3 left-3 bg-white rounded-lg p-1.5 shadow-md">
            <img src={venture.logo} alt={`${venture.name} logo`} className="h-10 w-10 object-contain" />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="eyebrow mb-2 text-[0.7rem]">{venture.area}</div>
        <h3 className="font-heading font-extrabold text-xl text-navy-accent mb-2">{venture.name}</h3>
        <p className="text-sm text-foreground-secondary leading-relaxed mb-4 flex-1">{venture.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {venture.highlights.slice(0, 2).map((h) => (
            <span key={h} className="text-[0.7rem] font-semibold bg-background-secondary text-navy-accent px-2.5 py-1 rounded-full">
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
