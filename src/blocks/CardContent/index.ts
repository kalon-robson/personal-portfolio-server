import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { Block } from 'payload/types';

export const CardContent: Block = {
  fields: [
    {
      editor: lexicalEditor(),
      name: 'content',
      type: 'richText',
    },
  ],
  interfaceName: 'CardContent',
  slug: 'card-content',
};
