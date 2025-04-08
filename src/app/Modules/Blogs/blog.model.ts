import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    authorImage: {
      type: String,
      required: true,
    },
    blogTitle: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    blogImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Blog = model<TBlog>('Blog', blogSchema);
