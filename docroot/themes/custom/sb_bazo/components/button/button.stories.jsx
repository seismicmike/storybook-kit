// AUTO-GENERATED FROM button.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./button.twig";
import "./button.css";

export default {
  title: "SB Bazo/Button",
  argTypes: {
    label: {
      control: "text",
      title: "Label",
      defaultValue: "Sample Button",
    },
    href: {
      control: "text",
      title: "href",
      defaultValue: "#",
    },
    mode: {
      control: "select",
      title: "Button Mode",
      defaultValue: "link",
      options: ["link", "embed"],
    },
    disabled: {
      control: "boolean",
      title: "Disabled?",
      defaultValue: false,
    },
    icon: {
      control: "text",
      title: "Icon",
      description: "The icon",
    },
    icon_style: {
      control: "select",
      title: "Icon style",
      options: ["regular", "solid", "thin", "light"],
    },
    icon_position: {
      control: "select",
      title: "Icon position",
      options: ["right", "left"],
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
    label: "Sample Button",
    mode: "link",
    href: "#",
    disabled: false,
    button_style: "primary",
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:button"
    ),
  },
};
