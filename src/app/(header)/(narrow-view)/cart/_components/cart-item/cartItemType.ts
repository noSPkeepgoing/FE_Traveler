import { THandleSelectItem } from '../../cartType';

export type TCartInfo = {
  cart_id: number;
  accommodation_id: number;
  accommodation_name: string;
  date: string;
  address: string;
  people_number: number;
  cart_price: number;
  accommodation_img: string;
};

export type TCartItem = {
  handleSelectItem: (value: THandleSelectItem) => void;
  data: TCartInfo;
  isSelected: (id: number) => boolean;
};
