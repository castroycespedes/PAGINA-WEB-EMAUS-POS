export const company = {
  name: "EMAUS POS",
  developer: "CENTRIVOSOFT",
  description: "Centro de Soluciones de Software",
  tagline: "Ventas, facturación, control e inventario",
  whatsapp: "+57 300 410 7145",
  whatsappHref: "https://wa.me/573004107145",
  whatsappDemoMessage: "Hola, quiero recibir información y una demostración de EMAUS POS.",
  email: "centrivosoft@gmail.com",
  emailHref: "mailto:centrivosoft@gmail.com",
  supportEmail: "soportecentrisoft2026@gmail.com",
  supportEmailHref: "mailto:soportecentrisoft2026@gmail.com",
  emailSubject: "Información sobre EMAUS POS",
  logo: {
    src: "/images/emaus-pos-logo.png",
    alt: "Logo de EMAUS POS",
  },
  referenceDesign: {
    src: "/images/emaus-pos-diseno-base.png",
    alt: "Diseño base de referencia para EMAUS POS",
  },
};

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Sectores", href: "#sectores" },
  { label: "Planes", href: "#planes" },
  { label: "Soporte", href: "#soporte" },
];

export const footerLinks = {
  product: navigation.filter((item) => item.label !== "Soporte"),
  support: [{ label: "Contacto", href: "#soporte" }],
};
