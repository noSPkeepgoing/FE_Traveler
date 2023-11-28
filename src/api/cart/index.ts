import { instance } from '..';
import { Response } from '../type';
import { TCartItem } from './cartApiType';

export const CART_API = {
  getCart: () => instance.get<Response<TCartItem[]>>('v1/cart'),
};
