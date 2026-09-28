import { Check } from "lucide-react";
import { commercialPlans, formatPlanPrice, getPlanDemoMessage } from "@/data/plans";
import { getWhatsAppMessage } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionCard } from "@/components/ui/MotionCard";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

function PlanCard({ plan }) {
  const isFeatured = plan.featured;
  const price = formatPlanPrice(plan);
  const terminalLabel = plan.terminals === 1 ? "1 terminal" : `${plan.terminals} terminales`;

  return (
    <MotionCard
      className={`relative flex h-full flex-col rounded-brand border p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-soft motion-reduce:transform-none ${
        isFeatured
          ? "border-brand-cyan bg-[linear-gradient(180deg,#08c7e8_0%,#eff7ff_34%,#ffffff_100%)] shadow-[0_12px_0_#0755d9,0_26px_44px_rgba(7,85,217,0.2)]"
          : "border-brand-border bg-[linear-gradient(145deg,#ffffff_0%,#eff7ff_100%)] shadow-[0_10px_0_#c4d9f2,0_22px_38px_rgba(11,31,70,0.14)]"
      }`}
    >
      <div>
        {isFeatured ? (
          <span className="mx-auto mb-4 block w-fit rounded-full bg-brand-blue px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-card">
            Más elegido
          </span>
        ) : null}
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-brand-blue shadow-[0_2px_0_#063b99]" />
        <h3 className="text-center text-2xl font-black leading-tight text-brand-navy">{plan.name}</h3>
        <p className="mt-1 text-center text-sm font-semibold text-brand-muted">{terminalLabel}</p>
        <p className="mx-auto mt-3 max-w-[16rem] text-center text-sm leading-5 text-brand-muted">{plan.subtitle}</p>
        <p className="mt-6 text-center text-4xl font-black text-brand-navy">{price}</p>
        <p className="mt-1 text-center text-sm font-semibold text-brand-muted">
          {plan.currency} {plan.billingPeriod}
        </p>
      </div>

      <ul className="mt-7 grid gap-3 text-sm font-semibold text-brand-navy">
        {plan.features.map((feature) => (
          <li className="flex items-start gap-3" key={feature}>
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_3px_0_#063b99]">
              <Check aria-hidden="true" size={15} strokeWidth={3} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Button
          className="w-full"
          href={getWhatsAppMessage(getPlanDemoMessage(plan))}
          variant="primary"
        >
          Pedir demo
        </Button>
      </div>
    </MotionCard>
  );
}

export function PricingSection() {
  return (
    <MotionSection className="bg-[linear-gradient(180deg,#eff7ff_0%,#ffffff_100%)] py-16 sm:py-20" id="planes">
      <Container>
        <SectionHeading
          eyebrow="Planes"
          title="Planes que se adaptan a ti"
          description="Elige el número de terminales que necesita tu negocio. Los valores se mantienen centralizados para facilitar futuros cambios comerciales."
        />

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {commercialPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
