import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./breadcrumbs.twig";
import "./breadcrumbs.css";

export default {
  title: "SB Bazo/Breadcrumbs",
  argTypes: {},
  component: Component,
};

export const Demo = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    current_page: "About Us",
    breadcrumbs: [
      {
        title: "Home",
        url: "#",
      },
    ],
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:heading"
    ),
  },
};
