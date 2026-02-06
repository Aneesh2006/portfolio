import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from './common/SectionHeading';
import personal from '../data/personal';

/**
 * Call-to-action section — centered message with a contact button.
 * Links to the user's email via mailto.
 */
export default function CTA() {
  const { ref, controls, variants } = useScrollReveal({ y: 30 });

  return (
    <section
      id="contact"
      className="section-padding bg-card-bg"
      aria-labelledby="cta-heading"
    >
      <div className="content-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <SectionHeading
            title="Let's Work Together"
            subtitle="Have a project in mind or looking for a developer? I'd love to hear from you."
            align="center"
          />

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-medium rounded-sm px-8 py-4 text-base tracking-wide cursor-pointer transition-all duration-200 ease-in-out bg-[#222222] dark:bg-white text-white dark:text-[#222222] hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="text-lg"><HiOutlineMail /></span>
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
