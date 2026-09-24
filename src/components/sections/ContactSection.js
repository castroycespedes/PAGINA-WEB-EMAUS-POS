import { Mail, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { getEmailLink, getWhatsAppMessage } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <MotionSection className="bg-white py-16 sm:py-20" id="soporte">
      <Container>
        <div className="rounded-brand border border-brand-border bg-[radial-gradient(circle_at_top_right,#d7f8ff,transparent_34%),linear-gradient(135deg,#ffffff_0%,#eff7ff_100%)] p-6 shadow-card sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
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
              >
                <MessageCircle aria-hidden="true" size={20} />
                Hablar por WhatsApp
              </Button>
              <Button href={getEmailLink()} size="lg" variant="outline">
                <Mail aria-hidden="true" size={20} />
                Enviar correo
              </Button>
              <div className="rounded-brand border border-brand-border bg-white p-4 text-sm text-brand-muted sm:col-span-2 lg:col-span-1">
                <p className="font-semibold text-brand-navy">{company.whatsapp}</p>
                <p className="mt-1">{company.email}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
