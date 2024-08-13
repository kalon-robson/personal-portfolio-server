import { CollectionConfig } from 'payload/types';
import { menuGroups } from '../../lib/menuGroups';

export const User: CollectionConfig = {
  access: {
    read: (): boolean => true,
  },
  admin: {
    defaultColumns: ['name', 'email', 'createdAt'],
    disableDuplicate: true,
    group: menuGroups.settings,
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
  ],
  slug: 'user',
};
