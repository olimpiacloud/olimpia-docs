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

`docs.olimpia.dev` es un dominio propio de esa app (Cloudflare for SaaS en la zona `olimpia.cc`, con un `CNAME docs → domains.olimpia.cc` solo DNS en la zona `olimpia.dev`). La API de Olimpia no acepta subdominios de `olimpia.dev`, así que se dio de alta a mano: el custom hostname con `cf custom-hostnames create --zone olimpia.cc` y la fila en `app_domains` de la base de la plataforma.

Para desplegar una versión nueva, subí el código a la app `docs` (desde tu agente: "desplegá esta carpeta en la app docs de olimpia-internal").
