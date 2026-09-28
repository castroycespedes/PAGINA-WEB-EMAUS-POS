import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { getWhatsAppMessage } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Hablar por WhatsApp sobre EMAUS POS"
      className="group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#20c863] text-white shadow-[0_14px_30px_rgba(32,200,99,0.35)] transition duration-200 hover:-translate-y-1 hover:bg-[#16a958] focus-visible:outline-white motion-reduce:transform-none sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      href={getWhatsAppMessage(company.whatsappDemoMessage)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="absolute -left-24 hidden rounded-full bg-brand-navy px-3 py-2 text-xs font-bold text-white opacity-0 shadow-card transition group-hover:opacity-100 sm:block">
        Escríbenos
      </span>
      <MessageCircle aria-hidden="true" size={29} strokeWidth={2.6} />
    </a>
  );
}
