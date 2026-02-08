import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionHeading from './common/SectionHeading';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

/**
 * Projects section — responsive grid on desktop, horizontal snap-scroll on mobile/tablet.
 * Includes left/right scroll buttons for the horizontal layout.
 */
export default function Projects() {
  const { ref, controls, variants } = useScrollReveal();
  const scrollRef = useRef(null);

  /** Scroll the container left or right by one card width */
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="projects"
      className="section-padding"
      aria-label="Projects"
    >
      <div className="content-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <SectionHeading
            title="Projects"
            subtitle="A selection of things I've built and experimented with."
          />
        </motion.div>

        {/* Desktop: grid layout (hidden on mobile/tablet) */}
        <div
          className="hidden lg:grid gap-6"
          style={{
            gridTemplateColumns: `repeat(${Math.min(projects.length, 3)}, 1fr)`,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Mobile / Tablet: horizontal snap-scroll (hidden on desktop) */}
        <div className="lg:hidden relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-page-bg shadow-card flex items-center justify-center text-primary hover:bg-card-bg transition-colors cursor-pointer"
            aria-label="Scroll projects left"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-page-bg shadow-card flex items-center justify-center text-primary hover:bg-card-bg transition-colors cursor-pointer"
            aria-label="Scroll projects right"
          >
            <FiChevronRight size={20} />
          </button>

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-1 px-1 scrollbar-hide"
          >
            {projects.map((project, i) => (
              <div key={project.id} className="w-[80vw] min-w-[260px] max-w-[340px] shrink-0 snap-start">
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
