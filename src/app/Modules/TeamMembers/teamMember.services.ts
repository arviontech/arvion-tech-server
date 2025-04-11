import { TImageFile } from '../../Interface/image.interface';
import { ITeamMember } from './teamMember.interface';
import { TeamMember } from './teamMember.model';

const createTeamMemberIntoDB = async (
  payload: ITeamMember,
  image: TImageFile,
) => {
  payload.image = image.path;
  const teamMember = await TeamMember.create(payload);
  return teamMember;
};

export const TeamMemberServices = {
  createTeamMemberIntoDB,
};
