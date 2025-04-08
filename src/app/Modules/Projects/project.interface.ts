import { Types } from 'mongoose';

// Define the structure of a project document
export interface TProject {
  title: string;
  description: string;
  github: {
    frontend: string;
    backend: string;
  };
  live: string;
  technologies: [Types.ObjectId];
  images: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
