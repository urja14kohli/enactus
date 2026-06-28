import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Lightbulb, Flame, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import DisplayHeading from '../components/DisplayHeading';
import Wedge from '../components/Wedge';

const values = [
  { icon: <ShieldCheck className="w-7 h-7" />, title: 'Integrity', text: 'We hold ourselves to the highest standards of ethics in everything we do.' },
  { icon: <Lightbulb className="w-7 h-7" />, title: 'Innovation', text: 'We solve real problems with creativity and entrepreneurial thinking.' },
  { icon: <Flame className="w-7 h-7" />, title: 'Passion', text: 'We are driven by a genuine desire to create meaningful change.' },
  { icon: <Users className="w-7 h-7" />, title: 'Collaboration', text: 'We build together — across teams, communities and partners.' },
];

const journey = [
  { year: '2015', text: 'Enactus IGDTUW is founded at India\u2019s first all-women technical university.' },
  { year: '2016', text: 'First all-girls team ever to win the Enactus India Nationals Rookie League, in Mumbai.' },
  { year: '2015–23', text: 'Eight years of projects across menstrual health, clean water, animal welfare and waste management — impacting 6,900+ lives.' },
  { year: '2024–26', text: 'A new generation of ventures — Khajoor, Dhaan, Sahaay and Vidyuta — scales our impact further.' },
];

const globalStats = [
  { v: '33', l: 'Countries' },
  { v: '1,000+', l: 'Campus Programs' },
  { v: '42,450', l: 'Student Members' },
  { v: '13.1M', l: 'Lives Impacted' },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Who We Are"
        lead="About"
        accent="Enactus IGDTUW"
        subtitle="A community of student leaders creating sustainable impact through entrepreneurial action."
      />

      {/* Mission & Vision */}
      <section className="bg-background-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-border-color rounded-2xl p-9"
          >
            <div className="w-13 h-13 rounded-xl bg-enactus-yellow/15 text-gold-accent flex items-center justify-center mb-5 p-3">
              <Target className="w-7 h-7" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-navy-accent mb-4">Our Mission</h2>
            <p className="text-foreground-secondary leading-relaxed">
              To motivate the next generation of leaders to use innovation and entrepreneurship to address pressing
              social, environmental and economic challenges — improving the quality of life and livelihood of the
              communities we serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border-color rounded-2xl p-9"
          >
            <div className="w-13 h-13 rounded-xl bg-enactus-yellow/15 text-gold-accent flex items-center justify-center mb-5 p-3">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-navy-accent mb-4">Our Vision</h2>
            <p className="text-foreground-secondary leading-relaxed">
              A world where young leaders everywhere use innovation and business skills to ensure that all people
              thrive in a sustainable world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow mb-3">Our Story</div>
            <DisplayHeading lead="Strong-Headed" accent="Changemakers" size="md" className="mb-6" />
            <p className="text-foreground-secondary leading-relaxed mb-5">
              As students of India's first all-women technical varsity, we are determined to empower communities
              through entrepreneurial awakening. We believe that technology paired with entrepreneurial action can
              drive a great impact on everyone.
            </p>
            <div className="space-y-5 border-l-2 border-enactus-yellow/40 pl-6">
              {journey.map((j) => (
                <div key={j.year}>
                  <div className="display text-xl text-gold-accent leading-none mb-1">{j.year}</div>
                  <p className="text-sm text-foreground-secondary leading-relaxed">{j.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-enactus-yellow rounded-tr-2xl" aria-hidden />
            <img src="/images/team/team-group.jpg" alt="Team Enactus IGDTUW" className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-3">What Drives Us</div>
            <DisplayHeading lead="Our Core" accent="Values" size="md" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-border-color rounded-2xl p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-accent text-enactus-yellow flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-accent mb-2">{v.title}</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Wedge color="navy" direction="down-left" />

      {/* Global */}
      <section className="bg-navy-accent text-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="eyebrow mb-3">Global Network</div>
          <DisplayHeading lead="Part Of Something" accent="Bigger" size="md" align="center" light />
          <p className="text-white/75 max-w-3xl mx-auto mt-6 mb-14 leading-relaxed">
            Enactus IGDTUW is one chapter of Enactus — the world's largest experiential learning platform developing
            next-generation leaders with a head for business and a heart for the world.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {globalStats.map((s) => (
              <div key={s.l}>
                <div className="display text-4xl md:text-5xl text-enactus-yellow mb-2">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
          <a
            href="https://enactus.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-12 px-7 py-3.5 bg-enactus-yellow text-navy-deep font-extrabold uppercase tracking-wide text-sm rounded-md hover:bg-white transition-colors"
          >
            Visit Enactus Global
          </a>
        </div>
      </section>
    </div>
  );
}
