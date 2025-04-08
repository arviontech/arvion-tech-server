// globalErrorHandler.ts
import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = err.message || 'Something went wrong';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: err,
  });
};

export default globalErrorHandler;
