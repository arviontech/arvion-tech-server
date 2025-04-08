import AppError from '../Error/AppError';
import CatchAsync from '../utils/CatchAsync';
import httpStatus from 'http-status';

const bodyDataParser = CatchAsync(async (req, res, next) => {
  if (!req.body) {
    throw new AppError(httpStatus.BAD_REQUEST, 'please provide data in body');
  }
  req.body = JSON.parse(req.body.data);
  next();
});

export default bodyDataParser;
