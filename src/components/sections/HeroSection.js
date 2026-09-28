import Image from "next/image";
import { ArrowRight, Headphones, MessageCircle, Rocket, ShieldCheck } from "lucide-react";
import { getWhatsAppMessage } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";

const trustItems = [
  { label: "Fácil de usar", description: "Aprende rápido y vende sin complicaciones.", icon: Rocket },
  { label: "Seguro y confiable", description: "Información clara para operar con tranquilidad.", icon: ShieldCheck },
  { label: "Soporte 24/7", description: "Acompañamiento cuando tu negocio lo necesita.", icon: Headphones },
];

function ProductMockup() {
  return (
    <figure
      aria-label="Vista real de EMAUS POS en un minimarket con punto de venta"
      className="relative isolate mx-auto aspect-[16/9] w-full max-w-none overflow-hidden rounded-[1.5rem] border-4 border-white bg-[#061736] shadow-soft sm:rounded-[2rem] lg:h-full lg:aspect-auto lg:min-h-0 lg:self-stretch"
    >
      <Image
        src="/images/emaus-pos-hero-real.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="scale-110 object-cover opacity-35 blur-xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(8,124,250,0.35),transparent_58%),linear-gradient(180deg,rgba(6,23,54,0.18),rgba(6,23,54,0.7))]" />
      <Image
        src="/images/emaus-pos-hero-real.png"
        alt="EMAUS POS en un comercio con pantalla de ventas, lector e impresora térmica"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="z-10 object-contain p-2 sm:p-3 lg:p-5"
      />
      <div className="absolute inset-x-4 bottom-4 rounded-full bg-brand-navy/85 px-4 py-2 text-center text-xs font-bold text-white shadow-card backdrop-blur sm:inset-x-auto sm:right-5 sm:px-5">
        Una operación más clara, rápida y profesional
      </div>
    </figure>
  );
}

export function HeroSection() {
  const whatsappLink = getWhatsAppMessage();

  return (
    <MotionSection
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_85%_12%,#d7f8ff_0%,transparent_28%),linear-gradient(180deg,#ffffff_0%,#eff7ff_100%)] pb-16 pt-10 sm:pb-20 lg:pt-14"
      id="inicio"
    >
      <div className="pointer-events-none absolute left-[-20%] top-[-18rem] h-[36rem] w-[52rem] rounded-full bg-white" />
      <div className="pointer-events-none absolute bottom-[-14rem] right-[-18%] h-[26rem] w-[42rem] rounded-full bg-brand-blue/10" />
      <Container className="relative grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-black uppercase tracking-normal text-brand-navy">
            Software de punto de venta
          </p>
          <h1 className="mt-5 text-4xl font-black leading-[1.03] text-brand-navy sm:text-5xl lg:text-6xl">
            Todo tu negocio en un <span className="text-brand-electric">solo lugar</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-brand-navy/80 sm:text-xl">
            Ventas, facturación electrónica, inventario, caja y reportes en una plataforma ágil y confiable.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink} size="lg">
              Pedir demo
              <ArrowRight aria-hidden="true" size={19} />
            </Button>
            <Button href={whatsappLink} size="lg" variant="success">
              <MessageCircle aria-hidden="true" size={19} />
              Escríbenos ahora
            </Button>
          </div>
          <div className="mt-8 grid gap-4 text-sm font-semibold text-brand-navy sm:grid-cols-3">
            {trustItems.map(({ icon: Icon, label, description }) => (
              <div className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/75 p-3 shadow-card backdrop-blur" key={label}>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white shadow-card ring-4 ring-brand-blue/10">
                  <Icon aria-hidden="true" size={21} strokeWidth={2.4} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-black text-brand-navy">{label}</span>
                  <span className="mt-1 block text-[11px] leading-5 text-brand-muted sm:text-xs">{description}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <ProductMockup />
      </Container>
    </MotionSection>
  );
}
