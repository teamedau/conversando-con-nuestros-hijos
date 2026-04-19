# Conversando con Nuestros Hijos

Landing page para un evento presencial dirigido a familias latinoamericanas en Brisbane, Australia. El evento reúne 6 expertas en vivo durante 3 horas para abordar las conversaciones que los padres latinos postergan — sexualidad, finanzas, espiritualidad, comunicación, multiculturalidad y ciberseguridad.

---

## El evento

**Conversando con Nuestros Hijos**
23 de Mayo 2025 · 10:00 am – 1:00 pm
Bardon, Brisbane, Australia · $40 AUD

---

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| Backend | Laravel 13 · PHP 8.4 |
| Frontend SPA | Inertia.js v3 + React 19 |
| Estilos | Tailwind CSS v4 |
| Animaciones | anime.js v3 · CSS transitions · IntersectionObserver |
| Bundler | Vite 8 |
| Tipado | TypeScript |
| Testing | Pest v4 |
| Servidor local | Laravel Herd |

---

## Secciones de la landing

- **Hero** — título animado palabra a palabra con fuegos artificiales en canvas (toca cualquier parte para disparar más)
- **Stats** — 3 datos clave del evento en tarjetas de color sólido
- **Problema** — preguntas reales de padres latinos con propuesta de valor
- **Las 6 expertas** — grid de cards con avatar, tema y descripción (preparado para fotos reales)
- **Lo que te llevas** — 4 beneficios concretos del evento
- **CTA final** — llamada a la acción con precio y frase de cierre
- **Footer** — copyright mínimo

---

## Paleta de colores

| Nombre | Hex |
|--------|-----|
| Azul | `#4272FF` |
| Cyan | `#42EAFF` |
| Naranja | `#FF7E42` |
| Amarillo | `#FFB343` |
| Oscuro | `#0a0a1a` |
| Blanco | `#ffffff` |

**Tipografía:** Rum Raisin (headings) · Roboto (cuerpo) — Google Fonts

---

## Instalación local

Requiere PHP 8.4, Composer, Node.js y [Laravel Herd](https://herd.laravel.com).

1. Clonar el repositorio
2. Instalar dependencias PHP con `composer install`
3. Instalar dependencias JS con `npm install`
4. Copiar `.env.example` a `.env` y generar la clave con `php artisan key:generate`
5. Levantar el servidor con `npm run dev`

---

## Cómo actualizar

**Link de tickets:** busca `HUMANITIX_URL` en `resources/js/pages/welcome.tsx` y reemplaza la URL de Humanitix.

**Información de expertas:** el array `expertas` en `resources/js/pages/welcome.tsx` controla las cards. Cada experta acepta un campo `foto` con la ruta a la imagen para reemplazar el avatar de iniciales.
