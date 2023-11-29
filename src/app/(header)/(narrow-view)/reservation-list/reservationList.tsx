'use client';
import React, { useMemo } from 'react';
import ReservationItem from './_components/reservation-item/page';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './reservationList.module.scss';
import { useGetInfiniteReservationList } from '@/queries/reservation-list';

function ReservationList() {
  const { data, fetchNextPage, hasNextPage } = useGetInfiniteReservationList({
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.data),
      pageParams: data.pageParams,
    }),
  });

  const reservationItems = useMemo(() => {
    return data?.pages.flatMap((page) => page.data.order_list);
  }, [data]);

  return (
    <InfiniteScroll
      dataLength={reservationItems?.length ?? 0}
      scrollThreshold={0.95}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={<h4>Loading...</h4>}>
      <section className={styles.reservationItemContainer}>
        {reservationItems?.map((item, index) => (
          <ReservationItem key={index} item={item} />
        ))}
      </section>
    </InfiniteScroll>
  );
}

export default ReservationList;
