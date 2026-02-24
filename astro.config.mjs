import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kycaine.github.io",
  base: "/eternaltech",
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});