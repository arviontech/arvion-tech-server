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

const updateServiceById = async (
  payload: Partial<TService> = {},
  serviceId: string,
  images?: TImageFiles,
) => {
  const service = await Service.findById(serviceId);
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service not found');
  }
  const serviceImages = images?.ServiceImages ?? [];
  if (serviceImages.length > 0) {
    payload.images = [
      ...(service.images ?? []),
      ...serviceImages.map((image) => image.path),
    ];
  } else {
    payload.images = service.images;
  }

  const updatedService = await Service.findByIdAndUpdate(serviceId, payload, {
    new: true,
  });
  return updatedService;
};

export const ServiceService = {
  createService,
  getServices,
  getServiceById,
  updateServiceById,
};
