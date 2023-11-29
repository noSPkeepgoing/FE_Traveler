import { instance } from '..';
import { TCheckReservation, TProductId } from './roomsApiType';
export const ROOMS_API = {
  checkReservation: async ({ startDate, endDate, id }: TCheckReservation) =>
    instance.get(
      `/v1/order/check?accommodation_id=${id}&start_date=${startDate}&end_date=${endDate}`,
    ),
  getProduct: async (id: TProductId) => {
    const res = await instance.get(`/v1/accommodations/${id}`, {
      headers: { cache: 'no-cache' },
    });
    return res.data;
  },
  addCart: async (product) => {
    const res = await instance.post(`/v1/cart`,{...product});
    return res.data;
  },
};

// /v1/order/check?accommodation_id=${id}&start_date=${startDate}&end_date=${endDate}
