import { Block } from 'payload/types';
import { linkField } from '../../fields';

export const Buttons: Block = {
  fields: [
    {
      fields: [
        {
          name: 'buttonType',
          options: [
            {
              label: 'Primary',
              value: 'primary',
            },
            {
              label: 'Secondary',
              value: 'secondary',
            },
          ],
          type: 'select',
        },
        linkField,
      ],
      name: 'buttons',
      type: 'array',
    },
  ],
  slug: 'buttons',
};
