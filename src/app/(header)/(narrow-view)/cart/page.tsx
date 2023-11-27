'use client';
import { useState } from 'react';
import CartGroup from './_components/cartGroup';
import CartTitle from './_components/cartTitle';
import { ThandleSelectItem } from './cartType';
import CartItem from './_components/cartItem';
import CartFooter from './_components/cartFooter';
import { TcartInfo } from './_components/cartItem/cartItemType';

const data = [
  {
    cart_id: 1,
    accommodation_id: 1,
    accommodation_name:
      'RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)',
    date: '2023.12.04(화) ~ 2023.12.05(수)',
    people_number: 2,
    address: '서울특별시 강남구 강남대로 364',
    cart_price: 129000,
    accommodation_img: 'https://avatars.githubusercontent.com/u/81469686?v=4',
  },
  {
    cart_id: 3,
    accommodation_id: 3,
    accommodation_name:
      'RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)',
    date: '2023.12.04(화) ~ 2023.12.05(수)',
    people_number: 2,
    address: '서울특별시 강남구 강남대로 364',
    cart_price: 129000,
    accommodation_img: 'https://avatars.githubusercontent.com/u/81469686?v=4',
  },
];

function CartPage() {
  const [selectedItems, setSelectedItems] = useState<TcartInfo[]>([]);

  const selectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      setSelectedItems(data);
    } else {
      setSelectedItems([]);
    }
  };

  const isAllSelected = () => {
    return selectedItems.length === data.length;
  };

  const handleSelectItem = ({ event, selectedItem }: ThandleSelectItem) => {
    if (event.target.checked) {
      setSelectedItems((prev) => [...prev, selectedItem]);
    } else {
      setSelectedItems(
        selectedItems.filter((item) => item.cart_id !== selectedItem.cart_id),
      );
    }
  };

  const isSelected = (id: number) => {
    return selectedItems.filter((item) => item.cart_id === id).length !== 0;
  };

  const calculateTotalPrice = () => {
    return selectedItems.reduce(
      (totalPrice, items) => totalPrice + items.cart_price,
      0,
    );
  };

  return (
    <>
      <CartTitle />
      <CartGroup selectAll={selectAll} isAllSelected={isAllSelected}>
        {data.map((item) => (
          <CartItem
            data={item}
            handleSelectItem={handleSelectItem}
            isSelected={isSelected}
          />
        ))}
      </CartGroup>
      <CartFooter
        totalPrice={calculateTotalPrice()}
        selectedItemsLength={selectedItems.length}
      />
    </>
  );
}

export default CartPage;
