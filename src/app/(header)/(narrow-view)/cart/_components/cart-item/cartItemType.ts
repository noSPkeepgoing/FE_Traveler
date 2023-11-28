import { TCartItem } from '@/api/cart/cartApiType';
import { THandleSelectItem } from '../../cartType';

export type TCartItemProps = {
  handleSelectItem: (value: THandleSelectItem) => void;
  data: TCartItem;
  isSelected: (id: number) => boolean;
};
