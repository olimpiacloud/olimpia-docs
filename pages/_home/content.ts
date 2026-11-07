export type Locale = "en" | "es";

const clients = [
  {
    label: "Claude Code",
    logo: "/agents/claude.svg",
    command: "claude mcp add --transport http olimpia https://api.olimpia.dev/mcp",
  },
  {
    label: "Codex",
    logo: "/agents/codex.svg",
    command: "codex mcp add olimpia --url https://api.olimpia.dev/mcp",
  },
  {
    label: "Skill",
    logo: "/agents/mcp.svg",
    invert: true,
    command: "bunx skills add olimpiacloud/olimpia-skills",
  },
];

export const home = {
  es: {
    title: "Olimpia Docs: el cloud de Buenos Aires",
    description:
      "Documentación de Olimpia, el cloud de Buenos Aires: apps, Postgres, Redis y buckets compatibles con S3, operables desde la consola o desde tu agente por MCP.",
    og: { image: "/art/og.jpg", alt: "Olimpia Docs: ruinas clásicas frente al Río de la Plata, en acuarela" },
    eyebrow: "Documentación · Región BUE",
    heading: "Tu producto en producción, desde Buenos Aires.",
    lede: "Olimpia corre tus apps, tus bases Postgres y Redis y tus buckets en infraestructura de primer nivel en Buenos Aires. Esta documentación tiene dos puertas: una para tu agente y otra para vos.",
    tablist: "Elegí para quién es la documentación",
    agentsTab: "Para agentes",
    humansTab: "Para humanos",
    agents: {
      intro:
        "Olimpia tiene un servidor MCP. Conectá tu agente una vez y despliega código, crea bases, lee logs y configura dominios por vos, siempre con tu permiso.",
      clients,
      copy: "Copiar el comando de",
      machineIntro: "Esta documentación también se lee sin HTML: ",
      machine: [
        { href: "/llms.txt", label: "llms.txt" },
        { href: "/llms-full.txt", label: "llms-full.txt" },
        { href: "/skill.md", label: "skill.md" },
        { href: "/introduccion.md", label: "Markdown de cada página" },
      ],
      tasks: [
        { href: "/agentes/flujos#desplegar-una-carpeta-local", icon: "rocket", title: "Desplegar", body: "Subir una carpeta, un repo o una imagen y seguir el deploy hasta que esté activo." },
        { href: "/agentes/herramientas", icon: "wrench", title: "Herramientas", body: "Las herramientas del servidor MCP, con sus parámetros y qué devuelven." },
        { href: "/agentes/prompts", icon: "message-square-text", title: "Prompts listos", body: "Pedidos para copiar y pegar, del primer deploy a migrar desde otra nube." },
      ],
      cta: { href: "/agentes", label: "Guía para agentes" },
    },
    humans: {
      guides: [
        { href: "/primeros-pasos", icon: "rocket", title: "Primeros pasos", body: "De cero a una app online, con su base de datos, en cinco minutos." },
        { href: "/apps", icon: "git-branch", title: "Apps", body: "Deploy automático desde GitHub en cada push, una imagen de Docker o tu carpeta local." },
        { href: "/postgres", icon: "database", title: "Postgres y Redis", body: "Bases administradas en la red interna, acceso externo por TLS y backups en tu S3." },
        { href: "/buckets", icon: "archive", title: "Buckets", body: "Object storage compatible con S3, con una key propia por bucket." },
        { href: "/plataforma/buenos-aires", icon: "map-pin", title: "Infraestructura", body: "Dónde corre Olimpia, cómo viaja tu tráfico y cómo aislamos cada app." },
      ],
      cta: { href: "/introduccion", label: "Leer la introducción" },
    },
    art: {
      mobile: "/art/banner.webp",
      agents: {
        src: "/art/home-agentes.webp",
        alt: "Acuarela: un mecanismo de engranajes de bronce junto a un busto de Hermes, frente al Río de la Plata",
        quote: "Tu agente despliega. Vos decidís.",
        caption: "Servidor MCP · OAuth 2.1",
      },
      humans: {
        src: "/art/home-humanos.webp",
        alt: "Acuarela: una cariátide de mármol mira el Río de la Plata, con el Obelisco y el Puente de la Mujer de fondo",
        quote: "Lo que se construye sobre piedra, dura.",
        caption: "Hecho en Buenos Aires · 34°36′S 58°22′O",
      },
    },
    features: {
      eyebrow: "La plataforma",
      heading: "Lo que ya podés usar",
      more: { href: "/introduccion", label: "Ver todo lo que incluye" },
      items: [
        { art: "/art/templo.webp", title: "Corre en Buenos Aires", body: "La región BUE está en Buenos Aires, sobre infraestructura de primer nivel. Tus datos se quedan cerca de tus usuarios.", href: "/plataforma/buenos-aires" },
        { art: "/art/columna.webp", title: "Red interna", body: "Apps y bases se hablan por una red privada. Nada queda expuesto a internet si no lo pedís.", href: "/plataforma/red-interna" },
        { art: "/art/anfora.webp", title: "Backups en tu S3", body: "Programá copias de Postgres en AWS S3, Cloudflare R2, Backblaze B2, MinIO o cualquier S3.", href: "/postgres/backups" },
        { art: "/art/teatro.webp", title: "CI/CD con GitHub", body: "Cada push a tu rama se construye y se publica solo, sin cortes y con rollback en un clic.", href: "/apps/github" },
        { art: "/art/olivo.webp", title: "Dominios propios", body: "Apuntá un CNAME y listo: verificamos el dominio y emitimos el certificado por vos.", href: "/apps/dominios" },
        { art: "/art/busto.webp", title: "Hecha para agentes", body: "Un servidor MCP con 35 herramientas para que tu agente despliegue, consulte y depure.", href: "/agentes" },
      ],
    },
    soon: { label: "Próximamente:", href: "/proximamente", items: ["Stream", "CDN", "Facturación", "Equipos", "Réplicas de lectura"] },
  },
  en: {
    title: "Olimpia Docs: the Buenos Aires cloud",
    description:
      "Documentation for Olimpia, the Buenos Aires cloud: apps, Postgres, Redis and S3-compatible buckets, run from the console or from your agent over MCP.",
    og: { image: "/art/og.jpg", alt: "Olimpia Docs: classical ruins by the Río de la Plata, in watercolor" },
    eyebrow: "Documentation · BUE region",
    heading: "Your product in production, from Buenos Aires.",
    lede: "Olimpia runs your apps, your Postgres and Redis databases and your buckets on first-class infrastructure in Buenos Aires. These docs have two doors: one for your agent and one for you.",
    tablist: "Choose who the docs are for",
    agentsTab: "For agents",
    humansTab: "For humans",
    agents: {
      intro:
        "Olimpia has an MCP server. Connect your agent once and it deploys code, creates databases, reads logs and sets up domains for you, always with your permission.",
      clients,
      copy: "Copy the command for",
      machineIntro: "These docs also read without HTML: ",
      machine: [
        { href: "/llms.txt", label: "llms.txt" },
        { href: "/llms-full.txt", label: "llms-full.txt" },
        { href: "/skill.md", label: "skill.md" },
        { href: "/en/introduccion.md", label: "Markdown for every page" },
      ],
      tasks: [
        { href: "/en/agentes/flujos#desplegar-una-carpeta-local", icon: "rocket", title: "Deploy", body: "Upload a folder, a repo or an image and follow the deploy until it is active." },
        { href: "/en/agentes/herramientas", icon: "wrench", title: "Tools", body: "Every tool in the MCP server, with its parameters and what it returns." },
        { href: "/en/agentes/prompts", icon: "message-square-text", title: "Ready-made prompts", body: "Requests to copy and paste, from your first deploy to moving off another cloud." },
      ],
      cta: { href: "/en/agentes", label: "Guide for agents" },
    },
    humans: {
      guides: [
        { href: "/en/primeros-pasos", icon: "rocket", title: "Get started", body: "From zero to an app online, with its database, in five minutes." },
        { href: "/en/apps", icon: "git-branch", title: "Apps", body: "Automatic deploys from GitHub on every push, a Docker image or your local folder." },
        { href: "/en/postgres", icon: "database", title: "Postgres and Redis", body: "Managed databases on the internal network, external access over TLS and backups to your S3." },
        { href: "/en/buckets", icon: "archive", title: "Buckets", body: "S3-compatible object storage, with its own key for each bucket." },
        { href: "/en/plataforma/buenos-aires", icon: "map-pin", title: "Infrastructure", body: "Where Olimpia runs, how your traffic travels and how we isolate each app." },
      ],
      cta: { href: "/en/introduccion", label: "Read the introduction" },
    },
    art: {
      mobile: "/art/banner.webp",
      agents: {
        src: "/art/home-agentes.webp",
        alt: "Watercolor: a bronze gear mechanism next to a bust of Hermes, by the Río de la Plata",
        quote: "Your agent deploys. You decide.",
        caption: "MCP server · OAuth 2.1",
      },
      humans: {
        src: "/art/home-humanos.webp",
        alt: "Watercolor: a marble caryatid looks out over the Río de la Plata, with the Obelisk and Puente de la Mujer behind",
        quote: "What is built on stone, lasts.",
        caption: "Made in Buenos Aires · 34°36′S 58°22′W",
      },
    },
    features: {
      eyebrow: "The platform",
      heading: "What you can use today",
      more: { href: "/en/introduccion", label: "See everything included" },
      items: [
        { art: "/art/templo.webp", title: "Runs in Buenos Aires", body: "The BUE region is in Buenos Aires, on first-class infrastructure. Your data stays close to your users.", href: "/en/plataforma/buenos-aires" },
        { art: "/art/columna.webp", title: "Internal network", body: "Apps and databases talk over a private network. Nothing is exposed to the internet unless you ask.", href: "/en/plataforma/red-interna" },
        { art: "/art/anfora.webp", title: "Backups to your S3", body: "Schedule Postgres backups to AWS S3, Cloudflare R2, Backblaze B2, MinIO or any S3.", href: "/en/postgres/backups" },
        { art: "/art/teatro.webp", title: "CI/CD with GitHub", body: "Every push to your branch builds and ships on its own, with no downtime and one-click rollback.", href: "/en/apps/github" },
        { art: "/art/olivo.webp", title: "Custom domains", body: "Point a CNAME and you are done: we verify the domain and issue the certificate for you.", href: "/en/apps/dominios" },
        { art: "/art/busto.webp", title: "Built for agents", body: "An MCP server with 35 tools so your agent can deploy, query and debug.", href: "/en/agentes" },
      ],
    },
    soon: { label: "Coming soon:", href: "/en/proximamente", items: ["Stream", "CDN", "Billing", "Teams", "Read replicas"] },
  },
};
