import { ThandleSelectItem } from '../../cartType';

export type TcartInfo = {
  cart_id: number;
  accommodation_id: number;
  accommodation_name: string;
  date: string;
  address: string;
  people_number: number;
  cart_price: number;
  accommodation_img: string;
};

export type TcartItem = {
  handleSelectItem: (value: ThandleSelectItem) => void;
  data: TcartInfo;
  isSelected: (id: number) => boolean;
};
