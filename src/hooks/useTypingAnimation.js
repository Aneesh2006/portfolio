import { useState, useEffect, useCallback } from 'react';

/**
 * Typing animation hook that cycles through an array of strings
 * with a typewriter effect.
 *
 * Respects `prefers-reduced-motion` — returns the first word statically
 * when the user prefers reduced motion.
 *
 * @param {string[]} words - Array of strings to cycle through
 * @param {number} [typingSpeed=100] - ms per character when typing
 * @param {number} [deletingSpeed=60] - ms per character when deleting
 * @param {number} [pauseDuration=1800] - ms to pause after typing a word
 * @returns {{ displayText: string, isDeleting: boolean }}
 */
export default function useTypingAnimation(
  words = [],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1800
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex] || '';

    if (isPaused) return;

    if (!isDeleting) {
      // Typing forward
      const nextText = currentWord.slice(0, displayText.length + 1);
      setDisplayText(nextText);

      if (nextText === currentWord) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      const nextText = currentWord.slice(0, displayText.length - 1);
      setDisplayText(nextText);

      if (nextText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [words, wordIndex, displayText, isDeleting, isPaused, pauseDuration]);

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) return;

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, isPaused ? pauseDuration : speed);

    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed, isPaused, pauseDuration, prefersReducedMotion, words.length]);

  // If reduced motion is preferred, show the first word statically
  if (prefersReducedMotion) {
    return { displayText: words[0] || '', isDeleting: false };
  }

  return { displayText, isDeleting };
}
