import { z } from 'zod';

const createExperienceSchema = z.object({
  body: z.object({
    title: z.string().nonempty(),
    company: z.string().nonempty(),
    location: z.string().nonempty(),
    startDate: z.string().nonempty(),
    description: z.string().nonempty(),
    technologies: z.array(z.string()).nonempty(),
  }),
});

const updateExperienceSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    company: z.string().optional(),
    location: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    description: z.string().optional(),
    technologies: z.array(z.string()).optional(),
  }),
});

export const ExperienceValidation = {
  createExperienceSchema,
  updateExperienceSchema,
};
