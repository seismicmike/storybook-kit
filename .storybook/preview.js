import $ from "jquery";

window.$ = window.jQuery = $;

window.once =
  window.once ||
  function (id, selector, context) {
    const ctx = context || document;
    return Array.from(ctx.querySelectorAll(selector));
  };

window.Drupal = window.Drupal || {};
window.Drupal.behaviors = window.Drupal.behaviors || {};

window.attachDrupalBehaviors = (context = document, settings = {}) => {
  Object.values(window.Drupal.behaviors).forEach((behavior) => {
    if (behavior && typeof behavior.attach === "function") {
      behavior.attach(context, settings);
    }
  });
};

import { addons } from "@storybook/preview-api";

addons.getChannel().on("storyRendered", () => {
  setTimeout(() => window.attachDrupalBehaviors(document), 0);
});

const fonts = {
  "libre-baskerville":
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;600&display=swap",
  "libre-franklin":
    "https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500&display=swap",
  "roboto-mono":
    "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap",
};

for (const fontKey in fonts) {
  const fontHref = fonts[fontKey];
  if (!document.querySelector(`link[href="${fontHref}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontHref;
    document.head.appendChild(link);
  }
}

const themeCss = [
  "https://use.fontawesome.com/releases/v6.4.2/css/all.css",
  "docroot/themes/custom/sb_bazo/dist/styles/variables.css",
  "docroot/themes/custom/sb_bazo/dist/styles/base.css",
  "docroot/themes/custom/sb_bazo/dist/styles/utilities.css",
];

themeCss.forEach((themeSrc) => {
  if (!document.querySelector(`link[href="${themeSrc}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = themeSrc;
    document.head.appendChild(link);
  }
});

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
