import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import React from 'react';
import Image from 'next/image';
import styles from '../../reservation.module.scss';
import { TProduct } from '@/recoil/productType';

interface ReservationItemsProps {
  products: TProduct[];
}

function ReservationItems({ products }: ReservationItemsProps) {
  return (
    <section className={styles.reservationItemContainer}>
      {products?.map((item) => (
        <div className={styles.reservationItem}>
          <div className={styles.itemInfo}>
            <div className={styles.imageInfo}>
              <Image
                src={item.accommodation_img}
                width={80}
                height={80}
                alt="숙소 이미지"
                className={styles.accommodationImage}
              />
              <div className={styles.detailInfo}>
                <Text fontSize="xs" fontWeight="bold">
                  {item.accommodation_name}
                </Text>
                <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
                  {`${item.start_date} ~ ${item.end_date} / ${item.people_number}명`}
                </Text>
              </div>
            </div>
          </div>
          <div className={styles.priceInfo}>
            <Text fontSize="md" fontWeight="medium">
              {`${item.accommodation_price.toLocaleString()}원`}
            </Text>
            <Text fontSize="xs-3" fontWeight="normal" color="red200">
              취소 및 환불 불가
            </Text>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ReservationItems;
