import { RESERVATION_LIST_API } from '@/api/reservation-list/indext';
import { TReservationItem } from '@/api/reservation-list/reservationListApiType';
import { Response } from '@/api/type';
import {
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export const useGetReservationList = () => {
  return useInfiniteQuery(
    ['page'],
    ({ pageParam = 0 }) => RESERVATION_LIST_API.getReservationList(pageParam),
    {
      getNextPageParam: (lastPage, allPosts) => {
        console.log(lastPage);
        console.log(allPosts);
      },
    },
  );
};
