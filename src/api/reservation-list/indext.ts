import { instance } from '..';
import { Response } from '../type';
import {
  TReservationItemParams,
  TReservationItemResponse,
} from './reservationListApiType';

export const RESERVATION_LIST_API = {
  getReservationList: (params?: TReservationItemParams) =>
    instance.get<Response<TReservationItemResponse>>('/v1/order/me', {
      params,
    }),
};
