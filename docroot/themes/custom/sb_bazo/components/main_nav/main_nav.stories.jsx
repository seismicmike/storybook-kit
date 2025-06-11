
// AUTO-GENERATED FROM main_nav.stories.yml
import { createMockAttributes } from '@storybook-utils/mockAttributes';
import Component from './main_nav.twig';
import './main_nav.css';
import './main_nav.js';

export default {
    title: 'SB Bazo/Main Nav',
    argTypes: {},
    component: Component
};


export const MainNav = {
    parameters: {
      docs: {
        description: {
          story: '',
        }
      }
    },
    args: {
  "items": [
    {
      "label": "Home",
      "current": true
    },
    {
      "label": "About"
    },
    {
      "label": "Services"
    },
    {
      "label": "Project"
    },
    {
      "label": "Blog"
    },
    {
      "label": "Contact"
    }
  ],
  "search": "<form><input type=\"text\" placeholder=\"Search\"><button><i class=\"fa-magnifying-glass fa-lg fa-solid\"></i></button></form>\n"
, 'base_path': 'docroot/themes/custom/sb_bazo', 'attributes': createMockAttributes().setAttribute('data-component-id', 'sb_bazo:main_nav')}
};

