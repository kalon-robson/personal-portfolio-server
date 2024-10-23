// import nodemailer from 'nodemailer';
import { EmailClient, EmailMessage, EmailSendResponse } from '@azure/communication-email';
import dotenv from 'dotenv';
import payload from 'payload';

dotenv.config();

type Props = Omit<EmailMessage, 'senderAddress'> & {
  senderAddress?: string;
}

export const sendMail = async ({
  senderAddress = process.env.EMAIL_FROM_ADDRESS || 'welcome@kalonrobson.com',
  content,
  ...rest
}: Props): Promise<EmailSendResponse> => {
  if (process.env.AZURE_COMMUNICATION_CONNECTION_STRING) {
    const client = new EmailClient(process.env.AZURE_COMMUNICATION_CONNECTION_STRING);

    const poller = await client.beginSend({
      content,
      senderAddress,
      ...rest,
    });
    const result = await poller.pollUntilDone();

    return result;
  }

  if (process.env.NODE_ENV === 'development') {
    payload.sendEmail({
      from: senderAddress,
      html: content.html,
      subject: content.subject,
      text: content.plainText,
      to: rest.recipients.to?.map(({ address }) => address).join(', '),
    });

    return { id: 'dev', status: 'Succeeded' };
  }

  throw new Error('Azure Communication Services not configured');
};
