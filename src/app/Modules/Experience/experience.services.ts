import { TExperience } from './experience.interface';
import { Experience } from './experience.model';

const createExperienceIntoDB = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getAllExperiencesFromDB = async () => {
  const result = await Experience.find()
    .sort('-createdAt')
    .populate('technologies');
  return result;
};

const updateExperienceInDB = async (id: string, payload: TExperience) => {
  const result = await Experience.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteExperienceFromDB = async (id: string) => {
  const result = await Experience.findByIdAndDelete(id);
  return result;
};

export const ExperienceService = {
  createExperienceIntoDB,
  getAllExperiencesFromDB,
  updateExperienceInDB,
  deleteExperienceFromDB,
};
