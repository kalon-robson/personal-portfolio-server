import { Block } from 'payload/types';
import { linkField } from '../../fields';

export const Buttons: Block = {
  fields: [
    {
      fields: [
        linkField,
      ],
      name: 'buttons',
      type: 'array',
    },
  ],
  slug: 'buttons',
};
