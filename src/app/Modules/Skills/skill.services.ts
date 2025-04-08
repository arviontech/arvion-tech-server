import { TImageFile } from '../../Interface/image.interface';
import { TSkill } from './skill.interface';
import { Skill } from './skill.model';

const createSkill = async (payload: TSkill, icon: TImageFile) => {
  if (icon) {
    payload.icon = icon.path;
  }
  const result = await Skill.create(payload);
  return result;
};

const getAllSkillsFromDB = async (category?: string) => {
  const filter = category ? { category } : {};
  const result = await Skill.find(filter).sort('createdAt');
  return result;
};

const deleteSkillFromDB = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  return result;
};

export const SkillService = {
  createSkill,
  getAllSkillsFromDB,
  deleteSkillFromDB,
};
