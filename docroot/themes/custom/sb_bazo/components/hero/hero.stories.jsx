// AUTO-GENERATED FROM hero.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./hero.twig";
import "./hero.css";
import Breadcrumbs from "../breadcrumbs/breadcrumbs.twig";
import "../breadcrumbs/breadcrumbs.css";

export default {
  title: "SB Bazo/Hero",
  argTypes: {},
  component: Component,
};

export const PageHeading = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    style: "header",
    heading: "About Us",
    image:
      "https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    breadcrumbs: `
      ${Breadcrumbs({
        current_page: "About Us",
        breadcrumbs: [
          {
            title: "Home",
            url: "#",
          },
        ],
      })}
    `,
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:hero"
    ),
  },
};

export const CTA = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    style: "cta",
    subheading: "Make your car last longer",
    content: "We are the best car repair services",
    image:
      "https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cta_label: "Book an appointment",
    cta_url: "#",
    base_path: "docroot/themes/customs/b_bazo",
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:hero"
    ),
  },
};
