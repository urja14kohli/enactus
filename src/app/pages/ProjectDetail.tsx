import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Check, Calendar, Tag, TrendingUp, Award, Handshake } from 'lucide-react';
import { allVentures, type Venture } from '../data/content';

const accentText: Record<Venture['accent'], string> = {
  green: 'text-emerald-600',
  navy: 'text-navy-accent',
  gold: 'text-gold-accent',
  rose: 'text-rose-600',
};
const accentDot: Record<Venture['accent'], string> = {
  green: 'bg-emerald-500',
  navy: 'bg-navy-accent',
  gold: 'bg-enactus-yellow',
  rose: 'bg-rose-500',
};

function NotFound() {
  return (
    <main className="surface-dark flex min-h-[70vh] flex-col items-center justify-center px-6 text-center text-white">
      <h1 className="font-display text-5xl">Project not found</h1>
      <Link to="/ventures" className="mt-6 inline-flex items-center gap-2 text-enactus-yellow">
        <ArrowLeft className="h-4 w-4" /> Back to ventures
      </Link>
    </main>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const v = allVentures.find((x) => x.slug === slug);
  if (!v) return <NotFound />;

  const aText = accentText[v.accent];
  const aDot = accentDot[v.accent];

  return (
    <main>
      {/* Hero */}
      <section className="surface-dark relative overflow-hidden pt-32 pb-0 text-white md:pt-40">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            to="/ventures"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-enactus-yellow"
          >
            <ArrowLeft className="h-4 w-4" /> All ventures
          </Link>
          <div className="grid items-center gap-10 pb-14 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="glass-dark inline-flex items-center gap-2 rounded-full px-3 py-1">
                  <Tag className="h-3.5 w-3.5 text-enactus-yellow" /> {v.area}
                </span>
                <span className="glass-dark inline-flex items-center gap-2 rounded-full px-3 py-1">
                  <Calendar className="h-3.5 w-3.5 text-enactus-yellow" /> Started {v.founded}
                </span>
                <span className="glass-dark inline-flex items-center gap-2 rounded-full px-3 py-1">
                  <span className={`h-2 w-2 rounded-full ${v.status === 'current' ? 'bg-emerald-400' : 'bg-white/50'}`} />
                  {v.status === 'current' ? 'Active' : 'Past project'}
                </span>
              </div>
              <h1 className="display text-5xl md:text-6xl">{v.name}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{v.tagline}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl">
                {v.hero ? (
                  <img src={v.hero} alt={v.name} className="aspect-[4/3] w-full object-cover" />
                ) : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center bg-white/5">
                    <span className="font-display text-6xl text-white/20">{v.name.split(' ').pop()}</span>
                  </div>
                )}
              </div>
              {v.logo && (
                <div className="glass absolute -bottom-5 -left-5 flex h-20 w-20 items-center justify-center rounded-2xl p-3">
                  <img src={v.logo} alt="" className="h-full w-full object-contain" />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow mb-6 text-center">By the numbers</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {v.impact.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className={`font-display text-3xl md:text-4xl ${aText}`}>{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-foreground-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About + what we do */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="eyebrow mb-3">The story</p>
            <h2 className="font-heading text-3xl font-extrabold text-navy-accent">What this project is about</h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground-secondary">{v.summary}</p>
            <p className="mt-4 leading-relaxed text-foreground-secondary">{v.about}</p>
          </div>
          <div className="md:col-span-2">
            <div className="glass rounded-3xl p-7">
              <p className="eyebrow mb-4">How it works</p>
              <ul className="space-y-3">
                {v.focus.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${aDot}`}>
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    <span className="text-[15px] text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image collage */}
      {v.images.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {v.images.slice(0, 3).map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-lg ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                >
                  <img
                    src={src}
                    alt={`${v.name} ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Revenue + recognition + partners */}
      <section className="pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {v.revenueNote && (
            <div className="glass rounded-3xl p-7">
              <TrendingUp className={`h-7 w-7 ${aText}`} />
              <h3 className="mt-4 font-heading text-lg font-bold text-navy-accent">The business side</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground-secondary">{v.revenueNote}</p>
            </div>
          )}
          {v.highlights.length > 0 && (
            <div className="glass rounded-3xl p-7">
              <Award className={`h-7 w-7 ${aText}`} />
              <h3 className="mt-4 font-heading text-lg font-bold text-navy-accent">Recognition</h3>
              <ul className="mt-3 space-y-2">
                {v.highlights.map((h, i) => (
                  <li key={i} className="text-[15px] leading-relaxed text-foreground-secondary">{h}</li>
                ))}
              </ul>
            </div>
          )}
          {v.partners && v.partners.length > 0 && (
            <div className="glass rounded-3xl p-7">
              <Handshake className={`h-7 w-7 ${aText}`} />
              <h3 className="mt-4 font-heading text-lg font-bold text-navy-accent">Worked with</h3>
              <ul className="mt-3 space-y-2">
                {v.partners.map((p, i) => (
                  <li key={i} className="text-[15px] leading-relaxed text-foreground-secondary">{p}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="surface-dark relative overflow-hidden rounded-3xl px-8 py-12 text-center text-white md:py-16">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold md:text-4xl">
              Want to help take {v.name.replace('Project ', '')} further?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              Whether you want to join the team, partner with us or just learn more, we would love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-enactus-yellow px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy-deep transition-colors hover:bg-white"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/ventures"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                See other ventures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
