import Image from "next/image";
import { ArrowRight, Headphones, MessageCircle, Rocket, ShieldCheck } from "lucide-react";
import { company } from "@/data/company";
import { getWhatsAppMessage } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";

const trustItems = [
  { label: "Fácil de usar", icon: Rocket },
  { label: "Seguro y confiable", icon: ShieldCheck },
  { label: "Soporte disponible", icon: Headphones },
];

function ProductMockup() {
  return (
    <figure
      aria-label="Mockup ilustrativo de EMAUS POS en monitor con escáner e impresora térmica"
      className="relative mx-auto min-h-[330px] w-full max-w-[620px] sm:min-h-[430px] lg:min-h-[520px]"
    >
      <div className="absolute right-0 top-1 h-64 w-[30rem] max-w-[92vw] rotate-[-21deg] rounded-full border-[30px] border-brand-cyan/70 sm:h-80 sm:w-[42rem] sm:border-[42px]" />
      <div className="absolute right-[4%] top-4 z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-brand-navy shadow-card">
        Mockup ilustrativo
      </div>

      <div className="absolute left-[7%] top-[12%] z-20 w-[78%] rotate-[-2deg] rounded-[1.25rem] bg-[#061736] p-3 shadow-soft sm:left-[9%] sm:w-[74%]">
        <div className="rounded-[0.85rem] border border-blue-200/20 bg-white p-2">
          <div className="grid aspect-[16/9] overflow-hidden rounded-lg bg-brand-pale sm:grid-cols-[0.28fr_1fr]">
            <aside className="hidden bg-brand-navy p-3 sm:block">
              <Image
                src={company.logo.src}
                alt=""
                width={90}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <div className="mt-5 grid gap-2">
                {["Inicio", "Productos", "Inventario", "Clientes", "Reportes"].map((item, index) => (
                  <span
                    className={`h-6 rounded-md ${index === 0 ? "bg-brand-blue" : "bg-white/10"}`}
                    key={item}
                  />
                ))}
              </div>
            </aside>
            <div className="p-3 sm:p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="h-4 w-28 rounded-full bg-blue-100" />
                <span className="h-7 w-20 rounded-full bg-brand-blue" />
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {["A", "B", "C", "D", "E", "F"].map((item) => (
                  <div className="rounded-lg border border-brand-border bg-white p-2 shadow-card" key={item}>
                    <span className="block aspect-square rounded-md bg-gradient-to-br from-orange-300 to-red-400" />
                    <span className="mt-2 block h-2 rounded-full bg-blue-100" />
                    <span className="mt-1 block h-2 w-2/3 rounded-full bg-blue-100" />
                  </div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-[1fr_0.7fr] gap-3">
                <div className="rounded-lg bg-white p-2 shadow-card">
                  <div className="flex h-16 items-end gap-1">
                    {[40, 70, 55, 90, 62].map((height) => (
                      <span
                        className="flex-1 rounded-t bg-brand-electric"
                        key={height}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-brand-blue p-2 text-white shadow-card">
                  <span className="block h-2 rounded-full bg-white/80" />
                  <span className="mt-2 block h-6 rounded-md bg-white/20" />
                  <span className="mt-2 block h-6 rounded-md bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-6 w-[22%] bg-[#061736]" />
        <div className="mx-auto h-4 w-[42%] rounded-t-lg bg-[#061736]" />
      </div>

      <div className="absolute bottom-[18%] left-[3%] z-30 hidden w-[26%] rotate-[-8deg] rounded-full bg-[#071225] p-3 shadow-soft sm:block">
        <div className="h-8 rounded-full bg-brand-blue shadow-[0_0_18px_rgba(8,199,232,0.8)]" />
        <div className="mx-auto mt-2 h-10 w-4 rounded-b-lg bg-[#071225]" />
      </div>

      <div className="absolute bottom-[8%] right-[3%] z-30 w-[34%] min-w-36 rounded-2xl bg-[#071225] p-3 shadow-soft sm:right-[2%]">
        <div className="absolute left-[12%] top-[-24px] h-8 w-[76%] rounded-t-md border border-brand-border bg-white" />
        <div className="relative rounded-xl border border-white/10 bg-[#0b2859] p-3">
          <Image
            src={company.logo.src}
            alt=""
            width={92}
            height={42}
            className="h-7 w-auto object-contain"
          />
          <div className="mt-4 h-3 rounded-full bg-white/15" />
          <div className="mt-2 h-3 w-2/3 rounded-full bg-white/15" />
        </div>
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
      <Container className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
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
            <Button href={whatsappLink} size="lg" variant="outline">
              <MessageCircle aria-hidden="true" size={19} />
              Escríbenos ahora
            </Button>
          </div>
          <div className="mt-8 grid gap-4 text-sm font-semibold text-brand-navy sm:grid-cols-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <div className="flex items-center gap-3" key={label}>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-blue shadow-card">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <ProductMockup />
      </Container>
    </MotionSection>
  );
}
