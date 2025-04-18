import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  optimizeDeps: {
    include: ["linked-dep"],
  },
  build: {
    outDir: "dist",
    terserOptions: {
      compress: {
        unused: true, //Removes unused code that is not needed during runtime
      },
    },
  },

  server: {
    port: 3002,
  },
  preview: {
    port: 8000,
  },
});
