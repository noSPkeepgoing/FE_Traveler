import styles from './cartItem.module.scss';
import Text from '@/components/atoms/text';
import Image from 'next/image';
import { TReservation } from '../reservationType';
//{data }: TReservation
function ReservationItem() {
  return (
    <div></div>
    // <div className={styles.cartItem}>
    //   <div className={styles.cartInfo}>
    //     <Text fontSize="xs" fontWeight="bold">
    //       {data.accommodation_name}
    //     </Text>
    //     <div className={styles.cartImageInfo}>
    //       <Image
    //         src="https://avatars.githubusercontent.com/u/81469686?v=4"
    //         width={80}
    //         height={80}
    //         alt="숙소 이미지"
    //         className={styles.accommodationImage}
    //       />
    //       <div className={styles.reservationCard}>
    //         <div className={styles.itemDetails}>
    //           RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)
    //           <div>2023.12.04(월) - 2023.12.05(화) / 29</div>
    //         </div>
    //         <div className={styles.right}>
    //           <Text fontSize="xs-2" color="primary">
    //             139000원
    //           </Text>
    //           <Text fontSize="xs-3" color="red200">
    //             취소 및 환불 불가
    //           </Text>
    //           {/* <div className={styles.itemPrice}></div> */}
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  );
}

export default ReservationItem;
