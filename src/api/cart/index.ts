import { instance } from '..';
import { Response, TCartItem } from './type';

// cart 관련 api 코드
export const CART_API = {
  getCart: async () =>
    await instance.get<Response<TCartItem[]>, Response<TCartItem[]>>('v1/cart'),
};
