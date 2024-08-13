import { CollectionConfig } from 'payload/types';
import { formatSlugValidateHook } from '../../utils/formatSlug';
import { Content, Image } from '../../blocks';

export const Page: CollectionConfig = {
  access: {
    read: (): boolean => true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'createdAt'],
    disableDuplicate: true,
    useAsTitle: 'title',
  },
  fields: [
    {
      label: 'Page Title',
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      label: 'Featured Image',
      name: 'image',
      relationTo: 'media',
      type: 'upload',
    },
    {
      blocks: [Content, Image],
      label: 'Page Layout',
      minRows: 1,
      name: 'layout',
      type: 'blocks',
    },
    {
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'text',
        },
        {
          label: 'Description',
          name: 'description',
          type: 'textarea',
        },
      ],
      label: 'Page Meta',
      name: 'meta',
      type: 'group',
    },
    {
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlugValidateHook('title')],
      },
      label: 'Page Slug',
      name: 'slug',
      type: 'text',
    },
  ],
  slug: 'page',
};
