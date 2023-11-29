import { instance } from '..';
import { Response } from '../type';
import { TReservationItem } from './reservationListApiType';

export const RESERVATION_LIST_API = {
  getReservationList: (page: number) =>
    instance.get<Response<TReservationItem[]>>(
      `/v1/accommodations?location=31&size=12&page=${page}`,
    ),
};
