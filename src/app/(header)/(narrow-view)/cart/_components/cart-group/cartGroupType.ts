import { TCartDeleteParams, TCartItem } from '@/api/cart/cartApiType';

export type TCartGroup = {
  children: React.ReactNode;
  selectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isAllSelected: () => boolean;
  handleDeleteCartItems: (params: TCartDeleteParams) => void;
  selectedItems: TCartItem[];
};
