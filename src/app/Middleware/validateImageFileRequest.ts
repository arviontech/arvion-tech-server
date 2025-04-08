/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyZodObject, ZodArray, ZodEffects, ZodRecord } from 'zod';
import { NextFunction, Request, Response } from 'express';
import CatchAsync from '../utils/CatchAsync';

const validateImageFileRequest = (
  schema: AnyZodObject | ZodEffects<any> | ZodArray<any> | ZodRecord<any>,
) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const parsedFile = await schema.parseAsync({
      files: req.files,
    });
    req.files = parsedFile.files;
    next();
  });
};
export default validateImageFileRequest;
