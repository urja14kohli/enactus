import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    'w-full rounded-xl border border-black/10 bg-white/60 px-4 py-3 backdrop-blur transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-enactus-yellow';

  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        lead="Say hello,"
        accent="let us talk"
        subtitle="Want to join, partner with us, or just ask a question? Drop us a line. We actually read these."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:col-span-3 md:p-10"
          >
            <h2 className="mb-7 font-heading text-3xl font-extrabold text-navy-accent">Send us a message</h2>
            {submitted ? (
              <div className="flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8">
                <CheckCircle2 className="h-7 w-7 shrink-0 text-emerald-600" />
                <div>
                  <h3 className="mb-1 font-heading font-bold text-navy-accent">Thank you</h3>
                  <p className="text-sm text-foreground-secondary">Your message has been noted. We will get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy-accent">Full name</label>
                    <input id="name" type="text" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy-accent">Email address</label>
                    <input id="email" type="email" required className={inputClass} placeholder="you@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-navy-accent">I am interested in</label>
                  <select id="interest" className={inputClass}>
                    <option>Joining Enactus IGDTUW</option>
                    <option>Partnership and sponsorship</option>
                    <option>Collaboration</option>
                    <option>General question</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy-accent">Message</label>
                  <textarea id="message" rows={5} required className={`${inputClass} resize-none`} placeholder="Tell us a bit more..." />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-enactus-yellow px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy-deep transition-colors hover:bg-gold-accent hover:text-white"
                >
                  <Send className="h-4 w-4" /> Send message
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 lg:col-span-2"
          >
            <div className="glass flex items-start gap-4 rounded-2xl p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-enactus-yellow">
                <Mail className="h-6 w-6 text-navy-deep" />
              </div>
              <div>
                <h3 className="mb-1 font-heading font-bold text-navy-accent">Email</h3>
                <a href="mailto:enactus.igdtuw@gmail.com" className="text-sm text-foreground-secondary transition-colors hover:text-gold-accent">
                  enactus.igdtuw@gmail.com
                </a>
              </div>
            </div>

            <div className="glass flex items-start gap-4 rounded-2xl p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-enactus-yellow">
                <MapPin className="h-6 w-6 text-navy-deep" />
              </div>
              <div>
                <h3 className="mb-1 font-heading font-bold text-navy-accent">Where to find us</h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  <a
                    href="https://www.igdtuw.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold-accent"
                  >
                    Indira Gandhi Delhi Technical University for Women
                  </a>
                  <br />
                  Kashmere Gate, New Delhi 110006
                  <br />
                  <a
                    href="https://share.google/6sl9OUNl1tVDbK1gl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-medium text-gold-accent transition-colors hover:text-navy-accent"
                  >
                    View on map
                  </a>
                </p>
              </div>
            </div>

            <div className="surface-dark rounded-2xl p-7 text-white">
              <h3 className="mb-4 font-heading font-bold">Follow our journey</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/igdtuw.en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-enactus-yellow"
                >
                  <Instagram className="h-5 w-5 text-white group-hover:text-navy-deep" />
                </a>
                <a
                  href="https://www.linkedin.com/company/enactusigdtuw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-enactus-yellow"
                >
                  <Linkedin className="h-5 w-5 text-white group-hover:text-navy-deep" />
                </a>
              </div>
              <p className="mt-5 text-sm text-white/60">
                New member applications open every year. Follow us so you never miss a recruitment cycle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
