import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PricingCard({
  title,
  subtitle,
  price,
  features = [],
  highlighted = false,
  cta = "Pedir demo",
  href = "#",
}) {
  return (
    <article
      className={`relative rounded-brand border bg-brand-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-soft motion-reduce:transform-none ${
        highlighted ? "border-brand-cyan ring-2 ring-brand-cyan/30" : "border-brand-border"
      }`}
    >
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      {subtitle ? <p className="mt-1 text-sm font-semibold text-brand-muted">{subtitle}</p> : null}
      <p className="mt-5 text-4xl font-black text-brand-navy">{price}</p>
      <ul className="mt-6 grid gap-3 text-sm text-brand-muted">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="mt-0.5 shrink-0 text-brand-electric" aria-hidden="true" size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-6 w-full" href={href} variant={highlighted ? "primary" : "outline"}>
        {cta}
      </Button>
    </article>
  );
}
