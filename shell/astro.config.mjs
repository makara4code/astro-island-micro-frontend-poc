import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import vue from "@astrojs/vue";
import node from "@astrojs/node";

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [
    react(),
    solidJs(),
    vue(),
    {
      name: 'importmap-externals',
      hooks: {
        'astro:build:setup': ({ vite, target }) => {
          if (target === 'client') {
            vite.build.rollupOptions["external"] = ["react", "react-dom", "solid-js", "vue", "vue-router"];
          }
        }
      }
    },
  ],
});
