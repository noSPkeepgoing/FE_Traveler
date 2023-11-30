'use client';

import React from 'react';
import styles from './item.module.scss';
import Text from '@/components/atoms/text';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TAccommodation } from '@/api/main/mainApiType';

function Item({ data }: { data: TAccommodation }) {
  const router = useRouter();
  const {
    accommodation_id,
    short_address,
    accommodation_name,
    accommodation_price,
    accommodation_img,
  } = data;

  const handleClick = () => {
    router.push(`/rooms/${accommodation_id}`);
  };

  return (
    <div className={styles.item} onClick={handleClick}>
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
    </div>
  );
}

export default Item;
