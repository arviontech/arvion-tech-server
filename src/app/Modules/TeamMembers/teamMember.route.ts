import { Router } from 'express';
import { TeamMemberController } from './teamMember.controller';
import { uploadSingleImage } from '../../Config/multer.config';
import { ImageFilesArrayZodSchema } from '../../utils/imageValidationSchema';
import validateImageFileRequest from '../../Middleware/validateImageFileRequest';
import bodyDataParser from '../../Middleware/bodyParser';
import { validateRequest } from '../../Middleware/validateRequest';
import { createTeamMemberZodSchema } from './teamMember.validation';

const router = Router();

router.post(
  '/createTeamMember',
  uploadSingleImage,
  validateImageFileRequest(ImageFilesArrayZodSchema),
  bodyDataParser,
  validateRequest(createTeamMemberZodSchema),
  TeamMemberController.createTeamMember,
);

export const TeamMemberRoutes = router;
