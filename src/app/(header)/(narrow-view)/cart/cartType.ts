import { TCartInfo } from './_components/cart-item/cartItemType';

export type THandleSelectItem = {
  event: React.ChangeEvent<HTMLInputElement>;
  selectedItem: TCartInfo;
};
