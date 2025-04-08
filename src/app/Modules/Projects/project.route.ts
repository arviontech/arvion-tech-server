import { Router } from 'express';
import { ProjectController } from './project.controller';
import { validateRequest } from '../../Middleware/validateRequest';
import { ProjectsValidation } from './project.validation';

import validateImageFileRequest from '../../Middleware/validateImageFileRequest';
import { ImageFilesArrayZodSchema } from '../../utils/imageValidationSchema';
import bodyDataParser from '../../Middleware/bodyParser';
import { uploadMultipleImages } from '../../Config/multer.config';

const router = Router();

router.post(
  '/createProject',
  uploadMultipleImages([{ name: 'ProjectImages', maxCount: 5 }]),
  validateImageFileRequest(ImageFilesArrayZodSchema),
  bodyDataParser,
  validateRequest(ProjectsValidation.createProjectSchema),
  ProjectController.createProject,
);

// Get all projects
router.get('/', ProjectController.getAllProjects);

// Get a single project by ID
router.get('/:id', ProjectController.getProjectById);

// Update a project by ID
router.patch(
  '/:id',
  uploadMultipleImages([{ name: 'ProjectImages', maxCount: 5 }]),
  validateImageFileRequest(ImageFilesArrayZodSchema),
  bodyDataParser,
  validateRequest(ProjectsValidation.updateProjectSchema),
  ProjectController.updateProject,
);

export const ProjectRoutes = router;
