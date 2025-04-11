import { ITeamMember } from './teamMember.interface';
import { TeamMember } from './teamMember.model';
import { TImageFile } from '../../Interface/image.interface';

const createTeamMemberIntoDB = async (
  payload: ITeamMember,
  image: TImageFile,
) => {
  payload.image = image.path;
  const teamMember = await TeamMember.create(payload);
  return teamMember;
};

const getAllTeamMembers = async () => {
  return await TeamMember.find();
};

const getSingleTeamMember = async (id: string) => {
  return await TeamMember.findById(id);
};

const updateTeamMemberInfo = async (
  id: string,
  payload: Partial<ITeamMember>,
  image?: TImageFile,
) => {
  if (image) {
    payload.image = image.path;
  }

  const updatedTeamMember = await TeamMember.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return updatedTeamMember;
};

export const TeamMemberServices = {
  createTeamMemberIntoDB,
  getAllTeamMembers,
  getSingleTeamMember,
  updateTeamMemberInfo,
};
