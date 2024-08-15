import path from 'path';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { azureBlobStorageAdapter } from '@payloadcms/plugin-cloud-storage/azure';
import { buildConfig } from 'payload/config';
import { Article, Media, Page, User } from './collection';
import { seed } from './seed';

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
    user: User.slug,
  },
  collections: [Media, Page, User, Article],
  cors: [
    `${process.env.CLIENT_URL}`,
    ...(process.env.NODE_ENV === 'development' ? ['https://studio.apollographql.com'] : []),
  ],
  db: mongooseAdapter({
    transactionOptions: false,
    url: `${process.env.DATABASE_URI}`,
  }),
  editor: lexicalEditor({}),
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'lib/schema.graphql'),
  },
  onInit: async (payload) => {
    if (
      process.env.NODE_ENV === 'development'
      && process.env.PAYLOAD_SEED_DATABASE
    ) {
      await seed(payload);
    }
  },
  plugins: [
    cloudStorage({
      collections: {
        [Media.slug]: {
          adapter: azureBlobStorageAdapter({
            allowContainerCreate: true,
            baseURL: `${process.env.AZURE_STORAGE_BASE_URL}`,
            connectionString: `${process.env.AZURE_STORAGE_CONNECTION_STRING}`,
            containerName: 'media',
          }),
        },
      },
      enabled: process.env.NODE_ENV === 'production',
    }),
  ],
  rateLimit: {
    trustProxy: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'lib/types.ts'),
  },
});
