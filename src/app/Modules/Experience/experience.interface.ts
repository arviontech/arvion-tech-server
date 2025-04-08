import { Types } from 'mongoose';

export interface TExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  technologies: [Types.ObjectId];
}
