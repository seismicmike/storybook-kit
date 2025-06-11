// AUTO-GENERATED FROM site_header.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./site_header.twig";
import SiteBranding from "../site_branding/site_branding.twig";
import "../site_branding/site_branding.css";
import ContactDetailGroup from "../contact_detail_group/contact_detail_group.twig";
import "../contact_detail_group/contact_detail_group.css";
import SocialIcons from "../social_icons/social_icons.twig";
import "../icon/icon.css";
import "../social_button/social_button.css";
import "../social_icons/social_icons.css";
import "./site_header.css";
import "./site_header.js";

export default {
  title: "SB Bazo/Site Header",
  argTypes: {},
  component: Component,
};

export const Demo = {
  parameters: {
    docs: {
      description: {
        story: "Demo header",
      },
    },
  },
  args: {
    contentAttributes: "",
    region_content: `
      ${SiteBranding({
        title: "Rick's Pizza",
      })}
      ${ContactDetailGroup({
        details: [
          {
            label: "Address",
            value: "123 Thata Way",
          },
          {
            label: "Call us",
            value: "1 (855) 688-9669",
          },
        ],
      })}
      ${SocialIcons({
        size: "sm",
        icons: [
          {
            icon: "facebook",
            url: "https://www.facebook.com",
          },
          {
            icon: "twitter",
            url: "https://www.twitter.com",
          },
          {
            icon: "instagram",
            url: "https://www.instagram.com",
          },
          {
            icon: "location-dot",
            url: "https://maps.google.com",
          },
        ],
      })}
    `,
    base_path: "docroot/themes/custom/sb_bazo",
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:site_header"
    ),
  },
};
