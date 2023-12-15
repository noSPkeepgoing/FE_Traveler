import { instance } from '..';
import { Response } from '../type';
import { TMainListData } from './mainApiType';

export const MAIN_API = {
  getAccommodations: (category: string, page?: number) =>
    instance.get<Response<TMainListData>>('/v1/accommodations', {
      params: {
        regionIds: category,
        size: 12,
        page: page,
      },
    }),
};
