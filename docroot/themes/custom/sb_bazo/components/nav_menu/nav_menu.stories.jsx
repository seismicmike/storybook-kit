// AUTO-GENERATED FROM nav_menu.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./nav_menu.twig";
import "./nav_menu.css";
import "./nav_menu.js";

export default {
  title: "SB Bazo/Nav Menu",
  argTypes: {},
  component: Component,
};

export const NavMenujustthemenu = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    items: [
      {
        label: "Home",
        current: true,
      },
      {
        label: "About",
      },
      {
        label: "Services",
      },
      {
        label: "Project",
      },
      {
        label: "Blog",
      },
      {
        label: "Contact",
      },
    ],
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "namespace:nav_menu"
    ),
  },
};
