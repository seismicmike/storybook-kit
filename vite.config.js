import { defineConfig } from "vite";
import path from "path";
import twig from "vite-plugin-twig-drupal";

export default defineConfig({
  plugins: [
    twig({
      namespaces: {
        sb_bazo: path.resolve(
          __dirname,
          "docroot/themes/custom/sb_bazo/components"
        ),
      },
    }),
  ],
  resolve: {
    alias: {
      "@storybook-utils": path.resolve(__dirname, ".storybook/utils"),
    },
  },
  assetsInclude: ["**/*.twig"],
});
