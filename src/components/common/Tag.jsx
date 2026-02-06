/**
 * Tag/Pill component for tech stack labels on project cards.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {'default'|'outlined'} [props.variant='default']
 * @param {string} [props.className]
 */
export default function Tag({ label, variant = 'default', className = '' }) {
  const variants = {
    default:
      'bg-primary/5 text-primary',
    outlined:
      'bg-transparent border border-primary/20 text-primary',
  };

  return (
    <span
      className={`inline-block rounded-sm px-3 py-1 text-xs font-medium tracking-wide ${variants[variant] || variants.default} ${className}`}
    >
      {label}
    </span>
  );
}
