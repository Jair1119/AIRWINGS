// Compilación estática para la app de Android (Capacitor).
// Genera mobile-dist/ con index.html + assets, sin servidor ni SSR.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  root: path.resolve(import.meta.dirname, "mobile"),
  base: "./",
  publicDir: path.resolve(import.meta.dirname, "public"),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "mobile-dist"),
    emptyOutDir: true,
  },
});
