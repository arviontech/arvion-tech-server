/* eslint-disable @typescript-eslint/no-explicit-any */
import { TImageFile } from '../../Interface/image.interface';
import CatchAsync from '../../utils/CatchAsync';
import SendResponse from '../../utils/SendResponse';
import { BlogService } from './blog.services';
import httpStatus from 'http-status';

const createBlog = CatchAsync(async (req, res) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  const authorImage = files?.authorImage?.[0] ?? null;
  const blogImage = files?.blogImage?.[0] ?? null;

  const result = await BlogService.createBlogIntoDB(
    req.body,
    authorImage as TImageFile, // Cast to TImageFile if not null
    blogImage as TImageFile, // Cast to TImageFile if not null
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const getAllBlogs = CatchAsync(async (req, res) => {
  const result = await BlogService.getAllBlogsFromDB();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs fetched successfully',
    data: result,
  });
});

const getSingleBlog = CatchAsync(async (req, res) => {
  const result = await BlogService.getBlogFromDB(req.params.id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog fetched successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
};
