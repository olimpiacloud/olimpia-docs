# Olimpia Docs

- Sitio de documentación con Blume (`blume.config.ts`, contenido en `docs/`, home custom en `pages/index.astro`). Usar las skills `blume`, `astro-developer` y `copywriting`.
- Package manager: bun. Nunca npm, pnpm ni yarn; para comandos puntuales, `bunx`.
- Todo el contenido va en español rioplatense con voseo ("desplegá", "conectá"), igual que la consola de olimpia.dev.
- La fuente de verdad del producto es el repo `olimpia-cloud` (API en Rust, web en TanStack Start) y la skill `olimpiacloud/olimpia-skills`. No documentar nada que no exista ahí; lo que todavía no está habilitado va en `docs/proximamente/` con `badge: Pronto`.
- Nunca publicar IPs, proveedores ni detalles internos de la infraestructura.
- Frontmatter: si un `description` lleva `: `, va entre comillas.
- Validar con `bunx blume build --isolated` (si hay un dev server corriendo) y `bunx blume validate`.
