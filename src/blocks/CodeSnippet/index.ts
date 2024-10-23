import { Block } from 'payload/types';

export const CodeSnippet: Block = {
  fields: [
    {
      name: 'code',
      required: true,
      type: 'code',
    },
    {
      defaultValue: 'typescript',
      name: 'language',
      options: [
        {
          label: 'Typescript',
          value: 'typescript',
        },
        {
          label: 'HTML',
          value: 'html',
        },
        {
          label: 'CSS',
          value: 'css',
        },
        {
          label: 'Plain Text',
          value: 'plaintext',
        },
      ],
      type: 'select',
    },
  ],
  slug: 'code-snippet',
};
