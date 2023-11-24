import React from 'react';
import './cart.scss';
import Button from '@/components/button';
import Text from '@/components/text';
import Checkbox from '@/components/checkbox';
import CartItem from './_components/cartItem';

function CartPage() {
  return (
    <>
      <section className="title">
        <p
          style={{
            fontSize: '32px',
            fontWeight: '600',
            margin: 0,
          }}>
          장바구니
        </p>
      </section>
      <div className="selectContainer">
        <div style={{ display: 'flex' }}>
          <Checkbox variant="default" />
          <div>전체선택</div>
        </div>

        <Button variant="text">
          <Text fontSize="xs-2" fontWeight="normal" color="highlight">
            선택 삭제
          </Text>
        </Button>
      </div>
      <CartItem />
    </>
  );
}

export default CartPage;
