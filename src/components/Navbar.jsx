import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Button from './common/Button';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll for sticky background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="content-container flex items-center justify-between h-16 md:h-20">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-display font-semibold text-lg tracking-tight text-primary"
        >
          Aneesh Kumar
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
          <li>
            <Button
              variant="primary"
              href="mailto:aneeshkumar822006@gmail.com"
              className="text-xs px-5 py-2.5"
            >
              Contact Me
            </Button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg border-t border-gray-100"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-sm font-medium text-primary hover:bg-card-bg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-6 pt-3">
                <Button
                  variant="primary"
                  href="mailto:aneeshkumar822006@gmail.com"
                  className="w-full text-xs"
                  onClick={handleLinkClick}
                >
                  Contact Me
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/**
 * Individual nav link with animated underline on hover.
 */
function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className="relative text-sm font-medium text-secondary hover:text-primary transition-colors duration-200 group py-1"
    >
      {label}
      {/* Animated underline */}
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full" />
    </a>
  );
}
