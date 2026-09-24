import { company } from "@/data/company";

export function getWhatsAppMessage() {
  const message = `Hola, quiero informacion sobre ${company.name}.`;
  return `${company.whatsappHref}?text=${encodeURIComponent(message)}`;
}
