import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  root: "./src",
  build: {
    sourcemap: false,
    outDir: "../dist",
  },
});
