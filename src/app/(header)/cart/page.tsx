import React from 'react';
import styles from './cart.module.scss';
import Button from '@/components/atoms/button';
import Text from '@/components/atoms/text';

function Cart() {
  return (
    <>
      <section className={styles.title}>
        <p
          style={{
            fontSize: '32px',
            fontWeight: '600',
            margin: 0,
          }}>
          장바구니
        </p>
      </section>
      <div className={styles.selectContainer}>
        <div style={{ display: 'flex' }}>
          <input type="checkbox" /> <div>전체선택</div>
        </div>

        <Button variant="text">
          <Text fontSize="xs-2" fontWeight="normal" color="highlight">
            선택 삭제
          </Text>
        </Button>
      </div>
    </>
  );
}

export default Cart;
