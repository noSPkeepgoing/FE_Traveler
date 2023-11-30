import { RESERVATION_LIST_API } from '@/api/reservation-list/indext';
import { TReservationItemResponse } from '@/api/reservation-list/reservationListApiType';
import { Response } from '@/api/type';
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export const useGetInfiniteReservationList = (
  options?: UseInfiniteQueryOptions<
    AxiosResponse<Response<TReservationItemResponse>>,
    AxiosError,
    Response<TReservationItemResponse>
  >,
) => {
  return useInfiniteQuery<
    AxiosResponse<Response<TReservationItemResponse>>,
    AxiosError,
    Response<TReservationItemResponse>
  >(
    ['reservation-list'],
    ({ pageParam = 1 }) =>
      RESERVATION_LIST_API.getReservationList({ size: 8, page: pageParam }),
    {
      getNextPageParam: ({
        data: {
          data: { page_number, total_page },
        },
      }) => {
        const nextPage = page_number + 1;
        return total_page > page_number ? nextPage : undefined;
      },
      ...options,
    },
  );
};
