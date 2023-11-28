export type TCartItem = {
  cart_id: number;
  accommodation_id: number;
  accommodation_name: string;
  address: string;
  start_date: Date;
  end_date: Date;
  people_number: number;
  cart_price: number;
  accommodation_img: string;
  accommodation_sold_out: boolean;
};
