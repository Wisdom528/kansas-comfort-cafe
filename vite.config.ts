import { defineConfig } from "vite";

// Minimal static-site config: serves index.html from project root,
// and copies public/ assets as-is. No framework, no routing.
export default defineConfig({
  root: ".",
  publicDir: "public",
  server: {
    host: true,
    port: 8080,
    strictPort: false,
  },
  preview: {
    host: true,
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
