import React from 'react';
import { TAccommodation } from '../../mainType';
import styles from './item.module.scss';
import Text from '@/components/atoms/text';

function Item({ data }: { data: TAccommodation }) {
  const {
    short_address,
    accommodation_name,
    accommodation_price,
    accommodation_img,
  } = data;
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={accommodation_img} />
      </div>
      <div className={styles.item__info}>
        <div className={styles.info__name}>
          <Text fontSize="xs" fontWeight="bold">
            {accommodation_name}
          </Text>
          <div className={styles.info__address}>
            <Text fontSize="xs-2">{short_address}</Text>
          </div>
          <div className={styles.info__price}>
            <Text fontWeight="semibold">{`₩${accommodation_price.toLocaleString()}`}</Text>
            <Text>{'/박'}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
