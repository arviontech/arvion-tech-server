import httpStatus from 'http-status';
import CatchAsync from '../../utils/CatchAsync';
import SendResponse from '../../utils/SendResponse';
import { ServiceService } from './service.services';
import { TImageFiles } from '../../Interface/image.interface';

const createService = CatchAsync(async (req, res) => {
  const result = await ServiceService.createService(
    req.body,
    req.files as TImageFiles,
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service created successfully',
    data: result,
  });
});

const getServices = CatchAsync(async (req, res) => {
  const result = await ServiceService.getServices();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Services retrieved successfully',
    data: result,
  });
});

const getServiceById = CatchAsync(async (req, res) => {
  const result = await ServiceService.getServiceById(req.params.id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service retrieved successfully',
    data: result,
  });
});

const updateService = CatchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceService.updateServiceById(
    req.body,
    id,
    req.files as TImageFiles,
  );
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service updated successfully',
    data: result,
  });
});

export const ServiceController = {
  createService,
  getServices,
  getServiceById,
  updateService,
};
