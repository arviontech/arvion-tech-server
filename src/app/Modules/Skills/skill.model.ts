import { Schema, model } from 'mongoose';
import { Skill_Category, Skill_Level, TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true },
    level: {
      type: String,
      required: true,
      enum: Skill_Level,
    },
    category: {
      type: String,
      required: true,
      enum: Skill_Category,
    },
    icon: { type: String, required: true },
  },
  { timestamps: true },
);

export const Skill = model<TSkill>('Skill', skillSchema);
