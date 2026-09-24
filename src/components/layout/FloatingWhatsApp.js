import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { getWhatsAppMessage } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Hablar por WhatsApp sobre EMAUS POS"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition duration-200 hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline-white motion-reduce:transform-none sm:bottom-6 sm:right-6"
      href={getWhatsAppMessage(company.whatsappDemoMessage)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" size={29} strokeWidth={2.5} />
    </a>
  );
}
