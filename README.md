# EMAUS POS

Pagina oficial de EMAUS POS, producto de CENTRIVOSOFT, Centro de Soluciones de Software.

## Estado actual

Este repositorio estaba vacio salvo por `.git`. Se preparo una base inicial de Next.js con App Router, React, JavaScript, Tailwind CSS, Lucide React y Framer Motion instalado para uso futuro solo si es necesario.

Todavia no se desarrollo la pagina completa. La entrega actual deja lista la arquitectura inicial para seguir trabajando despues de aprobacion.

## Estructura

```txt
public/images
src/app
src/components/layout
src/components/sections
src/components/ui
src/data
src/lib
```

## Decisiones

- `src/data/company.js` centraliza nombre, desarrollador, descripcion, WhatsApp, email, logo y diseno de referencia.
- `Header`, `Footer` y `Logo` viven en `src/components/layout`.
- `Button`, `Container`, `SectionHeading`, `FeatureCard` y `PricingCard` son componentes reutilizables en `src/components/ui`.
- La identidad visual usa fondo blanco, tonos azules tecnologicos, curvas cian, tarjetas blancas, bloques navy y gradientes azul-cian.
- Los tokens CSS y Tailwind viven en `src/app/globals.css` y `tailwind.config.mjs`.
- La pagina inicial usa `StarterSection` como una entrega tecnica minima, sin construir aun el landing completo.
- Las imagenes adjuntas se guardan como assets locales en `public/images`.

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Contacto configurado

- WhatsApp: +57 300 410 7145
- Email: centrivosoft@gmail.com

## Pendientes

- Definir y aprobar el alcance visual de la pagina completa usando el diseno base.
- Construir secciones comerciales: hero, caracteristicas, sectores, planes, soporte y contacto.
- Ajustar responsive final y accesibilidad de la experiencia completa.
- Validar copy final, precios y datos comerciales antes de publicar.
