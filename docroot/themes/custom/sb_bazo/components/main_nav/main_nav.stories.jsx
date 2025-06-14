// AUTO-GENERATED FROM main_nav.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import NavMenu from "../nav_menu/nav_menu.twig";
import "../nav_menu/nav_menu.css";
import Component from "./main_nav.twig";
import "./main_nav.css";

export default {
  title: "SB Bazo/Main Nav",
  argTypes: {},
  component: Component,
};

export const MainNav = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    menu: `${NavMenu({
      items: [
        { label: "Home", current: true },
        { label: "About" },
        { label: "Services" },
        { label: "Project" },
        { label: "Blog" },
        { label: "Contact" },
      ],
    })}`,
    search:
      '<form action="/search/node" method="get" id="search-block-form" accept-charset="UTF-8"><div class="js-form-item form-item js-form-type-search form-type-search js-form-item-keys form-item-keys form-no-label"><label for="edit-keys" class="visually-hidden">Search</label><input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search"></div><div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Search" class="button js-form-submit form-submit"></div></form>',
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:main_nav"
    ),
  },
};
