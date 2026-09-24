"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/company";
import { getWhatsAppMessage } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

function NavLink({ item, onClick }) {
  const className =
    "rounded-md px-2 py-2 text-sm font-semibold text-brand-navy transition hover:text-brand-blue focus-visible:outline-brand-cyan";

  if (item.href === "/") {
    return (
      <Link className={className} href={item.href} onClick={onClick}>
        {item.label}
      </Link>
    );
  }

  return (
    <a className={className} href={item.href} onClick={onClick}>
      {item.label}
    </a>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/90 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-4 md:flex" aria-label="Navegación principal">
          {navigation.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href={getWhatsAppMessage()}>
            <MessageCircle aria-hidden="true" size={18} />
            Pedir demo
          </Button>
        </div>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand-border bg-white text-brand-navy shadow-card transition hover:border-brand-cyan hover:text-brand-blue md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </Container>
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-navigation"
      >
        <Container className="pb-5">
          <nav
            aria-label="Navegación móvil"
            className="grid gap-1 rounded-brand border border-brand-border bg-white p-3 shadow-soft"
          >
            {navigation.map((item) => (
              <NavLink key={item.href} item={item} onClick={() => setIsOpen(false)} />
            ))}
            <Button
              className="mt-2 w-full"
              href={getWhatsAppMessage()}
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle aria-hidden="true" size={18} />
              Pedir demo
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
