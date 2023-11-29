import { Value } from '../custom-calendar/customCalendarType';
export type TReservationData = {
  accommodation_name: string;
  description?: string;
  address: string;
  limit_people?: number;
  accommodation_price: number;
  accommodation_img?: string;
  room_img: string[];
};

export type TReservationForm = {
  value: Value;
  valueSecond: Value;
  id: number;
  data: TReservationData;
  selectedOption: number;
};

export type TReservation = {
  price: number;
  params: number;
  data: TReservationData;
}

export type TReservationEvent = React.ChangeEvent<HTMLSelectElement>
