// AUTO-GENERATED FROM contact_detail.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./contact_detail.twig";
import "./contact_detail.css";

export default {
  title: "SB Bazo/Contact Detail",
  argTypes: {},
  component: Component,
};

export const Address = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    label: "Address",
    value: "721 New York NY 10016",
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "namespace:contact_detail"
    ),
  },
};

export const Phone = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    label: "Call us",
    value: "1 (855) 688-9669",
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "namespace:contact_detail"
    ),
  },
};
