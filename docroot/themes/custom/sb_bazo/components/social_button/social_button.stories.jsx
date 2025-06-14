// AUTO-GENERATED FROM social_button.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./social_button.twig";
import "./social_button.css";

export default {
  title: "SB Bazo/Social Button",
  argTypes: {},
  component: Component,
};

export const Maps = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    icon: "location-dot",
    size: "sm",
    url: "https://maps.google.com",
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "namespace:social_button"
    ),
  },
};

export const LocationArrow = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    icon: "location-arrow",
    size: "sm",
    url: "https://www.google.com",
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "namespace:social_button"
    ),
  },
};
