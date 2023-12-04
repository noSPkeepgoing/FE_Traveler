import Skeleton from '@/components/layouts/skeleton';
import styles from '../reservation-item/reservationItem.module.scss';
function ReservationSkeleton() {
  return (
    <div className={styles.reservationItem}>
      <div className={styles.itemInfo}>
        <Skeleton width={300} height={20} borderRadius={4} />
        <div className={styles.imageInfo}>
          <Skeleton width={80} height={80} borderRadius={8} />
          <div className={styles.detailInfo}>
            <Skeleton width={100} height={10} borderRadius={4} />
            <Skeleton width={100} height={10} borderRadius={4} />
            <Skeleton width={100} height={10} borderRadius={4} />
          </div>
        </div>
      </div>
      <div className={styles.priceInfo}>
        <Skeleton width={150} height={20} borderRadius={4} />
      </div>
    </div>
  );
}

export default ReservationSkeleton;
