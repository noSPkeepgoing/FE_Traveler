'use client';
import React from 'react';
import ReservationItem from './_components/reservation-item/page';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './reservationList.module.scss';
import useReservationList from '@/hooks/reservation-list/useReservationList';
import Text from '@/components/atoms/text';
import Loader from '@/components/layouts/loader';
import ReservationSkeleton from './_components/reservation-skeleton';

function ReservationList() {
  const { reservationItems, fetchNextPage, hasNextPage, isError, isLoading } =
    useReservationList();

  if (isLoading) {
    const skeletonArray = new Array(5).fill('');
    return (
      <section className={styles.reservationItemContainer}>
        {skeletonArray?.map((_, index) => <ReservationSkeleton key={index} />)}
      </section>
    );
  }

  if (isError) {
    return (
      <section className={styles.reservationItemContainer}>
        <Text fontSize="md" fontWeight="semibold" color="blackAlpha100">
          알 수 없는 오류입니다
        </Text>
      </section>
    );
  }

  if (reservationItems?.length === 0) {
    return (
      <section className={styles.reservationItemContainer}>
        <Text fontSize="md" fontWeight="semibold" color="blackAlpha100">
          고객님의 예약내역이 존재하지 않습니다
        </Text>
      </section>
    );
  }

  return (
    <InfiniteScroll
      dataLength={reservationItems?.length ?? 0}
      scrollThreshold={0.95}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={<Loader size="sm" />}>
      <section className={styles.reservationItemContainer}>
        {reservationItems?.map((item, index) => (
          <ReservationItem key={index} item={item} />
        ))}
      </section>
    </InfiniteScroll>
  );
}

export default ReservationList;
