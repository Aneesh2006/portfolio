import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
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
      staggerChildren: 0.06,
    },
  },
};

/** Individual icon item variant */
const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

function TechIcon({ name, icon: Icon }) {
  return (
    <motion.div
      variants={itemVariants}
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

function TechCategory({ categoryKey, items, index }) {
  const { ref, controls, variants } = useScrollReveal({
    delay: index * 0.12,
    y: 24,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="mb-10 last:mb-0"
    >
      <h3 className="text-sm md:text-base font-display font-semibold text-secondary uppercase tracking-wider mb-5">
        {categoryLabels[categoryKey] || categoryKey}
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3"
      >
        {items.map((tech) => (
          <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="section-padding content-container"
      aria-label="Technical skills"
    >
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies and tools I work with"
      />

      {categoryOrder.map((key, index) => (
        <TechCategory
          key={key}
          categoryKey={key}
          items={techStack[key]}
          index={index}
        />
      ))}
    </section>
  );
}
