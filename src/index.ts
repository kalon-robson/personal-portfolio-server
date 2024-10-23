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
    ...(process.env.NODE_ENV === 'development' ? {
      email: {
        fromAddress: process.env.EMAIL_FROM_ADDRESS || 'hello@kalonrobson.com',
        fromName: 'Kalon Robson',
        transportOptions: {
          auth: {
            pass: 'password',
            user: 'user',
          },
          authMethod: 'PLAIN',
          host: 'localhost',
          port: 1025,
        },
      },
    } : {}),
  });

  app.listen(process.env.PORT);
};

mount(express());
