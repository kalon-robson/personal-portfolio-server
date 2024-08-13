import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';
import { Block } from 'payload/types';

export const CardList: Block = {
  fields: [
    {
      admin: {
        components: {
          RowLabel: ({ data }: RowLabelArgs) => `Card - ${data.title}`,
        },
      },
      fields: [
        {
          name: 'title',
          required: true,
          type: 'text',
        },
        {
          name: 'content',
          required: true,
          type: 'richText',
        },
        {
          admin: {
            description: 'Comma separated list of tags',
          },
          hasMany: true,
          name: 'tags',
          type: 'text',
        },
      ],
      name: 'cards',
      type: 'array',
    },
  ],
  slug: 'card-list',
};
