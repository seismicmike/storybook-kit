// AUTO-GENERATED FROM social_icons.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./social_icons.twig";
import "../icon/icon.css";
import "../social_button/social_button.css";
import "./social_icons.css";

export default {
  title: "SB Bazo/Social Icons",
  argTypes: {},
  component: Component,
};

export const HeaderIcons = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    size: "sm",
    icons: [
      {
        icon: "location-dot",
        url: "#",
      },
      {
        icon: "location-arrow",
        url: "#",
      },
      {
        icon: "house",
        url: "#",
      },
    ],

    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:social_icons"
    ),
  },
};

export const FooterIcons = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    size: "md",
    icons: [
      {
        icon: "location-dot",
        url: "#",
      },
      {
        icon: "location-arrow",
        url: "#",
      },
      {
        icon: "house",
        url: "#",
      },
    ],

    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:social_icons"
    ),
  },
};
