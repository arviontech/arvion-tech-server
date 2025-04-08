import { z } from 'zod';
import { Skill_Category, Skill_Level } from './skill.interface';
export const skillValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Skill name is required'),
    level: z.nativeEnum(Skill_Level, {
      required_error: 'Skill level is required',
    }),
    category: z.nativeEnum(Skill_Category, {
      required_error: 'Skill category is required',
    }),
  }),
});
