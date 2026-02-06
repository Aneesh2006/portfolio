import { useRef, useEffect, useState } from 'react';
import { useInView, useAnimation } from 'framer-motion';

/**
 * Scroll-reveal hook wrapping Framer Motion's useInView with standard animation variants.
 *
 * Respects `prefers-reduced-motion` — skips animations when enabled.
 *
 * @param {object} [options]
 * @param {number} [options.amount=0.2] - Fraction of element visible to trigger (0-1)
 * @param {boolean} [options.once=true] - Animate only the first time it enters view
 * @param {number} [options.delay=0] - Delay before animation starts (seconds)
 * @param {number} [options.duration=0.6] - Animation duration (seconds)
 * @param {number} [options.y=20] - Initial translateY offset in px
 * @returns {{ ref: React.RefObject, controls: AnimationControls, variants: object, isInView: boolean }}
 */
export default function useScrollReveal({
  amount = 0.2,
  once = true,
  delay = 0,
  duration = 0.6,
  y = 20,
} = {}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount, once });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const variants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: 'easeOut',
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return { ref, controls, variants, isInView };
}
