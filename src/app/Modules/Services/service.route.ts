import { Router } from 'express';
import { uploadMultipleImages } from '../../Config/multer.config';
import validateImageFileRequest from '../../Middleware/validateImageFileRequest';
import bodyDataParser from '../../Middleware/bodyParser';
import { validateRequest } from '../../Middleware/validateRequest';
import { ImageFilesArrayZodSchema } from '../../utils/imageValidationSchema';
import { ServiceController } from './service.controller';
import { serviceValidationSchema } from './service.validation';

const router = Router();

router.post(
  '/createService',
  uploadMultipleImages([{ name: 'ServiceImages', maxCount: 5 }]),
  validateImageFileRequest(ImageFilesArrayZodSchema),
  bodyDataParser,
  validateRequest(serviceValidationSchema),
  ServiceController.createService,
);

// Get all projects
router.get('/', ServiceController.getServices);

// Get a single project by ID
router.get('/:id', ServiceController.getServiceById);

// Update a project by ID
// router.patch(
//   '/:id',
//   uploadMultipleImages([{ name: 'ServicesImage', maxCount: 5 }]),
//   validateImageFileRequest(ImageFilesArrayZodSchema),
//   bodyDataParser,
//   validateRequest(ProjectsValidation.updateProjectSchema),
//   ServiceController.updateProject,
// );

export const ProjectRoutes = router;
