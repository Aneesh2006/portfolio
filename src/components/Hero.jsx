import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { HiOutlineMail, HiOutlineDocumentDownload } from 'react-icons/hi';
import useTypingAnimation from '../hooks/useTypingAnimation';
import useScrollReveal from '../hooks/useScrollReveal';
import Button from './common/Button';
import personal from '../data/personal';

export default function Hero() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { displayText, isDeleting } = useTypingAnimation(personal.heroRoles);

  // Parallax effect for profile image (disabled when reduced motion is preferred)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 60]
  );

  // Scroll-reveal for text content
  const { ref: textRef, controls: textControls, variants: textVariants } =
    useScrollReveal({ delay: 0.1, y: 30 });

  // Scroll-reveal for image
  const { ref: imgRef, controls: imgControls, variants: imgVariants } =
    useScrollReveal({ delay: 0.3, y: 40 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center pt-20 md:pt-0"
      aria-label="Hero"
    >
      <div className="content-container w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 lg:gap-20 py-12 md:py-0">
          {/* Left — Text Content */}
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={textControls}
            variants={textVariants}
            className="flex-1 text-center md:text-left"
          >
            {/* Greeting */}
            <p className="text-secondary text-sm md:text-base font-medium tracking-wide uppercase mb-3">
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1
              className="font-display font-light tracking-tight text-primary leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
            >
              <span className="font-semibold">Aneesh</span> Kumar
            </h1>

            {/* Typing animation */}
            <div
              className="h-8 md:h-10 flex items-center justify-center md:justify-start mb-6"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="text-secondary text-lg md:text-xl font-body">
                {displayText}
                <span
                  className={`inline-block w-[2px] h-5 md:h-6 bg-primary ml-0.5 align-middle ${
                    isDeleting ? 'opacity-100' : 'animate-pulse'
                  }`}
                  aria-hidden="true"
                />
              </span>
            </div>

            {/* Summary */}
            <p className="text-secondary text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
              {personal.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                variant="primary"
                href="/contact"
                icon={<HiOutlineMail />}
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                href="/resume.pdf"
                icon={<HiOutlineDocumentDownload />}
              >
                View Resume
              </Button>
            </div>
          </motion.div>

          {/* Right — Profile Image with parallax */}
          <motion.div
            ref={imgRef}
            initial="hidden"
            animate={imgControls}
            variants={imgVariants}
            className="flex-shrink-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] relative"
          >
            <motion.div
              style={{ y: imageY }}
              className="w-full h-full rounded-full overflow-hidden bg-card-bg shadow-card-hover ring-4 ring-card-bg"
            >
              <img
                src="/images/profile.webp"
                alt={`Portrait of ${personal.name}`}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={360}
                height={360}
              />
            </motion.div>

            {/* Decorative accent */}
            <div
              className="absolute -z-10 inset-0 rounded-full bg-primary/5 translate-x-3 translate-y-3"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator (hidden when reduced motion preferred) */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-secondary text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-secondary/40 flex justify-center pt-1.5"
            aria-hidden="true"
          >
            <motion.div
              className="w-1 h-1.5 rounded-full bg-secondary"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
