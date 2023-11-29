'use client';
import React, { useEffect, useState } from 'react';
import ReservationItem from './_components/reservation-item/page';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './reservationList.module.scss';
import { useGetReservationList } from '@/queries/reservation-list';

function ReservationList() {
  const { data, fetchNextPage, hasNextPage } = useGetReservationList();
  const [items, setItems] = useState([1, 2, 3, 4]);
  const fetchMoreData = () => {
    // 새로운 데이터를 가져와서 state 업데이트
    console.log('first');
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      scrollThreshold={0.95}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}>
      <section className={styles.reservationItemContainer}>
        {items.map((item, index) => (
          <ReservationItem key={index} />
        ))}
      </section>
    </InfiniteScroll>
  );
}

export default ReservationList;
