import React from 'react';
import styles from './cartFooter.module.scss';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { TCartFooter } from './cartFooterType';

function CartFooter({
  totalPrice,
  selectedItemsLength,
  handleReservation,
}: TCartFooter) {
  return (
    <footer className={styles.cartFooter}>
      <div className={styles.cartFooterContent}>
        <div className={styles.cartInfo}>
          <Text color="blackAlpha200" fontWeight="semibold" fontSize="xs">
            {`총 ${selectedItemsLength}건`}
          </Text>
          <div className={styles.cartTotalPriceInfo}>
            <Text fontWeight="light" fontSize="xs-3">
              결제 예상 금액
            </Text>
            <Text fontSize="md" fontWeight="bold">
              {`${totalPrice}원`}
            </Text>
          </div>
        </div>
        <Button size="lg" onClick={handleReservation}>
          <Text color="white" fontSize="xs" fontWeight="semibold">
            예약하기
          </Text>
        </Button>
      </div>
    </footer>
  );
}

export default CartFooter;
