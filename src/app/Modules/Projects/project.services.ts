import AppError from '../../Error/AppError';
import { TImageFiles } from '../../Interface/image.interface';
import { TProject } from './project.interface';
import { Project } from './project.model';
import httpStatus from 'http-status';
const createProject = async (payload: TProject, images: TImageFiles) => {
  const { ProjectImages } = images;
  payload.images = ProjectImages.map((image) => image.path);
  const newProject = await Project.create(payload);
  return newProject;
};

const getAllProjects = async () => {
  const projects = await Project.find()
    .populate('technologies')
    .sort('createdAt');
  return projects;
};

const getProjectById = async (id: string) => {
  const project = await Project.findById(id).populate('technologies');
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }
  return project;
};

const updateProjectById = async (
  payload: Partial<TProject> = {},
  projectId: string,
  images?: TImageFiles,
) => {
  const project = await Project.findById(projectId);
  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }
  const postImages = images?.projectImages ?? [];
  if (postImages.length > 0) {
    payload.images = [
      ...(project.images ?? []),
      ...postImages.map((image) => image.path),
    ];
  } else {
    payload.images = project.images;
  }

  const updatedProject = await Project.findByIdAndUpdate(projectId, payload, {
    new: true,
  });
  return updatedProject;
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  //   deleteProjectById,
};
