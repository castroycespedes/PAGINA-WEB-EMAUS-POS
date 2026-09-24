import Image from "next/image";
import { Boxes, CheckCircle2, LayoutTemplate } from "lucide-react";
import { company } from "@/data/company";
import { getWhatsAppMessage } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const scopeItems = [
  "Base tecnica inicial lista para iterar",
  "Logo y diseno de referencia integrados como assets",
  "Componentes layout y datos de empresa centralizados",
];

export function StarterSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#d7f8ff,transparent_32%),linear-gradient(180deg,#ffffff_0%,#eff7ff_100%)] py-16 sm:py-20">
      <div className="pointer-events-none absolute right-[-12%] top-10 h-64 w-[42rem] rotate-[-18deg] rounded-full border-[34px] border-brand-cyan/45" />
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-black uppercase tracking-normal text-brand-navy">
            Proyecto inicial
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight text-brand-navy sm:text-5xl">
            {company.name}, producto de {company.developer}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-brand-muted">
            Esta entrega prepara la arquitectura frontend, los componentes base y los datos centrales. La pagina completa queda pendiente de aprobacion.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={getWhatsAppMessage()}>Pedir demo</Button>
            <Button href={company.emailHref} variant="outline">
              Contactar por email
            </Button>
          </div>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-brand-navy">
            {scopeItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-blue" aria-hidden="true" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-brand border border-brand-border bg-white p-6 shadow-soft">
          <Image
            src={company.logo.src}
            alt={company.logo.alt}
            width={720}
            height={720}
            className="mx-auto aspect-square max-h-[420px] w-full object-contain"
            priority
          />
        </div>
      </Container>
      <Container className="mt-14">
        <SectionHeading
          eyebrow="Identidad visual"
          title="Sistema base listo para crecer"
          description="Tokens, componentes y estilos siguen la referencia blanca, tecnologica y azul-cian de EMAUS POS."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <FeatureCard
            icon={LayoutTemplate}
            title="Componentes reutilizables"
            description="Button, Container, SectionHeading, FeatureCard y PricingCard quedaron preparados para las siguientes fases."
          />
          <FeatureCard
            icon={Boxes}
            title="Tokens de marca"
            description="Paleta, radios, sombras, fuente y transiciones estan centralizados para mantener uniformidad responsive."
          />
        </div>
      </Container>
    </section>
  );
}
