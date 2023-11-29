export type TReservationData = {
  accommodation_name: string;
  description: string;
  address: string;
  limit_people: number;
  accommodation_price: number;
  accommodation_img: string;
  room_img: string[];
};

export type TReservationForm = {
    value : Date,
    valueSecond: Date,
    id : number,
    data : TReservationData,
    selectedOption:number,
}
