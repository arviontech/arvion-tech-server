/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/Middleware/globalErrorHandler';
import notFoundRoute from './app/Middleware/notFoundRoute';
import { MiddlewareRoutes } from './app/routes';
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', MiddlewareRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my portfolio');
});

app.use(
  globalErrorHandler as (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => void,
);
app.use('*', notFoundRoute);

export default app;
