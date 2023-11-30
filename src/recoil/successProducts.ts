import { atom } from 'recoil';
import { TSuccessProduct } from './productType';

export const successProductsState = atom<TSuccessProduct>({
  key: 'successProducts',
  default: {
    representative_accommodation_name: '',
    total_price: 0,
    total_accommodation_num: 0,
  },
});
