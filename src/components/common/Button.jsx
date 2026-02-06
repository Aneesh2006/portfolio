import { forwardRef } from 'react';

/**
 * Button component supporting primary, outline, and ghost variants.
 * Renders as <a> when href is provided, otherwise <button>.
 *
 * @param {object} props
 * @param {'primary'|'outline'|'ghost'} props.variant
 * @param {string} [props.href] - If provided, renders an anchor tag
 * @param {Function} [props.onClick]
 * @param {string} [props.className]
 * @param {React.ReactNode} [props.icon] - Icon element to render before children
 * @param {React.ReactNode} props.children
 */
const Button = forwardRef(function Button(
  { children, variant = 'primary', href, onClick, className = '', icon, ...rest },
  ref
) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-sm px-6 py-3 text-sm tracking-wide cursor-pointer transition-all duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary/90 hover:scale-[1.03] active:scale-[0.98]',
    outline:
      'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:scale-[1.03] active:scale-[0.98]',
    ghost:
      'text-primary bg-transparent hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98]',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        onClick={onClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} onClick={onClick} {...rest}>
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
});

export default Button;
