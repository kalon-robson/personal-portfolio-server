import express, { Express } from 'express';
import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const mount = async (app: Express) => {
  await payload.init({
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: http://localhost:${process.env.PORT}${payload.getAdminURL()}`);
    },
    secret: `${process.env.PAYLOAD_SECRET}`,
  });

  app.listen(process.env.PORT);
};

mount(express());
