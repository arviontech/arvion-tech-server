import { sendEmailService } from '../../utils/sendEmail';

const sendEmail = async (name: string, email: string, message: string) => {
  const emailOptions = { from: email, name, message };
  sendEmailService(emailOptions);
};

export const ContactServices = {
  sendEmail,
};
