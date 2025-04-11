import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinaryUpload } from './Cloudinary.config';

const removeExtension = (filename: string) => {
  return filename.split('.').slice(0, -1).join('.');
};

// 1.filename.split('.'): Splits the filename string into an array using the . as a delimiter. For example:
//     "example.png" becomes ["example", "png"]

// 2. .slice(0, -1): Removes the last element of the array (i.e., the file extension).
//     For ["example", "png"], this returns ["example"].

// 3. .join('.'): Joins the remaining elements back into a string using . as a separator.
//     For ["example"], this returns "example".

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
  params: {
    public_id: (_req, file) =>
      Math.random().toString(36).substring(2) +
      '-' +
      Date.now() +
      '-' +
      file.fieldname +
      '-' +
      removeExtension(file.originalname),
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Limit to 10 MB for all files
  },
});

// Single file uploads for profilePhoto and coverImg
// export const uploadSingleImage = upload.fields([
//   { name: 'profilePhoto', maxCount: 1 },
// ]);

export const uploadIcon = upload.fields([{ name: 'icon', maxCount: 1 }]);

export const uploadSingleImage = upload.fields([
  { name: 'Image', maxCount: 1 },
]);
export const uploadAuthorAndBlogImage = upload.fields([
  { name: 'authorImage', maxCount: 1 },
  { name: 'blogImage', maxCount: 1 },
]);

// export const uploadMultipleImage = upload.fields([
//   { name: 'Images', maxCount: 10 },
// ]);

export const uploadMultipleImages = (
  fields: { name: string; maxCount: number }[],
) => {
  return upload.fields(fields);
};
