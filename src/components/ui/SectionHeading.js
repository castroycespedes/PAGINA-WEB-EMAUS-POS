export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center mx-auto";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-black uppercase tracking-normal text-brand-navy">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-brand-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
