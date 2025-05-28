/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../docroot/{modules,themes}/custom/**/components/**/*.mdx",
    "../docroot/{modules,themes}/custom/**/components/**/*.stories.jsx",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  staticDirs: ["../docroot/libraries"],
};
export default config;
