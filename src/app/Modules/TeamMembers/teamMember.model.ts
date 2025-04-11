import { model, Schema } from 'mongoose';
import { ITeamMember } from './teamMember.interface';

const teamMemberSchema = new Schema<ITeamMember>(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const TeamMember = model<ITeamMember>('TeamMember', teamMemberSchema);
