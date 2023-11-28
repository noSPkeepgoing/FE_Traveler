import { instance } from '..';
export const ROOMS_API = {
  checkReservation: async (startDate: string, endDate: string) => {
    const res = await instance.get(
      `/v1/order/check?accommodation_id=3&start_date=${startDate}&end_date=${endDate}`,
    );
    return res.data;
  },
};
