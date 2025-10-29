import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInject from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), cssInject()],
  preview: {
    port: 7400,
  },
  build: {
    rollupOptions: {
      input: 'src/MicroFrontend.ts',
      preserveEntrySignatures: 'exports-only',
      external: ['vue', 'vue-router'],
      output: {
        entryFileNames: 'bundle.js',
        format: 'esm',
      },
    },
  },
})
