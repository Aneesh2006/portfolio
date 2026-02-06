import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import personal from './personal';

/**
 * Contact information used in the Contact page.
 */

export const contactInfo = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: HiOutlineMail,
  },
  {
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    icon: HiOutlinePhone,
  },
  {
    label: 'Location',
    value: personal.location,
    href: null,
    icon: HiOutlineLocationMarker,
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: personal.social.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: personal.social.github,
    icon: FaGithub,
  },
];

/**
 * EmailJS configuration.
 * Replace these with your actual EmailJS service, template, and public key.
 * Sign up at https://www.emailjs.com/ and create:
 *   1. An email service (e.g. Gmail)
 *   2. An email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
 *   3. Get your public key from Account > API Keys
 */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_SERVICE_ID,
  templateId: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
};
