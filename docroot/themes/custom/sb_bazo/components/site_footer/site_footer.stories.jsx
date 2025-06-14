// AUTO-GENERATED FROM site_footer.stories.yml
import { createMockAttributes } from "@storybook-utils/mockAttributes";
import Component from "./site_footer.twig";
import "./site_footer.css";
import SiteBranding from "../site_branding/site_branding.twig";
import "../site_branding/site_branding.css";
import SocialIcons from "../social_icons/social_icons.twig";
import "../icon/icon.css";
import "../social_button/social_button.css";
import "../social_icons/social_icons.css";
import Heading from "../heading/heading.twig";
import "../heading/heading.css";

export default {
  title: "SB Bazo/Site Footer",
  argTypes: {},
  component: Component,
};

export const SiteFooter = {
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
  args: {
    first_column: `${SiteBranding({
      title: "Mike's Garage",
    })}
      <div>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
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
        ],
      })}`,
    second_column: `
        ${Heading({ heading_text: "Services", level: "2" })}
        <ul>
          <li>Oil Change</li>
          <li>Batteries</li>
          <li>Tow Truck</li>
          <li>Tire Change</li>
          <li>Engine Repair</li>
        </ul>`,
    third_column: `
          ${Heading({ heading_text: "Contact Information", level: "2" })}
          <div class="contact-card"><div class="contact-card__icon">location-dot</div><div class="contact-card__text">203 Fake St. Mountain View, San Francisco, California, USA</div></div>
          <div class="contact-card"><div class="contact-card__icon">phone</div><div class="contact-card__text">+2 392 3929 210</div></div>
          <div class="contact-card"><div class="contact-card__icon">paper-plane</div><div class="contact-card__text">info@yourdomain.com</div></div>
        `,
    fourth_column: `
          ${Heading({ heading_text: "Business Hours", level: "2" })}
          <div>
            <div>Opening Days</div>
            <p>Monday - Friday: 9am to 8pm</p>
            <p>Saturday: 9am to 5pm</p>
          </div>
          <div>
            <div>Vacations</div>
            <p>All Sunday Days All Official Holidays</p>
          </div>`,
    legal:
      "This was developed solely for demonstration purposes. It is not intended for use by anyone at any time.",
    attributes: createMockAttributes().setAttribute(
      "data-component-id",
      "sb_bazo:site_footer"
    ),
  },
};
