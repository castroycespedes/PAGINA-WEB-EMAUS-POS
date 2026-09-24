import { Mail, MessageCircle } from "lucide-react";
import { company, footerLinks } from "@/data/company";
import { getEmailLink, getWhatsAppMessage } from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-950 bg-brand-navy py-10 text-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-sm text-sm text-blue-100">
              Desarrollado por {company.developer} — {company.description}.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-normal text-blue-100">Producto</h2>
            <div className="mt-3 grid gap-2 text-sm text-blue-100">
              {footerLinks.product.map((item) => (
                <a key={item.href} className="hover:text-white" href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-normal text-blue-100">Soporte</h2>
            <div className="mt-3 grid gap-2 text-sm text-blue-100">
              {footerLinks.support.map((item) => (
                <a key={item.href} className="hover:text-white" href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-normal text-blue-100">Contáctanos</h2>
            <div className="mt-3 grid gap-3 text-sm text-blue-100">
              <a
                className="flex items-center gap-2 hover:text-white"
                href={getWhatsAppMessage(company.whatsappDemoMessage)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" size={18} />
                {company.whatsapp}
              </a>
              <a className="flex items-center gap-2 hover:text-white" href={getEmailLink()}>
                <Mail aria-hidden="true" size={18} />
                {company.email}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-5 text-xs text-blue-100">
          © {currentYear} {company.name}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
