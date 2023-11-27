import { TcartInfo } from './_components/cart-item/cartItemType';

export type ThandleSelectItem = {
  event: React.ChangeEvent<HTMLInputElement>;
  selectedItem: TcartInfo;
};
