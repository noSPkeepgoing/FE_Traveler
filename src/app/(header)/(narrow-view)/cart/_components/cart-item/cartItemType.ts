import { TCartItem } from '@/api/cart/type';
import { THandleSelectItem } from '../../cartType';

export type TCartItemProps = {
  handleSelectItem: (value: THandleSelectItem) => void;
  data: TCartItem;
  isSelected: (id: number) => boolean;
};
