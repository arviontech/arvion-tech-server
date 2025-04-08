import { Router } from 'express';

import { BlogController } from './blog.controller';
import validateImageFileRequest from '../../Middleware/validateImageFileRequest';
import { ImageFilesArrayZodSchema } from '../../utils/imageValidationSchema';
import bodyDataParser from '../../Middleware/bodyParser';
import { validateRequest } from '../../Middleware/validateRequest';
import { BlogsValidation } from './blog.validation';
import { uploadAuthorAndBlogImage } from '../../Config/multer.config';

const router = Router();

router.post(
  '/createBlog',
  uploadAuthorAndBlogImage,
  validateImageFileRequest(ImageFilesArrayZodSchema),
  bodyDataParser,
  validateRequest(BlogsValidation.createBlogSchema),
  BlogController.createBlog,
);

// Get all blogs
router.get('/', BlogController.getAllBlogs);

// Get a single blog by ID
router.get('/:id', BlogController.getSingleBlog);

export const BlogRoutes = router;
