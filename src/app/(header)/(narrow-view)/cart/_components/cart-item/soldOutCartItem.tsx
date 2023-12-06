import Text from '@/components/atoms/text';
import styles from './cartItem.module.scss';
import Image from 'next/image';
import { TCartItemProps } from './cartItemType';
import Button from '@/components/atoms/button';
import { VscChromeClose } from 'react-icons/vsc';
import Checkbox from '@/components/atoms/checkbox';

function SoldOutCartItem({
  data,
  handleDeleteCartItems,
}: Pick<TCartItemProps, 'data' | 'handleDeleteCartItems'>) {
  return (
    <div className={styles.cartItem}>
      <Checkbox disabled={true} />
      <div className={styles.itemInfo}>
        <Text fontSize="xs" fontWeight="bold" color="gray400">
          {data.accommodation_name}
        </Text>
        <div className={styles.imageInfo}>
          <Image
            src={data.accommodation_img}
            width={80}
            height={80}
            alt="숙소 이미지"
            className={styles.accommodationImage}
          />
          <div className={styles.detailInfo}>
            <Text fontSize="xs-3" fontWeight="medium" color="gray400">
              {`${data.start_date}~${data.end_date} / ${data.people_number}명`}
            </Text>
            <Text fontSize="xs-3" fontWeight="medium" color="gray400">
              {data.address}
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.subCartInfo}>
        <Button
          variant="text"
          onClick={() => {
            handleDeleteCartItems({ delete_id: [data.cart_id] });
          }}>
          <VscChromeClose size="16" />
        </Button>
        <div className={styles.priceInfo}>
          <Text
            fontSize="md"
            fontWeight="bold"
            color="blackAlpha100"
            textDecoration="line-through">
            {`${data.cart_price.toLocaleString()}원`}
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
