import { instance } from '..';
import { Response } from '../type';
import { TMainListData } from './mainApiType';

export const MAIN_API = {
  getAccommodations: (category: number) =>
    instance.get<Response<TMainListData>>('/v1/accommodations', {
      params: {
        location: category,
      },
    }),
};
