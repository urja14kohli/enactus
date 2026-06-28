import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2, HeartPulse, ImageIcon } from 'lucide-react';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import VentureCard from '../components/VentureCard';
import Wedge from '../components/Wedge';
import { ventures, pastVentures } from '../data/content';

const accentBg: Record<string, string> = {
  green: 'from-emerald-700 to-emerald-900',
  navy: 'from-navy-accent to-navy-deep',
  gold: 'from-amber-600 to-yellow-800',
  rose: 'from-rose-700 to-rose-900',
};

export default function Ventures() {
  return (
    <div>
      <PageHero
        eyebrow="Our Ventures"
        lead="Ideas Creating"
        accent="Change"
        subtitle="Sustainable, student-led social enterprises addressing real challenges across our communities."
      />

      {/* Current ventures — detailed alternating */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-3">Active · 2024–26</div>
            <DisplayHeading lead="Current" accent="Ventures" size="md" />
          </div>

          <div className="space-y-20">
            {ventures.map((v, i) => (
              <motion.div
                key={v.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="relative">
                  {v.image ? (
                    <img src={v.image} alt={v.name} className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
                  ) : (
                    <div className={`relative rounded-2xl shadow-xl w-full aspect-[4/3] bg-gradient-to-br ${accentBg[v.accent]} flex flex-col items-center justify-center text-white/90`}>
                      <HeartPulse className="w-16 h-16 mb-3" />
                      <span className="font-heading font-extrabold text-2xl">{v.name}</span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/60">
                        <ImageIcon className="w-3.5 h-3.5" /> Photos coming soon
                      </span>
                    </div>
                  )}
                  {v.logo && (
                    <div className="absolute -bottom-5 left-6 bg-white rounded-xl p-2 shadow-lg">
                      <img src={v.logo} alt={`${v.name} logo`} className="h-14 w-14 object-contain" />
                    </div>
                  )}
                </div>

                <div>
                  <div className="eyebrow mb-2">{v.area}</div>
                  <h3 className="font-heading font-extrabold text-3xl text-navy-accent mb-1">{v.name}</h3>
                  {v.established && <div className="text-sm text-foreground-secondary mb-4">{v.established}</div>}
                  <p className="text-foreground-secondary leading-relaxed mb-6">{v.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {v.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-sm text-navy-accent">
                        <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Wedge color="secondary" direction="down-right" />

      {/* Past ventures */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-3">Our Legacy</div>
            <DisplayHeading lead="Past" accent="Ventures" size="md" />
            <p className="text-foreground-secondary mt-4 leading-relaxed">
              The projects that shaped our journey and impacted thousands of lives since 2015.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {pastVentures.map((v, i) => (
              <VentureCard key={v.slug} venture={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-enactus-yellow py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <DisplayHeading lead="Have An Idea For A" accent="Venture?" size="lg" align="center" />
          <p className="text-navy-deep/80 text-lg max-w-2xl mx-auto mt-5 mb-9">
            We're always looking for innovative ideas and passionate changemakers to build the next big thing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-deep text-white font-extrabold uppercase tracking-wide text-sm rounded-md hover:bg-navy-accent transition-colors"
          >
            Propose A Venture <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
