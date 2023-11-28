import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styles from '../cart-group/cartGroup.module.scss';
import CartItem from '.';
import { TCartInfo } from './cartItemType';
import { THandleSelectItem } from '../../cartType';
import Layout from '../../../layout';

const meta = {
  title: 'cart/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle: 'CartItem는 장바구니 정보를 나타내는 컴포넌트입니다. ',
    docs: {
      description: {
        component: `
- CartItem의 Checkbox를 통해 선택과 해제가 가능합니다.\n
- CartItem의 삭제 아이콘을 통해 장바구니에서 상품 삭제가 가능합니다.\n
`,
      },
    },
  },
  argTypes: {
    data: {
      description: 'CartItem에 보여질 데이터를 의미합니다.',
    },
    handleSelectItem: {
      description: 'CartItem의 Checkbox의 onChange 속성에 할당 될 함수입니다.',
    },
    isSelected: {
      description:
        'CartItem의 Checkbox의 isChecked 속성에 할당 될 함수로 boolean 값을 반환합니다',
    },
  },
} satisfies Meta<typeof CartItem>;

export default meta;

export const ExampleCartItem: StoryObj<typeof CartItem> = {
  decorators: [
    (Story) => (
      <Layout>
        <div className={styles.cartContainer}>
          <Story />
        </div>
      </Layout>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 default CartItem입니다.',
      },
    },
  },
  render: (args) => {
    const item = {
      cart_id: 1,
      accommodation_id: 1,
      accommodation_name:
        'RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)',
      date: '2023.12.04(화) ~ 2023.12.05(수)',
      people_number: 2,
      address: '서울특별시 강남구 강남대로 364',
      cart_price: 129000,
      accommodation_img: 'https://avatars.githubusercontent.com/u/81469686?v=4',
    };
    const [selectedItems, setSelectedItems] = useState<TCartInfo[]>([]);

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

    return (
      <CartItem
        {...args}
        data={item}
        handleSelectItem={handleSelectItem}
        isSelected={isSelected}
      />
    );
  },
};
