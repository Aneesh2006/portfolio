import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';
import techStack from '../data/techStack';

/** Human-readable labels for each category key */
const categoryLabels = {
  languages: 'Languages',
  databases: 'Databases',
  frameworks: 'Frameworks & Libraries',
  tools: 'Tools & Platforms',
};

/** Order categories should appear */
const categoryOrder = ['languages', 'frameworks', 'databases', 'tools'];

/** Stagger container variant for children */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/** Reduced-motion container — no stagger */
const containerVariantsReduced = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0 },
  },
};

/** Blink-and-reveal item variant — flickers then settles */
const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: [0, 0.8, 0, 1],
    scale: [0.85, 1.05, 0.95, 1],
    transition: { duration: 0.6, ease: 'easeOut', times: [0, 0.3, 0.5, 1] },
  },
};

/** Reduced-motion item variant — instant */
const itemVariantsReduced = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 1, scale: 1 },
};

function TechIcon({ name, icon: Icon, reducedMotion }) {
  return (
    <motion.div
      variants={reducedMotion ? itemVariantsReduced : itemVariants}
      className="group flex flex-col items-center gap-2 p-3 rounded-md
                 hover:bg-card-bg hover:shadow-card transition-all duration-200"
    >
      <Icon
        className="text-3xl md:text-4xl text-secondary group-hover:text-primary transition-colors duration-200"
        aria-hidden="true"
      />
      <span className="text-xs md:text-sm text-secondary group-hover:text-primary transition-colors duration-200 text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
}

function TechCategory({ categoryKey, items }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mb-10 last:mb-0">
      <h3 className="text-sm md:text-base font-display font-semibold text-secondary uppercase tracking-wider mb-5">
        {categoryLabels[categoryKey] || categoryKey}
      </h3>

      <motion.div
        variants={prefersReducedMotion ? containerVariantsReduced : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3"
      >
        {items.map((tech) => (
          <TechIcon key={tech.name} name={tech.name} icon={tech.icon} reducedMotion={prefersReducedMotion} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="section-padding content-container"
      aria-label="Technical skills"
    >
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies and tools I work with"
      />

      {categoryOrder.map((key) => (
        <TechCategory
          key={key}
          categoryKey={key}
          items={techStack[key]}
        />
      ))}
    </section>
  );
}
