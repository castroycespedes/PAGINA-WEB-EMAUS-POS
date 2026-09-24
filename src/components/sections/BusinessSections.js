import Image from "next/image";
import {
  BarChart3,
  Boxes,
  ChartColumn,
  Cross,
  FileText,
  Package,
  ShoppingCart,
  Store,
  Users,
  Utensils,
  Wine,
  Wrench,
} from "lucide-react";
import { businessFeatures, businessTypes } from "@/data/business";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  barChart: BarChart3,
  bottle: Wine,
  boxes: Boxes,
  chartColumn: ChartColumn,
  cross: Cross,
  fileText: FileText,
  package: Package,
  shoppingCart: ShoppingCart,
  store: Store,
  users: Users,
  utensils: Utensils,
  wrench: Wrench,
};

const statusLabels = {
  operativa: "Operativa",
  "en desarrollo": "En desarrollo",
};

function BusinessTypeCard({ item }) {
  const Icon = iconMap[item.icon];

  return (
    <article className="flex min-h-32 flex-col items-center justify-center rounded-brand border border-brand-border bg-white p-5 text-center shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-cyan hover:shadow-soft motion-reduce:transform-none">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-pale text-brand-blue">
        <Icon aria-hidden="true" size={28} strokeWidth={2.4} />
      </span>
      <h3 className="mt-4 text-base font-black leading-tight text-brand-navy">{item.title}</h3>
    </article>
  );
}

function FeatureStatus({ status }) {
  const isDevelopment = status === "en desarrollo";

  return (
    <span
      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-normal ${
        isDevelopment ? "bg-cyan-100 text-brand-navy" : "bg-brand-blue/20 text-cyan-100"
      }`}
    >
      {statusLabels[status]}
    </span>
  );
}

function BusinessFeatureCard({ item }) {
  const Icon = iconMap[item.icon];

  return (
    <article className="rounded-brand border border-white/15 bg-white/10 p-4 text-white shadow-card backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-brand-cyan/80 hover:bg-white/15 motion-reduce:transform-none">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-brand-cyan">
          <Icon aria-hidden="true" size={25} />
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-black leading-tight">{item.title}</h3>
            <FeatureStatus status={item.status} />
          </div>
          <p className="mt-2 text-sm leading-6 text-blue-100">{item.description}</p>
        </div>
      </div>
    </article>
  );
}

function DashboardMockup() {
  return (
    <figure
      aria-label="Mockup ilustrativo del dashboard EMAUS POS"
      className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
    >
      <div className="absolute right-[-18%] top-[-18%] h-64 w-[34rem] rotate-[-18deg] rounded-full border-[34px] border-brand-cyan/40" />
      <div className="relative rounded-[1.25rem] bg-[#061736] p-3 shadow-soft">
        <div className="overflow-hidden rounded-[0.9rem] border border-white/10 bg-white">
          <div className="grid min-h-[300px] grid-cols-[0.32fr_1fr] bg-brand-pale sm:min-h-[360px]">
            <aside className="bg-brand-navy p-4">
              <Image
                src={company.logo.src}
                alt=""
                width={110}
                height={50}
                className="h-9 w-auto object-contain"
              />
              <div className="mt-6 grid gap-3">
                {["Inicio", "Ventas", "Inventario", "Clientes", "Reportes"].map((item, index) => (
                  <span
                    className={`h-7 rounded-md ${index === 0 ? "bg-brand-blue" : "bg-white/10"}`}
                    key={item}
                  />
                ))}
              </div>
            </aside>
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="block h-3 w-28 rounded-full bg-blue-100" />
                  <span className="mt-2 block h-5 w-40 rounded-full bg-brand-navy/10" />
                </div>
                <span className="h-9 w-24 rounded-full bg-brand-blue" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {["$44.730", "$12.480", "1.250"].map((value) => (
                  <div className="rounded-lg bg-white p-3 shadow-card" key={value}>
                    <span className="block h-2 w-12 rounded-full bg-blue-100" />
                    <span className="mt-3 block text-sm font-black text-brand-blue">{value}</span>
                    <span className="mt-2 block h-2 rounded-full bg-blue-100" />
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-[1.25fr_0.75fr]">
                <div className="rounded-lg bg-white p-4 shadow-card">
                  <span className="block h-3 w-24 rounded-full bg-brand-navy/10" />
                  <div className="mt-5 flex h-28 items-end gap-2">
                    {[48, 72, 55, 88, 64, 96].map((height) => (
                      <span
                        className="flex-1 rounded-t bg-brand-electric"
                        key={height}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-card">
                  <span className="block h-3 w-20 rounded-full bg-brand-navy/10" />
                  <div className="mt-5 grid gap-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div className="flex items-center gap-2" key={item}>
                        <span className="h-8 w-8 rounded-md bg-brand-pale" />
                        <span className="h-3 flex-1 rounded-full bg-blue-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs font-semibold text-blue-100">
        Mockup ilustrativo del dashboard. No es una captura funcional del sistema.
      </figcaption>
    </figure>
  );
}

export function BusinessTypesSection() {
  return (
    <section className="bg-brand-pale py-16 sm:py-20" id="sectores">
      <Container>
        <SectionHeading
          eyebrow="Sectores"
          title="Ideal para todo tipo de negocio"
          description="EMAUS POS se adapta a operaciones comerciales con venta directa, inventario y atención en caja."
        />
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-7">
          {businessTypes.map((item) => (
            <BusinessTypeCard item={item} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BusinessFeaturesSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-brand-navy py-16 text-white sm:py-20"
      id="caracteristicas"
    >
      <div className="pointer-events-none absolute left-[-18%] top-[-10rem] h-[28rem] w-[44rem] rounded-full bg-brand-blue/30 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-16%] h-[30rem] w-[46rem] rounded-full bg-brand-cyan/20 blur-2xl" />
      <div className="pointer-events-none absolute right-[-10%] top-10 h-64 w-[38rem] rotate-[-16deg] rounded-full border-[32px] border-brand-electric/35" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="max-w-xl">
            <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-normal text-brand-cyan">
              Funcionalidades
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Funciones que impulsan tu negocio
            </h2>
            <p className="mt-3 text-base leading-7 text-blue-100">
              Separé cada capacidad entre operativa y en desarrollo para mantener claro qué se puede comunicar hoy y qué requiere confirmación.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {businessFeatures.map((item) => (
              <BusinessFeatureCard item={item} key={item.title} />
            ))}
          </div>
        </div>
        <DashboardMockup />
      </Container>
    </section>
  );
}
