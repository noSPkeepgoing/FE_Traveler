import { instance } from '..';
import { Response } from '../type';
import { TReservationItem } from './reservationApiType';

export const RESERVATION_API = {
  postReservation: () =>
    instance.post<Response<TReservationItem[]>>('v1/order', []),
};
