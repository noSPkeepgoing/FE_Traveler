import { atom } from 'recoil';
import { TProduct } from './productType';

export const productState = atom<TProduct[]>({
  key: 'product',
  default: [],
});
