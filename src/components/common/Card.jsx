import { motion, useReducedMotion } from 'framer-motion';

/**
 * Card component with optional hover animation.
 * Respects `prefers-reduced-motion` — disables scale/shadow hover when enabled.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {boolean} [props.hover=true] - Enable hover scale + shadow effect
 * @param {string} [props.as='div'] - HTML tag or component to render as
 */
export default function Card({
  children,
  className = '',
  hover = true,
  as = 'div',
  ...rest
}) {
  const Component = motion.create(as);
  const prefersReducedMotion = useReducedMotion();

  const hoverEffect =
    hover && !prefersReducedMotion
      ? { scale: 1.02, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }
      : undefined;

  return (
    <Component
      className={`bg-card-bg rounded-md shadow-card transition-shadow duration-250 ease-in-out ${hover ? 'hover:shadow-card-hover' : ''} ${className}`}
      whileHover={hoverEffect}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      {...rest}
    >
      {children}
    </Component>
  );
}
