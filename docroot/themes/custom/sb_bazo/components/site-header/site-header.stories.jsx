
// AUTO-GENERATED FROM site-header.stories.yml
import { createMockAttributes } from '@storybook-utils/mockAttributes';
import Component from './site-header.twig';
import './site-header.css';
import './site-header.js';

export default {
    title: 'SB Bazo/Site Header',
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
, 'base_path': 'docroot/themes/custom/sb_bazo', 'attributes': createMockAttributes().setAttribute('data-component-id', 'sb_bazo:site-header')}
};

