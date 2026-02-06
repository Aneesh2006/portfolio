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

function TechIcon({ name, icon: Icon, color, svgGradient, reducedMotion }) {
  const iconColor = color || 'var(--color-secondary)';

  return (
    <motion.div
      variants={reducedMotion ? itemVariantsReduced : itemVariants}
      className={`group flex flex-col items-center gap-2 p-3 rounded-md
                 hover:bg-card-bg hover:shadow-card transition-all duration-200${svgGradient ? ` ${svgGradient.id}` : ''}`}
    >
      <Icon
        className="text-3xl md:text-4xl transition-transform duration-200 group-hover:scale-105"
        style={svgGradient ? undefined : { color: iconColor }}
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
          <TechIcon
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            color={tech.color}
            svgGradient={tech.svgGradient}
            reducedMotion={prefersReducedMotion}
          />
        ))}
      </motion.div>
    </div>
  );
}

/** Collect SVG gradient definitions from all tech stack categories */
const allGradients = categoryOrder.flatMap((key) =>
  techStack[key]
    .filter((t) => t.svgGradient)
    .map((t) => t.svgGradient)
);

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="section-padding content-container"
      aria-label="Technical skills"
    >
      {/* SVG gradient definitions for multi-color icons */}
      {allGradients.length > 0 && (
        <>
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              {allGradients.map((g) => (
                <linearGradient key={g.id} id={g.id} {...g.attrs}>
                  {g.stops.map((stop, i) => (
                    <stop key={i} offset={stop.offset} stopColor={stop.color} />
                  ))}
                </linearGradient>
              ))}
            </defs>
          </svg>
          <style>
            {allGradients
              .map(
                (g) =>
                  `.${g.id} svg,\n.${g.id} svg path,\n.${g.id} svg rect,\n.${g.id} svg circle,\n.${g.id} svg polygon { fill: url(#${g.id}) !important; }`
              )
              .join('\n')}
          </style>
        </>
      )}

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
