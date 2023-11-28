import { TcartInfo } from './_components/cartItem/cartItemType';

export type ThandleSelectItem = {
  event: React.ChangeEvent<HTMLInputElement>;
  selectedItem: TcartInfo;
};
