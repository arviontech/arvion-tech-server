import { AnyZodObject } from 'zod';

import CatchAsync from '../utils/CatchAsync';

export const validateRequest = (Schema: AnyZodObject) => {
  return CatchAsync(async (req, res, next) => {
    await Schema.parseAsync({
      body: req.body,
    });
    next();
  });
};

export const validateRequestCookies = (schema: AnyZodObject) => {
  return CatchAsync(async (req, res, next) => {
    const parsedCookies = await schema.parseAsync({
      cookies: req.cookies,
    });

    req.cookies = parsedCookies.cookies;

    next();
  });
};
