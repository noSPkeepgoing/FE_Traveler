'use client';

import React from 'react';
import Item from '../item';
import styles from './itemList.module.scss';
import { TAccommodation } from '@/api/main/mainApiType';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '@/components/layouts/loader';
import useMain from '@/hooks/main/useMain';

const ItemList = () => {
  const { accommodationData, isLoading, fetchNextPage, hasNextPage } =
    useMain();

  if (isLoading) return <Loader />;
  return (
    <InfiniteScroll
      loader={<>loading...</>}
      dataLength={accommodationData?.length ?? 0}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}>
      <div className={styles.items}>
        {accommodationData?.map((item: TAccommodation) => (
          <Item key={item.accommodation_id} data={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ItemList;
