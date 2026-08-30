/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/terminal-portfolio/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Rafael Marques | Terminal Portfolio",
        "short_name": "Rafael Marques",
        description:
          "Bilingual terminal portfolio for Rafael Marques, an IT teacher transitioning into systems administration.",
        "theme_color": "#1e1e2e",
        "background_color": "#1e1e2e",
        display: "standalone",
        icons: [
          {
            src: "favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any",
          },
        ],
        "start_url": "./",
        scope: "./",
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
