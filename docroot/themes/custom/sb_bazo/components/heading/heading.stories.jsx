// AUTO-GENERATED FROM heading.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./heading.twig";
import "./heading.css";

export default {
  title: "SB Bazo/Heading",
  argTypes: {
    level: {
      control: "select",
      defaultValue: "1",
      options: ["1", "2", "3", "4", "5"],
    },
    heading_text: {
      control: "text",
      defaultValue: "Sample Heading",
    },
  },
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
    level: "1",
    heading_text: "This is my heading",
    classes: ["sample_class", "another_class"],
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:heading"
    ),
  },
};

export const WithHTML = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    level: "2",
    heading_content: '<div>Sample Heading <a href="#">with a link</a></div>\n',
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:heading"
    ),
  },
};
