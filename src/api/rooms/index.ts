import { instance } from '..';
import axios from 'axios'
export const ROOMS_API = {
  checkReservation: async (startDate: string, endDate: string, id: number) => {
    const res = await axios.get(`https://api.gamsung.xyz/v1/order/check?accommodation_id=22&start_date=2023-11-29&end_date=2023-11-29`
      // `/v1/order/check?accommodation_id=${id}&start_date=${startDate}&end_date=${endDate}`);
    )
    return res.data;
  },
};
