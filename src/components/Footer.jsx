import { FaLinkedinIn, FaGithub, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import personal from '../data/personal';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: personal.social.linkedin,
    icon: <FaLinkedinIn />,
  },
  {
    label: 'GitHub',
    href: personal.social.github,
    icon: <FaGithub />,
  },
  {
    label: 'LeetCode',
    href: personal.social.leetcode,
    icon: <SiLeetcode />,
  },
  {
    label: 'CodeChef',
    href: personal.social.codechef,
    icon: <SiCodechef />,
  },
  {
    label: 'Email',
    href: personal.social.email,
    icon: <HiOutlineMail />,
  },
];

const footerNav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="content-container py-16">
        {/* Top row — branding + email CTA */}
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <a
            href="#about"
            className="text-2xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            {personal.name}
          </a>

          <a
            href={personal.social.email}
            className="text-white/70 hover:text-white transition-colors text-sm md:text-base break-all"
          >
            {personal.email}
          </a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-10">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:scale-110 transition-all duration-200"
            >
              <span className="text-lg">{icon}</span>
            </a>
          ))}
        </div>

        {/* Navigation links */}
        <nav aria-label="Footer navigation" className="mb-10">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerNav.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/50">
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
