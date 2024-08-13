import { CollectionConfig } from 'payload/types';
import { formatSlugValidateHook } from '../../utils/formatSlug';
import { ArticleScroller, Buttons, CardList, Columns, Content, IconsRow, Image } from '../../blocks';

export const Page: CollectionConfig = {
  access: {
    read: (): boolean => true,
  },
  admin: {
    defaultColumns: ['slug', 'title', 'createdAt'],
    disableDuplicate: true,
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
          ],
          name: 'header',
        },
        {
          fields: [
            {
              blocks: [Content, Image, Buttons, ArticleScroller, CardList, IconsRow, Columns],
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
      name: 'showSideNavigation',
      type: 'checkbox',
    },
  ],
  slug: 'page',
};
