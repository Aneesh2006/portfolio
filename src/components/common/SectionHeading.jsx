/**
 * Section heading with title and optional subtitle.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {'left'|'center'} [props.align='left']
 * @param {string} [props.className]
 */
export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2
        className="font-display font-light tracking-tight text-primary"
        style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-secondary text-base md:text-lg max-w-2xl leading-relaxed"
          style={align === 'center' ? { marginInline: 'auto' } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
