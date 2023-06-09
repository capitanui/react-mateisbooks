import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  envPrefix: "REACT_APP_",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5500",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [eslint(), react()],
});
