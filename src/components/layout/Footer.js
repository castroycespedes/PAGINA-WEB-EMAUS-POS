import { Mail, MessageCircle } from "lucide-react";
import { company, navigation } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-blue-950 bg-brand-navy py-10 text-white">
      <Container className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm text-blue-100">
            Producto oficial de {company.developer}, {company.description}.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-normal text-blue-100">Navegacion</h2>
          <div className="mt-3 grid gap-2 text-sm text-blue-100">
            {navigation.map((item) => (
              <a key={item.href} className="hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-normal text-blue-100">Contacto</h2>
          <div className="mt-3 grid gap-3 text-sm text-blue-100">
            <a className="flex items-center gap-2 hover:text-white" href={company.whatsappHref}>
              <MessageCircle aria-hidden="true" size={18} />
              {company.whatsapp}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={company.emailHref}>
              <Mail aria-hidden="true" size={18} />
              {company.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
