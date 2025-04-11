import { z } from 'zod';

export const createTeamMemberZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    designation: z.string({ required_error: 'Designation is required' }),
    description: z.string({ required_error: 'Description is required' }),
    github: z
      .string({ required_error: 'GitHub URL is required' })
      .url('Invalid GitHub URL'),
    linkedin: z
      .string({ required_error: 'LinkedIn URL is required' })
      .url('Invalid LinkedIn URL'),
    facebook: z
      .string({ required_error: 'Facebook URL is required' })
      .url('Invalid Facebook URL'),
  }),
});
