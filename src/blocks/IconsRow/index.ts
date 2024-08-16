import { Block } from 'payload/types';
import iconPickerField from '@innovixx/payload-icon-picker-field';
import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';
import { skillIcons } from '../../lib/skillIcons';

export const IconsRow: Block = {
  fields: [
    {
      admin: {
        components: {
          RowLabel: ({ data }: RowLabelArgs) => `Icon - ${data.icon}`,
        },
      },
      fields: [
        iconPickerField({
          icons: skillIcons,
          label: 'Icons',
          name: 'icon',
        }),
      ],
      name: 'icons',
      type: 'array',
    },
  ],
  slug: 'icons-row',
};
