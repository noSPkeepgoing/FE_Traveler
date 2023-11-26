import Checkbox from '@/components/checkbox';
import styles from './cartItem.module.scss';
import Text from '@/components/text';
import Image from 'next/image';
import { TCartItem } from './cartGroup';

function CartItem({
  setCheckItems,
  checkItems,
  setTotalPrice,
  id,
  name,
  date,
  price,
  address,
  people,
}: TCartItem & {
  checkItems: string[];
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setCheckItems: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const handleCheckedItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckItems((prev) => [...prev, id]);
      setTotalPrice((prev) => prev + price);
      return;
    }
    setCheckItems(checkItems.filter((item) => item !== id));
    setTotalPrice((prev) => prev - price);
  };

  const getCheckedValue = () => {
    return checkItems.includes(id);
  };

  return (
    <section className={styles.cartItem}>
      <Checkbox
        value={price}
        onChange={handleCheckedItem}
        checkedValue={getCheckedValue()}
      />
      <section className={styles.cartInfo}>
        <Text fontSize="xs" fontWeight="bold">
          {name}
        </Text>
        <section className={styles.cartImageInfo}>
          <Image
            src="https://avatars.githubusercontent.com/u/81469686?v=4"
            width={80}
            height={80}
            alt="숙소 이미지"
            className={styles.accommodationImage}
          />
          <section className={styles.cartDetailInfo}>
            <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
              {date} / {people}명
            </Text>
            <Text fontSize="xs-3" fontWeight="medium" color="blackAlpha100">
              {address}
            </Text>
          </section>
        </section>
      </section>
      <section className={styles.subCartInfo}>
        <div>아이콘</div>
        <section className={styles.priceInfo}>
          <Text fontSize="md" fontWeight="bold">
            {price}원
          </Text>
          <Text fontSize="xs-3" fontWeight="light" color="red200">
            결제 시 환불 불가
          </Text>
        </section>
      </section>
    </section>
  );
}

export default CartItem;
