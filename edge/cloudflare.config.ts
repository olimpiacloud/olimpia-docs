import { defineConfig, triggers } from "cf/config";
import * as entrypoint from "./src/index.ts" with { type: "cf-worker" };

export default defineConfig({
  worker: {
    name: "olimpia-docs",
    compatibilityDate: "2026-09-25",
    entrypoint,
    triggers: [triggers.fetch({ pattern: "docs.olimpia.dev/*", zone: "olimpia.dev" })],
  },
});
