import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Rocket, Users, Trophy, Award, Quote } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import DisplayHeading from '../components/DisplayHeading';
import VentureCard from '../components/VentureCard';
import Wedge from '../components/Wedge';
import { ventures, orgStats, achievements, partners } from '../data/content';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-team.jpg" alt="Team Enactus IGDTUW" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-navy-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="eyebrow text-enactus-yellow mb-5 flex items-center gap-2">
              <span className="inline-block w-7 h-[3px] bg-enactus-yellow" /> Enactus IGDTUW
            </div>
            <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white mb-6">
              Turning Ideas <br />
              Into <span className="text-enactus-yellow">Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mb-9">
              A community of student leaders at Indira Gandhi Delhi Technical University for Women,
              creating sustainable impact through entrepreneurial action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/ventures"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-enactus-yellow text-navy-deep font-extrabold uppercase tracking-wide text-sm rounded-md hover:bg-white transition-colors"
              >
                Explore Ventures <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/70 text-white font-extrabold uppercase tracking-wide text-sm rounded-md hover:bg-white hover:text-navy-deep transition-colors"
              >
                Join Enactus
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ VISION ============ */}
      <section className="relative bg-background-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-4">Our Vision</div>
            <DisplayHeading lead="Young Leaders" accent="Everywhere" size="lg" className="mb-6" />
            <p className="text-xl md:text-2xl text-navy-accent font-heading font-semibold leading-snug mb-6">
              Use innovation and business skills to ensure that all people thrive in a sustainable world.
            </p>
            <p className="text-foreground-secondary leading-relaxed mb-4">
              As students of India's first all-women technical university, Enactus IGDTUW has — since 2015 —
              channelled entrepreneurial action into real social, environmental and economic change. In 2016 we became
              the <span className="font-semibold text-navy-accent">first all-girls team ever</span> to win the Enactus
              India Nationals Rookie League.
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              Today, through our ventures and functional teams, we keep turning bold ideas into measurable impact for the
              communities around us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-enactus-yellow rounded-tl-2xl" aria-hidden />
            <img
              src="/images/team/team-group.jpg"
              alt="Team Enactus IGDTUW"
              className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 bg-navy-accent text-white rounded-2xl px-6 py-5 shadow-xl hidden sm:block">
              <div className="display text-4xl text-enactus-yellow leading-none">10+</div>
              <div className="text-xs uppercase tracking-widest text-white/70 mt-1">Years of Impact</div>
            </div>
          </motion.div>
        </div>
      </section>

      <Wedge color="navy" direction="down-right" />

      {/* ============ IMPACT IN NUMBERS ============ */}
      <section className="bg-navy-accent text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Our Impact · 2025–26</div>
            <DisplayHeading lead="By The" accent="Numbers" size="lg" align="center" light />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6">
            {orgStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="display text-4xl md:text-5xl text-enactus-yellow mb-2">
                  <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm uppercase tracking-wider text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-3">What We Do</div>
            <DisplayHeading lead="Build." accent="Lead. Compete." size="md" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Rocket className="w-9 h-9" />, title: 'Build', text: 'We create sustainable ventures that solve real social, environmental and economic challenges.' },
              { icon: <Users className="w-9 h-9" />, title: 'Lead', text: 'We develop responsible changemakers through hands-on entrepreneurship and mentorship.' },
              { icon: <Trophy className="w-9 h-9" />, title: 'Compete', text: 'We represent IGDTUW on national and global stages, validating ideas against the best.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-white border border-border-color rounded-2xl p-8 hover:-translate-y-1 transition-transform"
              >
                <div className="w-14 h-14 rounded-xl bg-enactus-yellow/15 text-gold-accent flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-navy-accent mb-3">{item.title}</h3>
                <p className="text-foreground-secondary leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED VENTURES ============ */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="eyebrow mb-3">Our Ventures</div>
              <DisplayHeading lead="Ideas Creating" accent="Change" size="md" />
            </div>
            <Link
              to="/ventures"
              className="inline-flex items-center gap-2 text-navy-accent font-bold uppercase tracking-wide text-sm hover:text-gold-accent transition-colors"
            >
              View all ventures <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {ventures.map((v, i) => (
              <VentureCard key={v.slug} venture={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACHIEVEMENTS ============ */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-3">Recognition</div>
            <DisplayHeading lead="A Track Record" accent="Of Excellence" size="md" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-white border border-border-color rounded-2xl p-6 flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-navy-accent text-enactus-yellow flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="display text-lg text-gold-accent leading-none mb-1">{a.year}</div>
                  <h3 className="font-heading font-bold text-navy-accent leading-snug mb-1">{a.title}</h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">{a.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNERS ============ */}
      <section className="bg-background-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="eyebrow mb-3">Trusted By</div>
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-navy-accent mb-10">
            Partners &amp; Collaborators
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {partners.map((p) => (
              <span
                key={p}
                className="px-5 py-3 bg-white border border-border-color rounded-full text-sm font-semibold text-navy-accent shadow-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="bg-navy-deep text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-12 h-12 text-enactus-yellow mx-auto mb-6" />
          <p className="font-heading font-semibold text-2xl md:text-3xl leading-snug mb-8">
            “Enactus IGDTUW has always provided students with a platform to develop their skills and drive sustainable
            change by utilizing innovation and entrepreneurial principles.”
          </p>
          <div className="text-enactus-yellow font-bold uppercase tracking-wider text-sm">Dr. (Mrs.) Amita Dev</div>
          <div className="text-white/60 text-sm">Vice Chancellor, IGDTUW</div>
        </div>
      </section>

      {/* ============ JOIN CTA ============ */}
      <section className="relative bg-enactus-yellow py-20 md:py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <DisplayHeading lead="Be The" accent="Change" size="xl" align="center" />
          <p className="text-navy-deep/80 text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10">
            Join a community of innovators, entrepreneurs and changemakers building sustainable solutions for
            real-world challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-deep text-white font-extrabold uppercase tracking-wide text-sm rounded-md hover:bg-navy-accent transition-colors"
            >
              Become An Enactor <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy-deep text-navy-deep font-extrabold uppercase tracking-wide text-sm rounded-md hover:bg-navy-deep hover:text-white transition-colors"
            >
              Meet The Team
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {['Designer', 'Developer', 'Researcher', 'Strategist', 'Entrepreneur', 'Storyteller'].map((role) => (
              <span key={role} className="px-4 py-2 bg-navy-deep/10 text-navy-deep rounded-full text-sm font-semibold">
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
