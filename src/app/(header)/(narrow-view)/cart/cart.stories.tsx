import React, { useState } from 'react';
import type { StoryObj } from '@storybook/react';
import { THandleSelectItem } from './cartType';
import CartTitle from './_components/cart-title';
import CartGroup from './_components/cart-group';
import CartItem from './_components/cart-item';
import CartFooter from './_components/cart-footer';
import Layout from '../layout';
import { TCartItem } from '@/api/cart/cartApiType';

const meta = {
  title: 'cart/Cart',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Cart page에 사용되는 컴포넌트를 조합하는 컨테이너입니다 ',
  },
};

export default meta;

export const ExampleCart: StoryObj = {
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Cart입니다.',
      },
    },
  },
  render: () => {
    const data: TCartItem[] = [
      {
        cart_id: 2,
        accommodation_id: 2,
        accommodation_name:
          'RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)',
        address: '서울특별시 강남구 강남대로 364',
        start_date: new Date(),
        end_date: new Date(),
        people_number: 2,
        cart_price: 129000,
        accommodation_img:
          'https://avatars.githubusercontent.com/u/81469686?v=4',
        accommodation_sold_out: true,
      },
      {
        cart_id: 1,
        accommodation_id: 1,
        accommodation_name:
          'RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)',
        address: '서울특별시 강남구 강남대로 364',
        start_date: new Date(),
        end_date: new Date(),
        people_number: 2,
        cart_price: 129000,
        accommodation_img:
          'https://avatars.githubusercontent.com/u/81469686?v=4',
        accommodation_sold_out: true,
      },
    ];
    const [selectedItems, setSelectedItems] = useState<TCartItem[]>([]);

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

    const handleSelectItem = ({ event, selectedItem }: THandleSelectItem) => {
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
  },
};
