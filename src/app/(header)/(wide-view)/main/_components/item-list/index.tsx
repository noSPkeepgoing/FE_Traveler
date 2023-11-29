'use client';

import React from 'react';
import Item from '../item';
import styles from './itemList.module.scss';
import { TAccommodation } from '../item/itemType';

const ItemList = ({ data }: { data: TAccommodation[] | undefined }) => {
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
