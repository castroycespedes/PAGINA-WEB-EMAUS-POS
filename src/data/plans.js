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
    features: ["1 terminal"],
  },
  {
    id: "profesional",
    name: "Plan Profesional",
    terminals: 3,
    price: 90000,
    currency: "COP",
    billingPeriod: "al mes",
    featured: true,
    features: ["3 terminales"],
  },
  {
    id: "empresarial",
    name: "Plan Empresarial",
    terminals: 5,
    price: 120000,
    currency: "COP",
    billingPeriod: "al mes",
    features: ["5 terminales"],
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
