import { Field } from 'payload/types';

export const linkField: Field = {
  fields: [
    {
      fields: [
        {
          admin: {
            width: '100%',
          },
          name: 'type',
          options: [
            {
              label: 'Internal',
              value: 'internal',
            },
            {
              label: 'External',
              value: 'external',
            },
          ],
          required: true,
          type: 'radio',
        },
        {
          admin: {
            condition: (_, siblingData) => siblingData.type === 'internal',
            width: '50%',
          },
          maxDepth: 1,
          name: 'reference',
          relationTo: 'page',
          type: 'relationship',
        },
        {
          admin: {
            condition: (_, siblingData) => siblingData.type === 'external',
            width: '50%',
          },
          name: 'url',
          type: 'text',
        },
        {
          admin: {
            width: '50%',
          },
          name: 'label',
          required: true,
          type: 'text',
        },
      ],
      type: 'row',
    },
  ],
  interfaceName: 'Link',
  name: 'link',
  type: 'group',
};
