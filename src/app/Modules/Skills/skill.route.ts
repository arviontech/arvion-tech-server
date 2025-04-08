import { Router } from 'express';
import { SkillController } from './skill.controller';
import { uploadIcon } from '../../Config/multer.config';
import validateImageFileRequest from '../../Middleware/validateImageFileRequest';
import { ImageFilesArrayZodSchema } from '../../utils/imageValidationSchema';
import { validateRequest } from '../../Middleware/validateRequest';
import { skillValidationSchema } from './skill.validation';
import bodyDataParser from '../../Middleware/bodyParser';

const router = Router();

router.post(
  '/createSkill',
  uploadIcon,
  validateImageFileRequest(ImageFilesArrayZodSchema),
  bodyDataParser,
  validateRequest(skillValidationSchema),
  SkillController.createSkill,
);

// Get all skills
router.get('/', SkillController.getAllSkills);

// Delete a skill by ID
router.delete('/:id', SkillController.deleteSkill);

export const SkillRoute = router;
