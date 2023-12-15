'use client';

import React from 'react';
import styles from './item.module.scss';
import Text from '@/components/atoms/text';
import Image from 'next/image';
import { TAccommodation } from '@/api/main/mainApiType';
import Link from 'next/link';

function Item({ data }: { data: TAccommodation }) {
  const {
    accommodation_id,
    short_address,
    accommodation_name,
    accommodation_price,
    accommodation_img,
  } = data;

  return (
    <Link href={`/rooms/${accommodation_id}`} className={styles.item}>
      <div className={styles.itemImage}>
        <Image
          src={accommodation_img}
          alt={`${accommodation_name} 이미지`}
          width={80}
          height={80}
        />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.infoName}>
          <Text fontSize="xs" fontWeight="bold">
            {accommodation_name}
          </Text>
          <div className={styles.infoAddress}>
            <Text fontSize="xs-2">{short_address}</Text>
          </div>
          <div className={styles.infoPrice}>
            <Text fontWeight="semibold">{`₩${accommodation_price.toLocaleString()}`}</Text>
            <Text> /박</Text>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
