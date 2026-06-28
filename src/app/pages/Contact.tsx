import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    'w-full px-4 py-3 bg-background-secondary rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-enactus-yellow focus:border-transparent transition';

  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        lead="Let's Create"
        accent="Impact Together"
        subtitle="Join the movement, partner with us, or simply say hello — we'd love to hear from you."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="font-heading font-extrabold text-3xl text-navy-accent mb-7">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-navy-accent mb-1">Thank you!</h3>
                  <p className="text-foreground-secondary text-sm">
                    Your message has been noted. We'll get back to you soon.
                  </p>
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
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-accent mb-2">Full Name</label>
                    <input id="name" type="text" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-accent mb-2">Email Address</label>
                    <input id="email" type="email" required className={inputClass} placeholder="you@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-navy-accent mb-2">I'm interested in</label>
                  <select id="interest" className={inputClass}>
                    <option>Joining Enactus IGDTUW</option>
                    <option>Partnership & Sponsorship</option>
                    <option>Collaboration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-accent mb-2">Message</label>
                  <textarea id="message" rows={5} required className={`${inputClass} resize-none`} placeholder="Tell us more..." />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-enactus-yellow text-navy-deep font-extrabold uppercase tracking-wide text-sm rounded-md hover:bg-gold-accent transition-colors"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="bg-background-secondary rounded-2xl p-7 flex items-start gap-4">
              <div className="w-12 h-12 bg-enactus-yellow rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-navy-deep" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-accent mb-1">Email</h3>
                <a href="mailto:enactus@igdtuw.ac.in" className="text-foreground-secondary hover:text-gold-accent transition-colors text-sm">
                  enactus@igdtuw.ac.in
                </a>
              </div>
            </div>

            <div className="bg-background-secondary rounded-2xl p-7 flex items-start gap-4">
              <div className="w-12 h-12 bg-enactus-yellow rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-navy-deep" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-accent mb-1">Location</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  Indira Gandhi Delhi Technical University for Women,<br />
                  Kashmere Gate, New Delhi – 110006
                </p>
              </div>
            </div>

            <div className="bg-navy-accent text-white rounded-2xl p-7">
              <h3 className="font-heading font-bold mb-4">Follow Our Journey</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/igdtuw.en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 bg-white/10 hover:bg-enactus-yellow flex items-center justify-center rounded-lg transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-navy-deep" />
                </a>
                <a
                  href="https://www.linkedin.com/company/enactusigdtuw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 bg-white/10 hover:bg-enactus-yellow flex items-center justify-center rounded-lg transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:text-navy-deep" />
                </a>
              </div>
              <p className="text-white/60 text-sm mt-5">
                New member applications open annually. Follow us to never miss a recruitment cycle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
