import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: 'https://digital-skills-sphere.github.io/TechEase/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});