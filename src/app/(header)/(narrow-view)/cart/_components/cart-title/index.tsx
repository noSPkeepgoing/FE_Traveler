import Text from '@/components/atoms/text';
import React from 'react';
import styles from './cartTitle.module.scss';

function CartTitle() {
  return (
    <header className={styles.title}>
      <Text fontSize="xl" fontWeight="semibold">
        장바구니
      </Text>
    </header>
  );
}

export default CartTitle;
