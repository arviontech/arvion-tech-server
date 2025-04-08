import { TImageFiles } from '../../Interface/image.interface';
import CatchAsync from '../../utils/CatchAsync';
import SendResponse from '../../utils/SendResponse';
import { ProjectService } from './project.services';
import httpStatus from 'http-status';
const createProject = CatchAsync(async (req, res) => {
  const result = await ProjectService.createProject(
    req.body,
    req.files as TImageFiles,
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});

const getAllProjects = CatchAsync(async (req, res) => {
  const result = await ProjectService.getAllProjects();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All projects retrieved successfully',
    data: result,
  });
});

const getProjectById = CatchAsync(async (req, res) => {
  const result = await ProjectService.getProjectById(req.params.id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  });
});

const updateProject = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.updateProjectById(
    req.body,
    id,
    req.files as TImageFiles,
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
};
