import { Block } from 'payload/types';
import { Content } from '../Content';
import { CardContent } from '../CardContent';

export const Columns: Block = {
  fields: [
    {
      fields: [
        {
          name: 'columnWidth',
          options: [
            {
              label: 'Full',
              value: 'full',
            },
            {
              label: 'Two Thirds',
              value: 'twoThirds',
            },
            {
              label: 'Half',
              value: 'half',
            },
            {
              label: 'Third',
              value: 'third',
            },
            {
              label: 'Quarter',
              value: 'quarter',
            },
          ],
          type: 'select',
        },
        {
          blocks: [
            Content,
            CardContent,
          ],
          name: 'blocks',
          type: 'blocks',
        },
      ],
      label: false,
      name: 'columns',
      type: 'array',
    },
  ],
  labels: {
    plural: 'Columns',
    singular: 'Columns',
  },
  slug: 'columns',
};
