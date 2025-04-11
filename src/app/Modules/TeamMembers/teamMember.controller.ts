/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import CatchAsync from '../../utils/CatchAsync';
import SendResponse from '../../utils/SendResponse';
import { TeamMemberServices } from './teamMember.services';

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
    message: 'Team member is created successfully',
    data: result,
  });
});

export const TeamMemberController = {
  createTeamMember,
};
