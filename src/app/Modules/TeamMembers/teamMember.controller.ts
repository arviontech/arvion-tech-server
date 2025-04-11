/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import CatchAsync from '../../utils/CatchAsync';
import SendResponse from '../../utils/SendResponse';
import { TeamMemberServices } from './teamMember.services';

/* CREATE (already exists) */
const createTeamMember = CatchAsync(async (req, res) => {
  const files = req.files as any;
  const image = files?.Image ? files.Image[0] : undefined;

  const result = await TeamMemberServices.createTeamMemberIntoDB(
    req.body,
    image,
  );

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team member created successfully',
    data: result,
  });
});

/* GET ALL */
const getAllTeamMembers = CatchAsync(async (req, res) => {
  const result = await TeamMemberServices.getAllTeamMembers();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All team members retrieved successfully',
    data: result,
  });
});

/* GET SINGLE */
const getSingleTeamMember = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TeamMemberServices.getSingleTeamMember(id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team member retrieved successfully',
    data: result,
  });
});

/* UPDATE */
const updateTeamMemberInfo = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const files = req.files as any;
  const image = files?.Image ? files.Image[0] : undefined;

  const result = await TeamMemberServices.updateTeamMemberInfo(
    id,
    req.body,
    image,
  );

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team member updated successfully',
    data: result,
  });
});

export const TeamMemberController = {
  createTeamMember,
  getAllTeamMembers,
  getSingleTeamMember,
  updateTeamMemberInfo,
};
