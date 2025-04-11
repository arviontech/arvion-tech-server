import { Router } from 'express';
import { TeamMemberController } from './teamMember.controller';
import { uploadSingleImage } from '../../Config/multer.config';
import { ImageFilesArrayZodSchema } from '../../utils/imageValidationSchema';
import validateImageFileRequest from '../../Middleware/validateImageFileRequest';
import bodyDataParser from '../../Middleware/bodyParser';
import { validateRequest } from '../../Middleware/validateRequest';
import {
  createTeamMemberZodSchema,
  updateTeamMemberZodSchema,
} from './teamMember.validation';

const router = Router();

router.post(
  '/createTeamMember',
  uploadSingleImage,
  validateImageFileRequest(ImageFilesArrayZodSchema),
  bodyDataParser,
  validateRequest(createTeamMemberZodSchema),
  TeamMemberController.createTeamMember,
);

router.get('/', TeamMemberController.getAllTeamMembers);
router.get('/:id', TeamMemberController.getSingleTeamMember);

router.patch(
  '/:id',
  uploadSingleImage,
  validateImageFileRequest(ImageFilesArrayZodSchema),
  bodyDataParser,
  validateRequest(updateTeamMemberZodSchema),
  TeamMemberController.updateTeamMemberInfo,
);

export const TeamMemberRoutes = router;
