import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineExternalLink } from 'react-icons/hi';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from './common/SectionHeading';
import Card from './common/Card';
import certificates from '../data/certificates';

function CertificateCard({ cert, index }) {
  const { ref, controls, variants } = useScrollReveal({
    delay: index * 0.12,
    y: 25,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <Card hover className="p-6 md:p-8 flex flex-col h-full">
        {/* Icon + Date row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-violet-100 text-violet-600 shrink-0">
            <HiOutlineAcademicCap className="w-5 h-5" aria-hidden="true" />
          </span>
          <span className="text-secondary text-sm whitespace-nowrap">
            {cert.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-display font-semibold text-primary leading-snug mb-2">
          {cert.title}
        </h3>

        {/* Issuer */}
        <p className="text-secondary text-sm mb-5">{cert.issuer}</p>

        {/* Spacer to push link to bottom */}
        <div className="mt-auto">
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
              aria-label={`View certificate: ${cert.title}`}
            >
              View Certificate
              <HiOutlineExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-20 md:py-28"
      aria-label="Certificates"
      style={{ maxWidth: 'var(--content-width, 1200px)', marginInline: 'auto', paddingInline: 'var(--section-px, 1.5rem)' }}
    >
      <SectionHeading
        title="Certificates"
        subtitle="Professional certifications and courses I've completed."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
    </section>
  );
}
