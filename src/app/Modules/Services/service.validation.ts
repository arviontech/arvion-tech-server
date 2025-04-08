import { z } from 'zod';

export const serviceValidationSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  description: z.string({
    required_error: 'Description is required',
  }),
  features: z.array(z.string(), {
    required_error: 'Features are required',
  }),
});
