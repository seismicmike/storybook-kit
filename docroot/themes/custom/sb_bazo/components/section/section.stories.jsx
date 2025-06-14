// AUTO-GENERATED FROM section.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./section.twig";
import "./section.css";

export default {
  title: "SB Bazo/Section",
  argTypes: {},
  component: Component,
};

export const Section = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "namespace:section"
    ),
  },
};
