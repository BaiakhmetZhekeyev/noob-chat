import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  root: "./src",
  server: {
    port: 3000,
  },
  build: {
    sourcemap: false,
    outDir: "../dist",
  },
});
