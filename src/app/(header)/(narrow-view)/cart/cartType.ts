import { TCartItem } from '@/api/cart/cartApiType';

export type THandleSelectItem = {
  event: React.ChangeEvent<HTMLInputElement>;
  selectedItem: TCartItem;
};
