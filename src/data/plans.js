export const plansPromotion = {
  enabled: true,
  label: "Primer mes gratis",
  status: "Oferta configurable",
  validity: "Vigencia pendiente de confirmación",
  conditions: "Condiciones pendientes de confirmación",
};

export const commercialPlans = [
  {
    id: "basico",
    name: "Plan Básico",
    terminals: 1,
    price: 60000,
    currency: "COP",
    billingPeriod: "al mes",
    subtitle: "Para comenzar a vender con orden",
    features: ["1 terminal", "Facturación electrónica", "Soporte 24/7", "Inventario y caja"],
  },
  {
    id: "profesional",
    name: "Plan Profesional",
    terminals: 3,
    price: 90000,
    currency: "COP",
    billingPeriod: "al mes",
    featured: true,
    subtitle: "Para negocios que están creciendo",
    features: ["3 terminales", "Facturación electrónica", "Soporte 24/7", "Reportes de ventas"],
  },
  {
    id: "empresarial",
    name: "Plan Empresarial",
    terminals: 5,
    price: 120000,
    currency: "COP",
    billingPeriod: "al mes",
    subtitle: "Para operaciones con más movimiento",
    features: ["5 terminales", "Facturación electrónica", "Soporte 24/7", "Gestión de clientes"],
  },
];

export function formatPlanPrice(plan) {
  return `$${new Intl.NumberFormat("es-CO").format(plan.price)}`;
}

export function getPlanDemoMessage(plan) {
  const terminalLabel = plan.terminals === 1 ? "1 terminal" : `${plan.terminals} terminales`;

  return `Hola, estoy interesado en EMAUS POS y quiero información sobre el ${plan.name} de ${formatPlanPrice(
    plan,
  )} mensuales para ${terminalLabel}.`;
}
