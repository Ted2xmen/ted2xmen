import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import vercel from "@astrojs/vercel/serverless";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://ted2xmen.dev",
  integrations: [mdx(), sitemap(), tailwind(), react(), vercel()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
