import { TCartDeleteParams, TCartItem } from '@/api/cart/cartApiType';

export type TCartGroup = {
  children: React.ReactNode;
  selectAll: React.ChangeEventHandler<HTMLInputElement>;
  isAllSelected: () => boolean;
  handleDeleteCartItems: (params: TCartDeleteParams) => void;
  selectedItems: TCartItem[];
};
