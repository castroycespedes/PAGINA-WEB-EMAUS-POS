import { Mail, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { getEmailLink, getWhatsAppMessage } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <MotionSection className="bg-brand-pale py-16 sm:py-20" id="soporte">
      <Container>
        <div className="relative overflow-hidden rounded-brand border border-brand-cyan/45 bg-[radial-gradient(circle_at_top_right,#ffffff_0%,transparent_30%),linear-gradient(135deg,#c9f3ff_0%,#a9e5fb_52%,#e5f8ff_100%)] p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-white/35 blur-2xl" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-cyan/25 blur-2xl" />
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
            <SectionHeading
              align="left"
              eyebrow="Contacto"
              title="Hablemos de EMAUS POS"
              description="Resolvemos tus dudas por WhatsApp o correo. Sin formularios, directo y claro."
              className="mx-0"
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Button
                href={getWhatsAppMessage(company.whatsappDemoMessage)}
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
                variant="success"
              >
                <MessageCircle aria-hidden="true" size={20} />
                Hablar por WhatsApp
              </Button>
              <Button href={getEmailLink()} size="lg" variant="primary">
                <Mail aria-hidden="true" size={20} />
                Enviar correo
              </Button>
              <div className="rounded-brand border border-brand-border bg-white p-4 text-sm text-brand-muted sm:col-span-2 lg:col-span-1">
                <a
                  className="block font-bold text-brand-blue underline decoration-brand-cyan decoration-2 underline-offset-4 hover:text-brand-electric"
                  href={getWhatsAppMessage(company.whatsappDemoMessage)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {company.whatsapp}
                </a>
                <a
                  className="mt-3 block font-bold text-brand-blue underline decoration-brand-cyan decoration-2 underline-offset-4 hover:text-brand-electric"
                  href={getEmailLink()}
                >
                  {company.email}
                </a>
                <a
                  className="mt-3 block font-bold text-brand-blue underline decoration-brand-cyan decoration-2 underline-offset-4 hover:text-brand-electric"
                  href={getEmailLink(company.supportEmailHref)}
                >
                  {company.supportEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
