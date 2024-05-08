import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/components"),
    }),
  ],
  root: "./src",
  server: {
    port: 3000,
  },
  build: {
    sourcemap: false,
    outDir: "../dist",
  },
});
