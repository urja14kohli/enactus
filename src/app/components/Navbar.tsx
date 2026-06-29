import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const mainLinks = [
  { name: 'About', path: '/about' },
  { name: 'Ventures', path: '/ventures' },
  { name: 'Impact', path: '/impact' },
  { name: 'Events', path: '/events' },
  { name: 'Team', path: '/team' },
  { name: 'Gallery', path: '/gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solid = isScrolled || isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid
            ? 'bg-navy-deep/65 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${solid ? 'py-3' : 'py-4'}`}>
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/logos/enactus-logo-white.png"
                alt="Enactus IGDTUW"
                className="h-11 md:h-12 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-9">
              {mainLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-semibold uppercase tracking-wide transition-colors group ${
                    location.pathname === link.path ? 'text-enactus-yellow' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 bg-enactus-yellow transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-enactus-yellow text-navy-deep text-sm font-extrabold uppercase tracking-wide rounded-md hover:bg-white transition-colors"
              >
                Join Us
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed inset-0 z-40 lg:hidden surface-dark pt-24"
          >
            <div className="h-full overflow-y-auto px-6 py-6">
              <div className="space-y-1">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 text-2xl font-extrabold uppercase tracking-wide text-white border-b border-white/10"
                >
                  Home
                </Link>
                {mainLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-4 text-2xl font-extrabold uppercase tracking-wide border-b border-white/10 ${
                      location.pathname === link.path ? 'text-enactus-yellow' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full mt-8 py-4 bg-enactus-yellow text-navy-deep font-extrabold text-center uppercase tracking-wide rounded-md"
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
