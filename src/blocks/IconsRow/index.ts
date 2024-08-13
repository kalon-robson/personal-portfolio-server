import { Block } from 'payload/types';
import * as fa6Icons from 'react-icons/fa6';
import iconPickerField from '@innovixx/payload-icon-picker-field';
import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';

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
          label: 'Icons',
          name: 'icon',
          reactIconPack: fa6Icons,
        }),
      ],
      name: 'icons',
      type: 'array',
    },
  ],
  slug: 'icons-row',
};
