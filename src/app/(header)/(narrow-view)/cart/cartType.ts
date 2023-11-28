import { TCartItem } from '@/api/cart/type';

export type THandleSelectItem = {
  event: React.ChangeEvent<HTMLInputElement>;
  selectedItem: TCartItem;
};
