const variants = {
  primary:
    "bg-[var(--brand-gradient)] text-white shadow-soft hover:-translate-y-0.5 hover:shadow-card",
  outline:
    "border border-brand-blue bg-brand-white text-brand-navy hover:-translate-y-0.5 hover:border-brand-electric hover:bg-brand-pale",
  navy: "bg-brand-navy text-white shadow-card hover:-translate-y-0.5 hover:bg-[#09275d]",
};

const sizes = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function Button({
  children,
  className = "",
  disabled = false,
  href,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-brand font-semibold transition duration-200 ease-out disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55 motion-reduce:transform-none";
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        aria-disabled={disabled || undefined}
        className={`${classes} ${disabled ? "pointer-events-none opacity-55" : ""}`}
        href={disabled ? undefined : href}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} type={type} {...props}>
      {children}
    </button>
  );
}
