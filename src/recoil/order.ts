import { atom } from 'recoil';
import { TProduct } from './productType';

export const productState = atom<TProduct>({
    key: 'product',
    default: {
      accommodation_name: '',
      adress: '',
      accommodation_price: 0,
      accommodation_img: '',
      start_date: '',
      end_date: '',
      accommodation_id: 0,
      people: 0,
    },
  });