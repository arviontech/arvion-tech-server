// utils/sendEmail.ts
import nodemailer from 'nodemailer';
import { config } from '../Config';

interface EmailOptions {
  from: string;
  name: string;
  message: string;
}

export const sendEmailService = async ({
  from,
  name,
  message,
}: EmailOptions) => {
  // Create transporter with environment-specific configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      user: 'arfazahamed31@gmail.com',
      pass: 'icza azcx cpzq nxtr',
    },
  });

  // Prepare email content
  const mailOptions = {
    from: from,
    to: 'arfazahamed31@gmail.com',
    subject: `New Portfolio Contact: Message from ${name}`,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .container { background-color: #f4f4f4; border-radius: 8px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background-color: #4a4a4a; color: white; text-align: center; padding: 15px; border-radius: 8px 8px 0 0; }
        .content { background-color: white; padding: 25px; border-radius: 0 0 8px 8px; }
        .info-row { display: flex; margin-bottom: 15px; }
        .label { font-weight: bold; color: #333; width: 100px; flex-shrink: 0; }
        .value { flex-grow: 1; }
        .footer { text-align: center; color: #777; font-size: 12px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Message Received</h1>
        </div>
        <div class="content">
          <div class="info-row">
            <div class="label">Name:</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="info-row">
            <div class="label">Email:</div>
            <div class="value">${from}</div>
          </div>
          
          <div class="info-row">
            <div class="label">Message:</div>
            <div class="value">${message}</div>
          </div>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} Portfolio Contact Form
        </div>
      </div>
    </body>
    </html>
    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email');
  }
};
