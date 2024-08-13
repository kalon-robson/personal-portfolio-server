import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { Block } from 'payload/types';

export const Image: Block = {
  fields: [
    {
      label: 'Image',
      name: 'image',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
    {
      editor: lexicalEditor(),
      label: 'Caption',
      name: 'caption',
      type: 'richText',
    },
  ],
  labels: {
    plural: 'Images',
    singular: 'Image',
  },
  slug: 'image',
};
