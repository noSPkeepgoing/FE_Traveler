'use client';
import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import Text from '@/components/text';
import React, { useState } from 'react';
import CartItem from './cartItem';
import styles from './cartGroup.module.scss';
import CartTotalPrice from './cartTotalPrice';

const data = [
  {
    id: '1',
    name: 'RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)',
    date: '2023.12.04(화) ~ 2023.12.05(수)',
    people: 2,
    address: '서울특별시 강남구 강남대로 364',
    price: 129000,
  },
  {
    id: '2',
    name: 'RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)',
    date: '2023.12.04(화) ~ 2023.12.05(수)',
    people: 2,
    address: '서울특별시 강남구 강남대로 364',
    price: 129000,
  },
  {
    id: '3',
    name: 'RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)',
    date: '2023.12.04(화) ~ 2023.12.05(수)',
    people: 2,
    address: '서울특별시 강남구 강남대로 364',
    price: 129000,
  },
];

export type TCartItem = {
  id: string;
  name: string;
  date: string;
  address: string;
  people: number;
  price: number;
};
function CartGroup() {
  const [checkItems, setCheckItems] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const selectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      setCheckItems(data.map((d) => d.id));
      setTotalPrice(data.reduce((ac, c) => ac + c.price, 0));
    } else {
      setCheckItems([]);
      setTotalPrice(0);
    }
  };

  const getAllSelectValue = () => {
    return checkItems.length === data.length;
  };

  return (
    <>
      <div className={styles.selectContainer}>
        <div className={styles.allSelection}>
          <Checkbox onChange={selectAll} checkedValue={getAllSelectValue()} />
          <div>전체선택</div>
        </div>
        <Button variant="text">
          <Text fontSize="xs" fontWeight="normal" color="highlight">
            선택 삭제
          </Text>
        </Button>
      </div>
      <section className={styles.cartItems}>
        {data.map((d) => (
          <CartItem
            key={d.id}
            setCheckItems={setCheckItems}
            checkItems={checkItems}
            setTotalPrice={setTotalPrice}
            id={d.id}
            name={d.name}
            date={d.date}
            price={d.price}
            address={d.address}
            people={d.people}
          />
        ))}
      </section>
      <CartTotalPrice />
    </>
  );
}

export default CartGroup;
