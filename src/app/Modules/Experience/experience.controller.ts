import CatchAsync from '../../utils/CatchAsync';
import SendResponse from '../../utils/SendResponse';
import { ExperienceService } from './experience.services';
import httpStatus from 'http-status';
const createExperience = CatchAsync(async (req, res) => {
  const result = await ExperienceService.createExperienceIntoDB(req.body);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience created successfully',
    data: result,
  });
});

const getAllExperiences = CatchAsync(async (req, res) => {
  const result = await ExperienceService.getAllExperiencesFromDB();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experiences fetched successfully',
    data: result,
  });
});

const updateExperience = CatchAsync(async (req, res) => {
  const result = await ExperienceService.updateExperienceInDB(
    req.params.id,
    req.body,
  );

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  });
});

const deleteExperience = CatchAsync(async (req, res) => {
  const result = await ExperienceService.deleteExperienceFromDB(req.params.id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience deleted successfully',
    data: result,
  });
});

export const ExperienceController = {
  createExperience,
  getAllExperiences,
  updateExperience,
  deleteExperience,
};
