'use client';

import React from 'react';
import Item from '../item';
import styles from './itemList.module.scss';
import { TAccommodation } from '@/api/main/mainApiType';
import { TItemListProps } from './itemListType';
import InfiniteScroll from 'react-infinite-scroll-component';

const ItemList = ({
  data,
  isLoading,
  hasNextPage,
  fetchNextPage,
}: TItemListProps) => {
  if (isLoading) return <>loading...</>;
  return (
    <InfiniteScroll
      loader={<>loading...</>}
      dataLength={data?.length ?? 0}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}>
      <div className={styles.items}>
        {data?.map((item: TAccommodation) => (
          <Item key={item.accommodation_id} data={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ItemList;
