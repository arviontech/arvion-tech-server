import { model, Schema } from 'mongoose';
import { TService } from './service.interface';

const serviceSchema = new Schema<TService>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export const Service = model<TService>('Service', serviceSchema);
