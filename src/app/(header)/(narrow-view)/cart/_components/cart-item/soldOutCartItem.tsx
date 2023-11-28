import Text from '@/components/atoms/text';
import styles from './cartItem.module.scss';
import Image from 'next/image';
import { TcartInfo } from './cartItemType';

function SoldOutCartItem({ data }: { data: TcartInfo }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartInfo}>
        <Text fontSize="xs" fontWeight="bold" color="gray400">
          {data.accommodation_name}
        </Text>
        <div className={styles.cartImageInfo}>
          <Image
            src="https://avatars.githubusercontent.com/u/81469686?v=4"
            width={80}
            height={80}
            alt="숙소 이미지"
            className={styles.accommodationImage}
          />
          <div className={styles.cartDetailInfo}>
            <Text fontSize="xs-3" fontWeight="medium" color="gray400">
              {`${data.date} / ${data.people_number}명`}
            </Text>
            <Text fontSize="xs-3" fontWeight="medium" color="gray400">
              {data.address}
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.subCartInfo}>
        <div>아이콘</div>
        <div className={styles.priceInfo}>
          <Text fontSize="md" fontWeight="bold" color="blackAlpha100">
            {`${data.cart_price}원`}
          </Text>
          <Text fontSize="xs-4" fontWeight="medium" color="blackAlpha200">
            예약마감
          </Text>
        </div>
      </div>
    </div>
  );
}

export default SoldOutCartItem;
