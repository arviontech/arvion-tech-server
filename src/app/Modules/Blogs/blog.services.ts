import { TImageFile } from '../../Interface/image.interface';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (
  payload: TBlog,
  authorImage: TImageFile,
  blogImage: TImageFile,
) => {
  payload.authorImage = authorImage.path;
  payload.blogImage = blogImage.path;
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find().sort('-createdAt');
  return result;
};

const getBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getBlogFromDB,
};
