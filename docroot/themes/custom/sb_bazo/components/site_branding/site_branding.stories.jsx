// AUTO-GENERATED FROM site_branding.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./site_branding.twig";
import "./site_branding.css";

export default {
  title: "SB Bazo/Site Branding",
  argTypes: {},
  component: Component,
};

export const SiteBranding = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    title: "Mike's Garage",
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "namespace:site_branding"
    ),
  },
};
