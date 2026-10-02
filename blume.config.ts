import { defineConfig } from "blume";

export default defineConfig({
  title: "Olimpia Docs",
  description:
    "Documentación de Olimpia, el cloud de Buenos Aires: apps, Postgres, Redis y buckets compatibles con S3, operables desde la consola o desde tu agente por MCP.",
  logo: {
    image: "/logo.svg",
    text: "Olimpia",
    href: "/",
  },
  github: {
    owner: "olimpiacloud",
    repo: "olimpia-docs",
  },
  i18n: {
    defaultLocale: "es",
    locales: [{ code: "es", label: "Español", style: "Español rioplatense, voseo, tono directo" }],
  },
  theme: {
    accent: { light: "#9c4a2b", dark: "#d0784f" },
    background: { light: "#efe9dd", dark: "#1b1714" },
    radius: "sm",
    mode: "system",
    fonts: {
      display: { name: "Marcellus", weights: [400], fallback: "serif" },
      body: { name: "Commissioner", weights: ["100..900"] },
      mono: "jetbrains-mono",
    },
  },
  navigation: {
    tabs: [
      { label: "Para humanos", path: "/", href: "/introduccion", icon: "book-open" },
      { label: "Para agentes", path: "/agentes", icon: "bot" },
    ],
    cta: { href: "https://olimpia.dev/dashboard", label: "Abrir la consola" },
    actions: [{ href: "https://olimpia.dev", label: "olimpia.dev" }],
  },
  markdown: {
    imageZoom: true,
    code: {
      theme: {
        light: "github-light",
        dark: "vesper",
      },
    },
  },
  footer: {
    links: [
      { label: "olimpia.dev", href: "https://olimpia.dev" },
      { label: "Consola", href: "https://olimpia.dev/dashboard" },
      { label: "hola@olimpia.dev", href: "mailto:hola@olimpia.dev" },
    ],
  },
  agents: {
    llmsTxt: {
      details:
        "Olimpia es una plataforma cloud que corre en Buenos Aires: hosting de apps (desde GitHub, una carpeta local o una imagen de Docker), Postgres 18 y Redis 8 administrados y buckets compatibles con S3, agrupados en proyectos. Las apps se publican en https://<subdominio>.olimpia.cc. Para operarla desde un agente, conectá el servidor MCP https://api.olimpia.dev/mcp (`claude mcp add --transport http olimpia https://api.olimpia.dev/mcp` o `codex mcp add olimpia --url https://api.olimpia.dev/mcp`) e instalá la skill con `bunx skills add olimpiacloud/olimpia-skills`. Sin OAuth, mandá `Authorization: Bearer olimpia_pat_...` al MCP o a la API REST en https://api.olimpia.dev.",
    },
  },
  lastModified: "git",
  deployment: {
    site: "https://docs.olimpia.dev",
  },
});
