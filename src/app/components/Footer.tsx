import { Link } from 'react-router';
import { Mail, MapPin, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white relative overflow-hidden">
      {/* angular yellow accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-24 bg-enactus-yellow/90"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img src="/logos/enactus-logo-white.png" alt="Enactus IGDTUW" className="h-16 w-auto mb-5" />
            <p className="text-sm text-white/70 leading-relaxed">
              A community of student leaders at IGDTUW creating sustainable impact through entrepreneurial action.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold uppercase tracking-wider text-sm text-enactus-yellow mb-5">Explore</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'About', path: '/about' },
                { name: 'Ventures', path: '/ventures' },
                { name: 'Impact', path: '/impact' },
                { name: 'Team', path: '/team' },
                { name: 'Research & Innovation', path: '/research' },
                { name: 'Gallery', path: '/gallery' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/70 hover:text-enactus-yellow transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold uppercase tracking-wider text-sm text-enactus-yellow mb-5">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-enactus-yellow shrink-0 mt-0.5" />
                <span className="text-white/70">Indira Gandhi Delhi Technical University for Women, Kashmere Gate, New Delhi</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-enactus-yellow shrink-0" />
                <a href="mailto:enactus@igdtuw.ac.in" className="text-white/70 hover:text-enactus-yellow transition-colors">
                  enactus@igdtuw.ac.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold uppercase tracking-wider text-sm text-enactus-yellow mb-5">Connect</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/company/enactusigdtuw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/10 hover:bg-enactus-yellow flex items-center justify-center rounded-lg transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-navy-deep" />
              </a>
              <a
                href="https://www.instagram.com/igdtuw.en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 hover:bg-enactus-yellow flex items-center justify-center rounded-lg transition-colors group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-navy-deep" />
              </a>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-enactus-yellow text-navy-deep font-extrabold uppercase tracking-wide text-xs rounded-md hover:bg-white transition-colors"
            >
              Join Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} Enactus IGDTUW. All rights reserved.</p>
          <a
            href="https://enactus.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-enactus-yellow transition-colors"
          >
            Part of Enactus Global →
          </a>
        </div>
      </div>
    </footer>
  );
}
