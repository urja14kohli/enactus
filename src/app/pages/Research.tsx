import { motion } from 'motion/react';
import { FileText, Cpu, Accessibility, BatteryCharging, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import Wedge from '../components/Wedge';

const innovations = [
  {
    icon: <Cpu className="w-7 h-7" />,
    title: 'AI-Powered Mental Wellness Platform',
    project: 'Project Sahaay',
    status: 'In Development',
    text: 'A therapeutic relaxation platform integrating gamification and AI-assisted emotional support for accessible well-being.',
  },
  {
    icon: <Accessibility className="w-7 h-7" />,
    title: 'Braille Mental Health Journals',
    project: 'Project Sahaay',
    status: 'In Development',
    text: 'Accessibility-focused reflection journals ensuring inclusivity for the visually impaired.',
  },
  {
    icon: <BatteryCharging className="w-7 h-7" />,
    title: 'Second-Life Battery Refurbishing',
    project: 'Project Vidyuta',
    status: 'Field Tested',
    text: 'Reclaimed lithium-ion cells integrated with custom circuits and solar charging at 91% round-trip efficiency.',
  },
];

const competitions = [
  { title: 'CaseForge 2026', detail: 'Our flagship case competition engaged 1,300+ registrations from across India, with a professional bootcamp and offline finale judged by industry experts.' },
  { title: 'Convectus’26 — 1st Position', detail: 'Project Dhaan won the business plan competition, validating its sustainability model and market potential.' },
  { title: 'Envision’26, IIT Roorkee — Top 20', detail: 'Project Khajoor reached the finals and earned a Special Mention Award for its circular-economy model.' },
  { title: 'The Visionary’s Arena — 2nd Position', detail: 'Project Khajoor, hosted by SGND Khalsa College, Delhi University.' },
];

export default function Research() {
  return (
    <div>
      <PageHero
        eyebrow="Research & Innovation"
        lead="Where Innovation"
        accent="Meets Impact"
        subtitle="We pair academic rigour with practical application to build evidence-based, technology-driven solutions."
      />

      {/* Featured publication */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-accent text-white rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-enactus-yellow/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-enactus-yellow text-navy-deep text-xs font-extrabold uppercase tracking-wider rounded-full mb-5">
                <FileText className="w-4 h-4" /> Best Paper Award
              </div>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl mb-4 leading-snug">
                Recognised at the Enactus Global Research Network Conference
              </h2>
              <p className="text-white/75 leading-relaxed">
                Project Khajoor's research on transforming discarded date seeds into a caffeine-free, zero-waste
                beverage earned the Best Paper Award — validating both its scientific basis and its circular-economy
                business model on a global stage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation projects */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-3">Technical Initiatives</div>
            <DisplayHeading lead="Innovation In" accent="Progress" size="md" />
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {innovations.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border-color rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-enactus-yellow/15 text-gold-accent flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-gold-accent">{p.project}</span>
                  <span className="text-[0.7rem] font-semibold bg-background-secondary text-navy-accent px-2 py-0.5 rounded-full">{p.status}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-accent mb-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Wedge color="background" direction="down-right" />

      {/* Competitions */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-3">Case & B-Plan Competitions</div>
            <DisplayHeading lead="Tested Against" accent="The Best" size="md" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {competitions.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border-l-4 border-enactus-yellow rounded-r-2xl p-7 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-gold-accent shrink-0 mt-0.5" />
                  <h3 className="font-heading font-extrabold text-xl text-navy-accent">{c.title}</h3>
                </div>
                <p className="text-sm text-foreground-secondary leading-relaxed pl-9">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <DisplayHeading lead="Collaborate" accent="With Us" size="lg" align="center" light />
          <p className="text-white/75 max-w-2xl mx-auto mt-5 mb-9">
            Interested in research collaboration or contributing to our innovation projects? Let's build together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-enactus-yellow text-navy-deep font-extrabold uppercase tracking-wide text-sm rounded-md hover:bg-white transition-colors"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
