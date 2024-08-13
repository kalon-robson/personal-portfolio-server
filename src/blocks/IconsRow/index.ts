import { Block } from 'payload/types';
import * as fa6Icons from 'react-icons/fa6';
import iconPickerField from '@innovixx/payload-icon-picker-field';

export const IconsRow: Block = {
  fields: [
    {
      fields: [
        iconPickerField({
          label: 'React Icons',
          name: 'reactIconsIcon',
          reactIconPack: fa6Icons,
        }),
      ],
      name: 'icons',
      type: 'array',
    },
  ],
  slug: 'icons-row',
};
