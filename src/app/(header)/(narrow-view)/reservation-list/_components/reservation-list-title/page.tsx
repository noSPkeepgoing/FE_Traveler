import Text from '@/components/atoms/text';
import styles from './reservationListTitle.module.scss';

function ReservationListTitle() {
  return (
    <header className={styles.title}>
      <Text fontSize="md" fontWeight="semibold">
        이전 예약 전체보기
      </Text>
    </header>
  );
}

export default ReservationListTitle;
