export type TReservationItemParams = {
  size?: number;
  page?: number;
};

export type TReservationItemResponse = {
  order_list: TReservationItem[];
  total_page: number;
  page_number: number;
};

export type TReservationItem = {
  order_date: string;
  accommodation_id: number;
  accommodation_name: string;
  accommodation_img: string;
  people_number: number;
  start_date: string;
  end_date: string;
  representative_name: string;
  order_price: number;
};
