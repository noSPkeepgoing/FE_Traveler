import Image from 'next/image';
import styles from './reservationItem.module.scss';
import Text from '@/components/atoms/text';
import { TReservationItem } from '@/api/reservation-list/reservationListApiType';

function ReservationItem({ item }: { item: TReservationItem }) {
  return (
    <>
      <div className={styles.reservationItem}>
        <div className={styles.itemInfo}>
          <Text fontSize="xs" fontWeight="bold">
            {item.accommodation_name}
          </Text>
          <div className={styles.imageInfo}>
            <Image
              src={item.accommodation_img}
              width={80}
              height={80}
              alt="숙소 이미지"
              className={styles.accommodationImage}
            />
            <div className={styles.detailInfo}>
              <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
                {`${item.start_date} ~ ${item.end_date} / ${item.people_number}명`}
              </Text>
              <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
                {`이용자: ${item.representative_name}`}
              </Text>
              <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
                {`결제일: ${item.order_date}`}
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.priceInfo}>
          <Text fontSize="md" fontWeight="bold">
            {`${item.order_price.toLocaleString()}원`}
          </Text>
        </div>
      </div>

      <div className={styles.mobileReservationItem}>
        <Text fontSize="xs" fontWeight="bold">
          {item.accommodation_name}
        </Text>
        <div className={styles.imageInfo}>
          <Image
            src={item.accommodation_img}
            width={80}
            height={80}
            alt="숙소 이미지"
            className={styles.accommodationImage}
          />
          <div className={styles.detailInfo}>
            <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
              {`${item.start_date} ~ ${item.end_date} / ${item.people_number}명`}
            </Text>
            <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
              {`이용자: ${item.representative_name}`}
            </Text>
            <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
              {`결제일: ${item.order_date}`}
            </Text>
          </div>
        </div>
        <div className={styles.mobilePriceInfo}>
          <Text fontSize="md" fontWeight="semibold">
            {`${item.order_price.toLocaleString()}원`}
          </Text>
        </div>
      </div>
    </>
  );
}

export default ReservationItem;
