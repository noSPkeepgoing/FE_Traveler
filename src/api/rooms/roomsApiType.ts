export type TCheckReservation = {
  startDate: string;
  endDate: string;
  id: number;
};

export type TProductId = number;

export type TServerGetProduct = {
  accommodation_name: string,
  description: string,
  address: string,
  limit_people: number,
  accommodation_price:number,
  accommodation_img:string,
  room_img:string[],
}

export type TProduct = {
  name: string,
  address: string,
  cart_price: number,
  accommodation_img: string,
  start_date: string,
  end_date: string,
  accommodation_id: number,
  people: number,
}