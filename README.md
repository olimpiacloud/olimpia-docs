# Olimpia Docs

Documentación de [Olimpia](https://olimpia.dev), publicada en [docs.olimpia.dev](https://docs.olimpia.dev). Hecha con [Blume](https://useblume.dev).

## Desarrollo

```bash
bun install
bun run dev
```

El sitio queda en http://localhost:4321. Para el build estático (`dist/`):

```bash
bun run build
bunx blume validate
```

## Estructura

| Ruta | Qué hay |
| --- | --- |
| `pages/index.astro` | Home, con las pestañas "Para humanos" y "Para agentes". |
| `docs/` | Contenido en MDX. Cada carpeta es un grupo del sidebar, ordenado por su `meta.ts`. |
| `docs/agentes/` | Pestaña "Para agentes" (MCP, skill, herramientas, prompts). |
| `docs/proximamente/` | Módulos todavía no habilitados en Olimpia. |
| `public/art/` | Ilustraciones en acuarela. |
| `blume.config.ts` y `theme.css` | Configuración y estética (paleta y tipografías de olimpia.dev). |

Cuando un módulo de `docs/proximamente/` se habilita en Olimpia, su página se mueve a su propia sección y se le saca el badge `Pronto`.

## Para agentes

El build genera `llms.txt`, `llms-full.txt`, `skill.md` y el Markdown de cada página (`/<ruta>.md`).

## Deploy

El sitio corre en Olimpia: proyecto `olimpia-internal`, app `docs` (`https://docs-1078.olimpia.cc`), construida con el `Dockerfile` (Blume + Caddy sirviendo `dist/`).

Olimpia no deja usar sus propios dominios (`olimpia.dev`, `olimpia.cc`) como dominio propio de una app, y el plan Free de Cloudflare no permite reescribir el Host con una Origin Rule. Por eso `docs.olimpia.dev` es un Worker (`edge/`) en la ruta `docs.olimpia.dev/*` que reenvía a la app y cachea las respuestas en el edge 5 minutos. El DNS es un `AAAA docs 100::` con proxy, igual que `builder.olimpia.dev`.

```bash
cd edge && bun install && cf deploy
```

Para desplegar una versión nueva del sitio, subí el código a la app `docs` (desde tu agente: "desplegá esta carpeta en la app docs de olimpia-internal"). Los cambios se ven en docs.olimpia.dev en hasta 5 minutos.
