import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInject from "vite-plugin-css-injected-by-js";
import { resolve } from "path";

export default ({ command }) => ({
  plugins: [react(), cssInject()],
  preview: {
    port: 7100,
    open: true,
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/MicroFrontend.jsx"),
      preserveEntrySignatures: "exports-only",
      external: (id) => {
        return id === "react" || id === "react-dom" || id === "react-dom/client" || id.startsWith("react/") || id.startsWith("react-dom/") || id === "react-router" || id.startsWith("react-router/");
      },
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  },
});
