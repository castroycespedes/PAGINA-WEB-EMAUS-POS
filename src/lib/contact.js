import { company } from "@/data/company";

export function getWhatsAppMessage(customMessage) {
  const message = customMessage || `Hola, quiero informacion sobre ${company.name}.`;
  return `${company.whatsappHref}?text=${encodeURIComponent(message)}`;
}
