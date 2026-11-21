// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { isNoindexRoute } from "./src/utils/seo.ts";

export default defineConfig({
  site: "https://ivanbensa.github.io",
  base: "/packetshop-kilic",

  integrations: [
    sitemap({
      filter: (page) => !isNoindexRoute(new URL(page).pathname),
    }),
  ],

  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/inter-regular.woff2"],
          },
        ],
      },
    },
  ],

  vite: {
    build: {
      cssTarget: "safari15.4",
    },
  },
});
