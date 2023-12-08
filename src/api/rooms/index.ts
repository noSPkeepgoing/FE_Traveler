import { instance } from '..';
import { Response } from '../type';
import { TCheckReservation, TProductId, TProduct,TServerGetProduct } from './roomsApiType';
export const ROOMS_API = {
  checkReservation: async ({ startDate, endDate, id }: TCheckReservation) =>
    instance.get(
      `/v1/order/check?accommodation_id=${id}&start_date=${startDate}&end_date=${endDate}`,
    ),
  getProduct: async (id: TProductId) => {
    const res = await instance.get<Response<TServerGetProduct>>(
      `/v1/accommodations/${id}`,
      {
        headers: { cache: 'no-store' },
      },
    );
    return res.data;
  },
  addCart: async (product: TProduct) => {
    const res = await instance.post<Response>(`/v1/cart`, { ...product });
    return res.data;
  },
};
