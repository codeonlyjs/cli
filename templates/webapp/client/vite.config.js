import { defineConfig } from 'vite';

export default defineConfig({
  base: "/",
  build: {
    emptyOutDir: true,
    outDir: './dist',
    rollupOptions: {
      external: [
        "/config.js"
      ],
    },
  },
})