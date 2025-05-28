
// AUTO-GENERATED FROM header.stories.yml
import { createMockAttributes } from '@storybook-utils/mockAttributes';
import Component from './header.twig';
import './header.css';
import './header.js';

export default {
    title: 'SB Bazo/Header',
    argTypes: {},
    component: Component
};


export const Demo = {
    parameters: {
      docs: {
        description: {
          story: 'Demo header',
        }
      }
    },
    args: {
  "contentAttributes": "",
  "region_content": "<div>This is content that will go in the region.</div>\n"
, 'attributes': createMockAttributes()}
};

