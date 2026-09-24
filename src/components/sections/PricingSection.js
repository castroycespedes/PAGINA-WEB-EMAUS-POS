import { Check, Gift } from "lucide-react";
import { commercialPlans, formatPlanPrice, getPlanDemoMessage, plansPromotion } from "@/data/plans";
import { getWhatsAppMessage } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function PlanCard({ plan }) {
  const isFeatured = plan.featured;
  const price = formatPlanPrice(plan);
  const terminalLabel = plan.terminals === 1 ? "1 terminal" : `${plan.terminals} terminales`;

  return (
    <article
      className={`relative flex h-full flex-col rounded-brand border p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-soft motion-reduce:transform-none ${
        isFeatured
          ? "border-brand-cyan bg-[linear-gradient(180deg,#08c7e8_0%,#eff7ff_34%,#ffffff_100%)]"
          : "border-brand-border bg-white"
      }`}
    >
      <div>
        <h3 className="text-center text-2xl font-black leading-tight text-brand-navy">{plan.name}</h3>
        <p className="mt-1 text-center text-sm font-semibold text-brand-muted">{terminalLabel}</p>
        <p className="mt-6 text-center text-4xl font-black text-brand-navy">{price}</p>
        <p className="mt-1 text-center text-sm font-semibold text-brand-muted">
          {plan.currency} {plan.billingPeriod}
        </p>
      </div>

      <ul className="mt-7 grid gap-3 text-sm font-semibold text-brand-navy">
        {plan.features.map((feature) => (
          <li className="flex items-start gap-3" key={feature}>
            <Check className="mt-0.5 shrink-0 text-brand-electric" aria-hidden="true" size={19} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Button
          className="w-full"
          href={getWhatsAppMessage(getPlanDemoMessage(plan))}
          variant={isFeatured ? "primary" : "outline"}
        >
          Pedir demo
        </Button>
      </div>
    </article>
  );
}

export function PricingSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#eff7ff_0%,#ffffff_100%)] py-16 sm:py-20" id="planes">
      <Container>
        <SectionHeading
          eyebrow="Planes"
          title="Planes que se adaptan a ti"
          description="Elige el número de terminales que necesita tu negocio. Los valores se mantienen centralizados para facilitar futuros cambios comerciales."
        />

        {plansPromotion.enabled ? (
          <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-3 rounded-brand border border-brand-border bg-white p-4 text-sm text-brand-navy shadow-card sm:flex-row sm:items-center">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-pale text-brand-blue">
              <Gift aria-hidden="true" size={22} />
            </span>
            <div>
              <p className="font-black">
                {plansPromotion.label} <span className="font-semibold">({plansPromotion.status})</span>
              </p>
              <p className="mt-1 text-brand-muted">
                {plansPromotion.validity}. {plansPromotion.conditions}.
              </p>
            </div>
          </div>
        ) : null}

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {commercialPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
