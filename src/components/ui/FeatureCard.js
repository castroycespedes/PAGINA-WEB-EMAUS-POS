export function FeatureCard({ icon: Icon, title, description, className = "" }) {
  return (
    <article
      className={`group rounded-brand border border-brand-border bg-brand-white p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-cyan hover:shadow-soft motion-reduce:transform-none ${className}`}
    >
      {Icon ? (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-pale text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
          <Icon aria-hidden="true" size={24} />
        </div>
      ) : null}
      <h3 className="text-lg font-black leading-tight text-brand-navy">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-brand-muted">{description}</p>
      ) : null}
    </article>
  );
}
