import { CollectionConfig } from 'payload/types';
import { formatSlugValidateHook } from '../../utils/formatSlug';
import { CodeSnippet, Content, Image } from '../../blocks';

export const Article: CollectionConfig = {
  access: {
    read: (): boolean => true,
  },
  admin: {
    defaultColumns: ['slug', 'title', 'createdAt'],
    disableDuplicate: true,
    preview: (data) => `/articles/${data.slug}`,
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      tabs: [
        {
          fields: [
            {
              name: 'description',
              required: true,
              type: 'richText',
            },
            {
              name: 'featuredImage',
              relationTo: 'media',
              type: 'upload',
            },
          ],
          name: 'header',
        },
        {
          fields: [
            {
              blocks: [Content, Image, CodeSnippet],
              minRows: 1,
              name: 'blocks',
              type: 'blocks',
            },
          ],
          name: 'layout',
        },
      ],
      type: 'tabs',
    },
    {
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlugValidateHook('title')],
      },
      name: 'slug',
      type: 'text',
    },
    {
      admin: {
        position: 'sidebar',
      },
      hooks: {
        afterChange: [
          ({ value, data }) => {
            if (!value && data?._status === 'published') {
              return new Date();
            }

            return value;
          },
        ],
      },
      name: 'publishedAt',
      type: 'date',
    },
  ],
  slug: 'article',
  versions: {
    drafts: true,
    maxPerDoc: 5,
  },
};
