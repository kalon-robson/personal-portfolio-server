import { Block } from 'payload/types';

export const ArticleScroller: Block = {
  fields: [
    {
      admin: {
        description: 'Leave blank to show the most recent articles',
      },
      hasMany: true,
      maxRows: 8,
      name: 'article',
      relationTo: 'article',
      type: 'relationship',
    },
  ],
  slug: 'article-scroller',
};
