export type TProduct = {
  accommodation_name: string;
  address: string;
  accommodation_price: number;
  accommodation_img: string;
  start_date: string;
  end_date: string;
  accommodation_id: number;
  people_number: number;
  cart_id: number;
};

export type TSuccessProduct = {
  representative_accommodation_name: string;
  total_price: number;
  total_accommodation_num: number;
};
