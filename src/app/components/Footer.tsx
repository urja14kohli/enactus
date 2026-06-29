import { Link } from 'react-router';
import { Mail, MapPin, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import Spotlight from './Spotlight';

const explore = [
  { name: 'About', path: '/about' },
  { name: 'Ventures', path: '/ventures' },
  { name: 'Impact', path: '/impact' },
  { name: 'Events', path: '/events' },
  { name: 'Team', path: '/team' },
  { name: 'Gallery', path: '/gallery' },
];

export default function Footer() {
  return (
    <footer className="surface-dark spotlight relative overflow-hidden text-white">
      <Spotlight />

      {/* soft top hairline */}
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-enactus-yellow/60 to-transparent" />

      {/* glassy call to action sitting at the top of the footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-enactus-yellow/[0.08] px-8 py-9 backdrop-blur-sm md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-enactus-yellow">Be part of it</p>
            <h3 className="mt-2 max-w-xl font-heading text-2xl font-extrabold leading-tight md:text-3xl">
              Got an idea that could help someone? Let us build it together.
            </h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-enactus-yellow px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-navy-deep transition-colors hover:bg-white"
          >
            Join Us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img src="/logos/enactus-logo-white.png" alt="Enactus IGDTUW" className="mb-5 h-20 w-auto" />
            <p className="text-sm leading-relaxed text-white/65">
              Student leaders at IGDTUW using entrepreneurial action to create real, lasting impact.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-white/50">Explore</h4>
            <ul className="space-y-3 text-sm">
              {explore.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/75 transition-colors hover:text-enactus-yellow">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-white/50">Reach Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-enactus-yellow" />
                <span className="text-white/75">IGDTUW, Kashmere Gate, New Delhi</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-enactus-yellow" />
                <a href="mailto:enactus@igdtuw.ac.in" className="text-white/75 transition-colors hover:text-enactus-yellow">
                  enactus@igdtuw.ac.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-white/50">Follow Along</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/enactusigdtuw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur transition-colors hover:bg-enactus-yellow"
              >
                <Linkedin className="h-5 w-5 text-white group-hover:text-navy-deep" />
              </a>
              <a
                href="https://www.instagram.com/igdtuw.en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur transition-colors hover:bg-enactus-yellow"
              >
                <Instagram className="h-5 w-5 text-white group-hover:text-navy-deep" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/45">© {new Date().getFullYear()} Enactus IGDTUW. All rights reserved.</p>
          <a
            href="https://enactus.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-white/45 transition-colors hover:text-enactus-yellow"
          >
            Part of Enactus Global <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
