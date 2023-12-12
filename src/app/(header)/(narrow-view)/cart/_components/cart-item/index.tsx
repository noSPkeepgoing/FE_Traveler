import Checkbox from '@/components/atoms/checkbox';
import styles from './cartItem.module.scss';
import Text from '@/components/atoms/text';
import Image from 'next/image';
import { VscChromeClose } from 'react-icons/vsc';
import Button from '@/components/atoms/button';
import { TCartItemProps } from './cartItemType';

function CartItem({
  handleSelectItem,
  isSelected,
  data,
  handleDeleteCartItems,
}: TCartItemProps) {
  return (
    <>
      <div className={styles.cartItem}>
        <Checkbox
          onChange={(event) => {
            handleSelectItem({ event, selectedItem: data });
          }}
          isChecked={isSelected(data.cart_id)}
        />
        <div className={styles.itemInfo}>
          <Button
            href={`rooms/${data.accommodation_id}`}
            variant="text"
            textDecoration="none">
            <Text fontSize="xs" fontWeight="bold">
              {data.accommodation_name}
            </Text>
          </Button>
          <div className={styles.imageInfo}>
            <Image
              src={data.accommodation_img}
              width={80}
              height={80}
              alt="숙소 이미지"
              className={styles.accommodationImage}
            />
            <div className={styles.detailInfo}>
              <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
                {`${data.start_date}~${data.end_date} / ${data.people_number}명`}
              </Text>
              <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
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
          <div>
            <Text fontSize="md" fontWeight="bold">
              {`${data.cart_price.toLocaleString()}원`}
            </Text>
            <Text fontSize="xs-3" fontWeight="light" color="red200">
              결제 시 환불 불가
            </Text>
          </div>
        </div>
      </div>
      {/* 모바일 반응형 */}
      <div className={styles.mobileCartItem}>
        <div className={styles.mobileNameInfo}>
          <div className={styles.mobileName}>
            <Checkbox
              onChange={(event) => {
                handleSelectItem({ event, selectedItem: data });
              }}
              isChecked={isSelected(data.cart_id)}
            />

            <Text fontSize="sm" fontWeight="bold">
              {data.accommodation_name}
            </Text>
          </div>
          <Button
            variant="text"
            size="xs"
            onClick={() => {
              handleDeleteCartItems({ delete_id: [data.cart_id] });
            }}>
            <VscChromeClose size="16" />
          </Button>
        </div>
        <div className={styles.mobileImageInfo}>
          <Image
            src={data.accommodation_img}
            width={80}
            height={80}
            alt="숙소 이미지"
            className={styles.accommodationImage}
          />
          <div className={styles.mobileDetailInfo}>
            <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
              {`${data.start_date}~${data.end_date} / ${data.people_number}명`}
            </Text>
            <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
              {data.address}
            </Text>
          </div>
        </div>
        <div className={styles.mobilePriceInfo}>
          <Text fontSize="md" fontWeight="bold">
            {`${data.cart_price.toLocaleString()}원`}
          </Text>
          <Text fontSize="xs-3" fontWeight="light" color="red200">
            결제 시 환불 불가
          </Text>
        </div>
      </div>
    </>
  );
}

export default CartItem;
