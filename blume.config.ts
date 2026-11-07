import { defineConfig } from "blume";
import { family } from "./family";

export default defineConfig({
  ...family("olimpia"),
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
  redirects: [
    { from: "/agentes/skill", to: "/agentes/conectar#skill" },
    { from: "/agentes/ci-y-tokens", to: "/agentes/conectar#ci-y-tokens" },
    { from: "/agentes/docs-para-agentes", to: "/agentes/conectar#docs-para-agentes" },
  ],
  agents: {
    llmsTxt: {
      details:
        "Olimpia es una plataforma cloud que corre en Buenos Aires: hosting de apps (desde GitHub, una carpeta local o una imagen de Docker), Postgres 18 y Redis 8 administrados y buckets compatibles con S3, agrupados en proyectos. Las apps se publican en https://<subdominio>.olimpia.cc. Para operarla desde un agente, conectá el servidor MCP https://api.olimpia.dev/mcp (`claude mcp add --transport http olimpia https://api.olimpia.dev/mcp` o `codex mcp add olimpia --url https://api.olimpia.dev/mcp`) e instalá la skill con `bunx skills add olimpiacloud/olimpia-skills`. Sin OAuth, mandá `Authorization: Bearer olimpia_pat_...` al MCP o a la API REST en https://api.olimpia.dev.",
    },
  },
});
