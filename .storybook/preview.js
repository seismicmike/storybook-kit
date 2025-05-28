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

// const fonts = {};

// for (const fontKey in fonts) {
//   const fontHref = fonts[fontKey];
//   if (!document.querySelector(`link[href="${fontHref}"]`)) {
//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = fontHref;
//     document.head.appendChild(link);
//   }
// }

// const faCssHref = "font-awesome/css/all.min.css";
// if (!document.querySelector(`link[href="${faCssHref}"]`)) {
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = faCssHref;
//   document.head.appendChild(link);
// }

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
