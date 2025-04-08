import { Response } from 'express';

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data: T | null | undefined;
};

const SendResponse = <T>(res: Response, jsonData: TResponse<T>) => {
  res.status(jsonData.statusCode).json({
    success: jsonData.success,
    message: jsonData.message || null,
    meta: jsonData.meta || null || undefined,
    data: jsonData.data || null || undefined,
  });
};

export default SendResponse;
