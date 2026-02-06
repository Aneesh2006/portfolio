import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '/contact', isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

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

  /** Resolve hash links: always use full path for React Router */
  const resolveHref = (link) => {
    if (link.isRoute) return link.href;
    // Always prefix with / for hash links to ensure React Router handles navigation
    return `/${link.href}`;
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'bg-page-bg/80 shadow-sm'
          : 'bg-page-bg/40'
      }`}
    >
      <div className="content-container flex items-center justify-between h-16 md:h-20">
        {/* Logo / Name */}
        <Link
          to="/"
          className="font-display font-semibold text-lg tracking-tight text-primary"
          aria-label="Aneesh Kumar — back to top"
        >
          Aneesh Kumar
        </Link>

        {/* Desktop Links + Theme Toggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={resolveHref(link)}
                  label={link.label}
                  isActive={link.isRoute && location.pathname === link.href}
                />
              </li>
            ))}
          </ul>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <button
            className="p-2 text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' }}
            className="md:hidden absolute top-16 inset-x-0 bg-page-bg shadow-lg border-t border-border"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={resolveHref(link)}
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-sm font-medium text-primary hover:bg-card-bg transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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
function NavLink({ href, label, isActive }) {
  const classes = `relative text-sm font-medium transition-colors duration-200 group py-1 ${
    isActive ? 'text-primary' : 'text-secondary hover:text-primary'
  }`;

  const underline = (
    <span
      className={`absolute left-0 -bottom-0.5 h-[2px] bg-primary transition-all duration-300 ease-in-out ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`}
    />
  );

  return (
    <Link to={href} className={classes}>
      {label}
      {underline}
    </Link>
  );
}

/**
 * Minimal icon-only theme toggle button (sun/moon).
 */
function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-2 rounded-full text-secondary hover:text-primary hover:bg-card-bg transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
    </button>
  );
}
