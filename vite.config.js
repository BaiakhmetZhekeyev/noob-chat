import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/components"),
    }),
  ],
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "src"),
  },
  server: {
    port: 3000,
  },
});
