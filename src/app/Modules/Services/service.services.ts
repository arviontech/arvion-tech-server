import AppError from '../../Error/AppError';
import { TImageFiles } from '../../Interface/image.interface';
import { TService } from './service.interface';
import { Service } from './service.model';
import httpStatus from 'http-status';

const createService = async (payload: TService, images: TImageFiles) => {
  const { ServiceImages } = images;
  payload.images = ServiceImages.map((image) => image.path);
  const newService = await Service.create(payload);
  return newService;
};

const getServices = async () => {
  const services = await Service.find().sort('createdAt');
  return services;
};

const getServiceById = async (id: string) => {
  const service = await Service.findById(id);
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service not found');
  }
  return service;
};

export const ServiceService = {
  createService,
  getServices,
  getServiceById,
};
