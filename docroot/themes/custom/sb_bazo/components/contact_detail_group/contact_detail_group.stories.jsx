
// AUTO-GENERATED FROM contact_detail_group.stories.yml
import { createMockAttributes } from '@storybook-utils/mockAttributes';
import Component from './contact_detail_group.twig';
import './contact_detail_group.css';


export default {
    title: 'SB Bazo/Contact Detail Group',
    argTypes: {},
    component: Component
};


export const Header = {
    parameters: {
      docs: {
        description: {
          story: '',
        }
      }
    },
    args: {
  "details": [
    {
      "label": "Address",
      "value": "123 Thata Way"
    },
    {
      "label": "Call Us",
      "value": "1 (855) 688-9669"
    }
  ]
, 'base_path': 'docroot/themes/custom/sb_bazo', 'attributes': createMockAttributes().setAttribute('data-component-id', 'sb_bazo:contact_detail_group')}
};

