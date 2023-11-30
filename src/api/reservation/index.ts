import { instance } from '..';
import { Response } from '../type';
import { TReservation } from './reservationApiType';

export const RESERVATION_API = {
  postReservation: (userData: TReservation) =>
    instance.post<Response<TReservation[]>>('v1/order', userData),
};
