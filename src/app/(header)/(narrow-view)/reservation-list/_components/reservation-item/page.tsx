import Image from 'next/image';
import styles from './reservationItem.module.scss';
import Text from '@/components/atoms/text';

function ReservationItem() {
  return (
    <div className={styles.reservationItem}>
      <div className={styles.itemInfo}>
        <Text fontSize="xs" fontWeight="bold">
          RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)
        </Text>
        <div className={styles.imageInfo}>
          <Image
            src="https://avatars.githubusercontent.com/u/81469686?v=4"
            width={80}
            height={80}
            alt="숙소 이미지"
            className={styles.accommodationImage}
          />
          <div className={styles.detailInfo}>
            <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
              2023.12.04(화) ~ 2023.12.05(수) / 성인 2명
            </Text>
            <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
              이용자 이름
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationItem;
