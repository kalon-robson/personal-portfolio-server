/* eslint-disable no-console */
import { Payload } from 'payload';
import { Article } from '../../collection';
import data from './data.json';

export const seedArticles = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding articles...');

  await Promise.all(
    data.map(async (article) => {
      await payload.create({
        collection: Article.slug,
        data: {
          ...article,
          _id: article.id,
        },
      });
    }),
  );

  payload.logger.info('Seeding articles...Done');
};
