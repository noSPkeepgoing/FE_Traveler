import { TAccommodation } from '@/app/(header)/(wide-view)/main/_components/item/itemType';
import { instance } from '..';
import { Response } from '../type';

export const MAIN_API = {
  getAccommodations: (category: number) =>
    instance.get<Response<TAccommodation[]>>('/v1/accommodations', {
      params: {
        location: category,
      },
    }),
};
