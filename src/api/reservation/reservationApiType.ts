export type TReservation = {
  accommodation_id: number;
  people_number: number;
  start_date: string;
  end_date: string;
  representative_name: string;
  representative_email: string;
  order_price: number;
  cart_id: number;
};

export type TReservationItems = TReservation[];
