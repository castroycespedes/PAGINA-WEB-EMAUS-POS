import { MessageCircle } from "lucide-react";
import { company, navigation } from "@/data/company";
import { getWhatsAppMessage } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/90 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-semibold text-brand-navy md:flex">
          {navigation.map((item) => (
            <a key={item.href} className="transition hover:text-brand-blue" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button href={getWhatsAppMessage()} className="hidden sm:inline-flex">
          <MessageCircle aria-hidden="true" size={18} />
          Pedir demo
        </Button>
        <a
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue text-white transition hover:bg-brand-electric sm:hidden"
          href={company.whatsappHref}
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle aria-hidden="true" size={20} />
        </a>
      </Container>
    </header>
  );
}
