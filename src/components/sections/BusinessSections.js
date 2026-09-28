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
  Wine,
  Wrench,
} from "lucide-react";
import { businessFeatures, businessTypes } from "@/data/business";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { MotionCard } from "@/components/ui/MotionCard";
import { MotionSection } from "@/components/ui/MotionSection";
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
  wrench: Wrench,
};

const statusLabels = {
  operativa: "Operativa",
  "en desarrollo": "En desarrollo",
};

function BusinessTypeCard({ item }) {
  const Icon = iconMap[item.icon];

  return (
    <MotionCard className="group relative min-h-40 overflow-hidden rounded-brand border border-brand-border bg-brand-navy text-center shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-soft motion-reduce:transform-none">
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 14vw"
        className="object-cover opacity-75 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/35 to-transparent" />
      <div className="relative flex min-h-40 flex-col items-center justify-end p-4">
        <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/90 text-white shadow-card">
          <Icon aria-hidden="true" size={21} strokeWidth={2.4} />
        </span>
        <h3 className="text-sm font-black leading-tight text-white sm:text-base">{item.title}</h3>
      </div>
    </MotionCard>
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
    <MotionCard className="rounded-brand border border-white/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.2),rgba(255,255,255,0.06))] p-4 text-white shadow-[0_16px_0_rgba(4,18,54,0.3),0_24px_44px_rgba(3,14,43,0.24)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-brand-cyan hover:bg-white/20 hover:shadow-[0_18px_0_rgba(4,18,54,0.32),0_30px_50px_rgba(3,14,43,0.28)] motion-reduce:transform-none">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-cyan/60 bg-[linear-gradient(145deg,#087cfa,#0755d9)] text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.3),0_8px_16px_rgba(1,10,40,0.35)]">
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
    </MotionCard>
  );
}

function DashboardMockup() {
  return (
    <figure
      aria-label="Captura real del módulo de inventario de EMAUS POS"
      className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
    >
      <div className="absolute right-[-18%] top-[-18%] h-64 w-[34rem] rotate-[-18deg] rounded-full border-[34px] border-brand-cyan/40" />
      <div className="relative overflow-hidden rounded-[1.25rem] bg-[#061736] p-3 shadow-soft">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[0.9rem] border border-white/10 bg-white">
          <Image
            src="/images/emaus-pos-dashboard-real.png"
            alt="Pantalla real de inventario y productos de EMAUS POS"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs font-semibold text-blue-100">
        Captura real del módulo de inventario de EMAUS POS.
      </figcaption>
    </figure>
  );
}

export function BusinessTypesSection() {
  return (
    <MotionSection className="bg-brand-pale py-16 sm:py-20" id="sectores">
      <Container>
        <SectionHeading
          eyebrow="Sectores"
          title="Ideal para todo tipo de negocio"
          description="EMAUS POS se adapta a operaciones comerciales con venta directa, inventario y atención en caja."
        />
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {businessTypes.map((item) => (
            <BusinessTypeCard item={item} key={item.title} />
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}

export function BusinessFeaturesSection() {
  return (
    <MotionSection
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#061737_0%,#0b2d6b_52%,#081b43_100%)] py-16 text-white sm:py-20"
      id="caracteristicas"
    >
      <Image
        src={company.logo.src}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-110 object-contain opacity-[0.16] mix-blend-screen"
      />
      <div className="pointer-events-none absolute left-[-18%] top-[-10rem] h-[28rem] w-[44rem] rounded-full bg-brand-blue/30 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-16%] h-[30rem] w-[46rem] rounded-full bg-brand-cyan/20 blur-2xl" />
      <div className="pointer-events-none absolute right-[-10%] top-10 h-64 w-[38rem] rotate-[-16deg] rounded-full border-[32px] border-brand-electric/35" />
      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="max-w-xl">
            <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-normal text-brand-cyan">
              Funcionalidades
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Funciones que impulsan tu negocio
            </h2>
            <p className="mt-3 text-base leading-7 text-blue-100">
              Conoce las herramientas que hacen más ágil la operación diaria de tu negocio.
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
    </MotionSection>
  );
}
