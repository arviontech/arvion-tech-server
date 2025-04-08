import { z } from 'zod';

export const serviceValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    features: z.array(z.string(), {
      required_error: 'Features are required',
    }),
  }),
});

export const updateServiceValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    features: z.array(z.string()).optional(),
  }),
});
