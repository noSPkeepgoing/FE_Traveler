import Checkbox from '@/components/atoms/checkbox';
import styles from './cartItem.module.scss';
import Text from '@/components/atoms/text';
import Image from 'next/image';
import { TCartItem } from './cartItemType';

function CartItem({ handleSelectItem, isSelected, data }: TCartItem) {
  return (
    <div className={styles.cartItem}>
      <Checkbox
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleSelectItem({ event, selectedItem: data });
        }}
        isChecked={isSelected(data.cart_id)}
      />
      <div className={styles.itemInfo}>
        <Text fontSize="xs" fontWeight="bold">
          {data.accommodation_name}
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
              {`${data.date} / ${data.people_number}명`}
            </Text>
            <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
              {data.address}
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.subCartInfo}>
        <div>아이콘</div>
        <div>
          <Text fontSize="md" fontWeight="bold">
            {`${data.cart_price}원`}
          </Text>
          <Text fontSize="xs-3" fontWeight="light" color="red200">
            결제 시 환불 불가
          </Text>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
