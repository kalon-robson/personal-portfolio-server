/* eslint-disable no-console */
import { Payload } from 'payload';
import { Page } from '../../collection';
import data from './data.json';

export const seedPages = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding pages...');

  await Promise.all(
    data.map(async (page) => {
      await payload.create({
        collection: Page.slug,
        data: {
          ...page,
          _id: page.id,
        },
      });
    }),
  );

  payload.logger.info('Seeding pages...Done');
};
