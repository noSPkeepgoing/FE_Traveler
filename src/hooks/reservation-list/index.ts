'use client';
import { useGetInfiniteReservationList } from '@/queries/reservation-list';
import { useMemo } from 'react';

function useReservationList() {
  const { data, fetchNextPage, hasNextPage } = useGetInfiniteReservationList({
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.data),
      pageParams: data.pageParams,
    }),
  });

  const reservationItems = useMemo(() => {
    return data?.pages.flatMap((page) => page.data.order_list);
  }, [data]);
  return {
    reservationItems,
    fetchNextPage,
    hasNextPage,
  };
}

export default useReservationList;
