import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import Card from './common/Card';
import Tag from './common/Tag';
import Button from './common/Button';

/**
 * Project card displaying title, description bullets, tech stack tags,
 * and optional GitHub / Live Demo links.
 *
 * @param {object} props
 * @param {object} props.project - Project data object from data/projects.js
 * @param {number} [props.index=0] - Index for staggered animation delay
 */
export default function ProjectCard({ project, index = 0 }) {
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
      className="min-w-[300px] snap-start md:min-w-0"
    >
      <Card hover className="flex flex-col h-full overflow-hidden">
        {/* Thumbnail / placeholder */}
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            className="w-full h-48 object-cover"
            loading="lazy"
            decoding="async"
            width={400}
            height={192}
          />
        ) : (
          <div className="w-full h-44 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
            <span className="text-4xl font-display font-light text-primary/20 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 md:p-6">
          {/* Title + date */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg md:text-xl font-display font-semibold text-primary leading-snug">
              {project.title}
            </h3>
            <span className="text-xs text-secondary whitespace-nowrap mt-1">
              {project.date}
            </span>
          </div>

          {/* Description */}
          <p className="text-secondary text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Bullet points */}
          <ul className="space-y-2 mb-5 flex-1">
            {project.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-secondary text-sm leading-relaxed"
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.techStack.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>

          {/* Action links */}
          {(project.github || project.live) && (
            <div className="flex items-center gap-3 pt-2 border-t border-primary/10">
              {project.github && (
                <Button
                  variant="ghost"
                  href={project.github}
                  icon={<FiGithub />}
                  className="px-3 py-2 text-xs"
                >
                  Source
                </Button>
              )}
              {project.live && (
                <Button
                  variant="ghost"
                  href={project.live}
                  icon={<FiExternalLink />}
                  className="px-3 py-2 text-xs"
                >
                  Live Demo
                </Button>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
