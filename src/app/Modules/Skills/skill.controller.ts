/* eslint-disable @typescript-eslint/no-explicit-any */
import CatchAsync from '../../utils/CatchAsync';
import SendResponse from '../../utils/SendResponse';
import { SkillService } from './skill.services';
import httpStatus from 'http-status';

const createSkill = CatchAsync(async (req, res) => {
  const files = req.files as any;

  const icon = files?.icon ? files.icon[0] : undefined;
  const result = await SkillService.createSkill(req.body, icon);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});

const getAllSkills = CatchAsync(async (req, res) => {
  const { category } = req.query;
  const result = await SkillService.getAllSkillsFromDB(category as string);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: category
      ? `Skills for category: ${category}`
      : 'All skills retrieved successfully',
    data: result,
  });
});

const deleteSkill = CatchAsync(async (req, res) => {
  const result = await SkillService.deleteSkillFromDB(req.params.id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });
});

export const SkillController = { createSkill, getAllSkills, deleteSkill };
