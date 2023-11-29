import { instance } from '..';
import axios from 'axios';
import { TCheckReservation } from './checkReservationType';
export const ROOMS_API = {
  checkReservation: async ({ startDate, endDate, id }: TCheckReservation) =>
    instance.get(
      `/v1/order/check?accommodation_id=${id}&start_date=${startDate}&end_date=${endDate}`,
    ),
};

// /v1/order/check?accommodation_id=${id}&start_date=${startDate}&end_date=${endDate}
