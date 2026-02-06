import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from './common/SectionHeading';
import Button from './common/Button';
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

          <Button
            variant="primary"
            href={personal.social.email}
            icon={<HiOutlineMail />}
            className="text-base px-8 py-4"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
