import { Block } from 'payload/types';
import { Content } from '../Content';

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
              label: 'Half',
              value: 'half',
            },
            {
              label: 'Third',
              value: 'third',
            },
          ],
          type: 'select',
        },
        {
          blocks: [
            Content,
          ],
          name: 'block',
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
