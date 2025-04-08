import { Router } from 'express';
import { validateRequest } from '../../Middleware/validateRequest';
import { ExperienceController } from './experience.controller';
import { ExperienceValidation } from './experience.validation';

const router = Router();

// Create an experience
router.post(
  '/createExperience',

  validateRequest(ExperienceValidation.createExperienceSchema),
  ExperienceController.createExperience,
);

// Get all experiences
router.get('/', ExperienceController.getAllExperiences);

// Update an experience by ID
router.patch(
  '/:id',

  validateRequest(ExperienceValidation.updateExperienceSchema),
  ExperienceController.updateExperience,
);

// Delete an experience by ID
router.delete('/:id', ExperienceController.deleteExperience);

export const ExperienceRoutes = router;
