import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from './common/SectionHeading';
import Card from './common/Card';
import experience from '../data/experience';

/** Badge colors by employment type */
const typeBadge = {
  Freelance: 'bg-card-bg text-primary',
  Internship: 'bg-card-bg text-primary',
  'Full-time': 'bg-card-bg text-primary',
};

function ExperienceCard({ item, index }) {
  const { ref, controls, variants } = useScrollReveal({
    delay: index * 0.15,
    y: 30,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <Card hover className="p-6 md:p-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg md:text-xl font-display font-semibold text-primary leading-snug">
              {item.role}
            </h3>
            <p className="text-secondary text-sm md:text-base flex items-center gap-1.5 mt-1">
              <HiOutlineBriefcase className="shrink-0" aria-hidden="true" />
              {item.company}
            </p>
          </div>

          <span
            className={`self-start text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${
              typeBadge[item.type] || 'bg-card-bg text-secondary'
            }`}
          >
            {item.type}
          </span>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-secondary text-sm mb-5">
          <span className="flex items-center gap-1.5">
            <HiOutlineClock className="shrink-0" aria-hidden="true" />
            {item.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <HiOutlineLocationMarker className="shrink-0" aria-hidden="true" />
            {item.location}
          </span>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2.5">
          {item.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-secondary text-sm md:text-base leading-relaxed"
            >
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"
                aria-hidden="true"
              />
              {bullet}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, controls, variants } = useScrollReveal();

  return (
    <section
      id="experience"
      className="section-padding"
      aria-label="Work Experience"
    >
      <div className="content-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <SectionHeading
            title="Experience"
            subtitle="My professional journey so far."
          />
        </motion.div>

        {/* Timeline connector + cards */}
        <div className="relative">
          {/* Vertical timeline line (visible md+) */}
          <div
            className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-primary/10"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {experience.map((item, index) => (
              <div key={item.id} className="relative md:pl-12">
                {/* Timeline dot (visible md+) */}
                <div
                  className="hidden md:flex absolute left-0 top-8 w-10 h-10 items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="w-3 h-3 rounded-full bg-primary/20 ring-4 ring-page-bg" />
                </div>

                <ExperienceCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
