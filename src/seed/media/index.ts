/* eslint-disable no-console */
import { Payload } from 'payload';
import path from 'path';
import { Media } from '../../collection';
import data from './data.json';

export const seedMedia = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding media...');

  await Promise.all(
    data.map(async (media) => {
      await payload.create({
        collection: Media.slug,
        data: {
          ...media,
          _id: media.id,
        },
        filePath: path.join(__dirname, 'assets', media.filename),
      });
    }),
  );

  payload.logger.info('Seeding media...Done');
};
