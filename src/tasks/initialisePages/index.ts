/* eslint-disable no-console */
import { Payload } from 'payload';
import { Page } from '../../collection';

export const initialisePages = async (payload: Payload): Promise<void> => {
  payload.logger.info('Initialising required pages...');

  const requiredPages = [
    'articles',
  ];

  await Promise.all(
    requiredPages.map(async (slug) => {
      const existingPage = await payload.find({
        collection: Page.slug,
        where: {
          slug: {
            equals: slug,
          },
        },
      });

      if (existingPage.totalDocs === 0) {
        await payload.create({
          collection: Page.slug,
          data: {
            header: {
              description: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: 'This is a placeholder page. You can edit this page in the admin panel.',
                          type: 'text',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      type: 'paragraph',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  type: 'root',
                  version: 1,
                },
              },
            },
            isPlaceholderPage: true,
            slug,
            title: slug,
          },
        });

        payload.logger.info(`Initialised page: ${slug}`);
      }
    }),
  );

  payload.logger.info('Initialising required pages...Done');
};
