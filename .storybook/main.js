/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  // other Storybook config...
  viteFinal: async (config) => {
    config.server = config.server || {};
    config.server.host = "0.0.0.0"; // allow external access
    config.server.strictPort = false;
    config.server.hmr = {
      clientPort: 6006,
    };
    config.server.allowedHosts = [
      "localhost",
      "127.0.0.1",
      "storybook.drupal-kit.lndo.site", // Lando domain
    ];
    return config;
  },
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
  staticDirs: ["../docroot"],
};
export default config;
