import React from 'react';
import styles from './cartTotalPrice.module.scss';
import Text from '@/components/text';
import Button from '@/components/button';

function CartTotalPrice() {
  return (
    <section className={styles.cartTotalPriceContainer}>
      <div className={styles.cartInfo}>
        <Text color="blackAlpha200" fontWeight="semibold" fontSize="xs">
          총 2건
        </Text>
        <div className={styles.cartTotalPriceInfo}>
          <Text fontWeight="light" fontSize="xs-3">
            결제 예상 금액
          </Text>
          <Text fontSize="md" fontWeight="bold">
            278000원
          </Text>
        </div>
      </div>
      <Button size="lg">
        <Text color="white" fontSize="xs" fontWeight="semibold">
          예약하기
        </Text>
      </Button>
    </section>
  );
}

export default CartTotalPrice;
