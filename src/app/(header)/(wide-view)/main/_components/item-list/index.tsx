'use client';

import React from 'react';
import Item from '../item';
import styles from './itemList.module.scss';
import { TAccommodation } from '@/api/main/mainApiType';
import { TItemListProps } from './itemListType';

const ItemList = ({ data, isLoading }: TItemListProps) => {
  if (isLoading) return <>loading...</>;
  return (
    <>
      <div className={styles.items}>
        {data?.map((item: TAccommodation) => (
          <Item key={item.accommodation_id} data={item} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
