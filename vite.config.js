import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // frontend dev server
    proxy: {
      "/api": {
        target: "http://localhost:5001", // backend server URL
        changeOrigin: true,
      },
    },
  },
});
