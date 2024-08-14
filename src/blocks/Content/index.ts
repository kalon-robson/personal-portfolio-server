import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { Block } from 'payload/types';

export const Content: Block = {
  fields: [
    {
      editor: lexicalEditor(),
      name: 'content',
      type: 'richText',
    },
  ],
  interfaceName: 'Content',
  labels: {
    plural: 'Content Blocks',
    singular: 'Content',
  },
  slug: 'content',
};
