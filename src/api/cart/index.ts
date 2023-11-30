import { instance } from '..';
import { Response } from '../type';
import { TCartDeleteParams, TCartItem } from './cartApiType';

export const CART_API = {
  getCart: () => instance.get<Response<TCartItem[]>>('v1/cart'),
  deleteCart: (params: TCartDeleteParams) =>
    instance.delete<Response>('v1/cart', {
      data: params,
    }),
};
