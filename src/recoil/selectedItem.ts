import { TCartItem } from '@/api/cart/cartApiType';
import { atom } from 'recoil';

export const selectedItemState = atom<TCartItem[]>({
  key: 'selectedItems',
  default: [],
});
