import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Any requests starting with /api will be forwarded to your backend during development
      "/api": {
        target: process.env.VITE_BACKEND_URL || "http://localhost:5001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
