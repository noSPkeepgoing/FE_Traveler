import { instance } from '..';
import { Response } from '../type';
import { TReservationItems } from './reservationApiType';

export const RESERVATION_API = {
  postReservation: (params: TReservationItems) =>
    instance.post<Response>('v1/order', params),
};
