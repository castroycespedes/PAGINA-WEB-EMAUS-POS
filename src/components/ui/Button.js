const variants = {
  primary:
    "bg-brand-blue text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-electric hover:shadow-card",
  success:
    "bg-[#20c863] text-white shadow-[0_12px_28px_rgba(32,200,99,0.25)] hover:-translate-y-0.5 hover:bg-[#16a958] hover:shadow-[0_16px_32px_rgba(32,200,99,0.32)]",
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
