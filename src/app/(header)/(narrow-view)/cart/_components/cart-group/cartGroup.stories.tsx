import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CartGroup from '.';
import { ThandleSelectItem } from '../../cartType';
import { TcartInfo } from '../cart-item/cartItemType';
import CartItem from '../cart-item';
import Layout from '../../../layout';

const meta = {
  title: 'cart/CartGroup',
  component: CartGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'CartGroup는 CartItem을 그룹으로 묶어 제어하는 컴포넌트입니다. ',
    docs: {
      description: {
        component: `
- CartGroup의 Checkbox를 통해 선택과 해제가 가능합니다.\n
- CartGroup의 삭제 아이콘을 통해 장바구니에서 상품 삭제가 가능합니다.\n
`,
      },
    },
  },
  argTypes: {
    children: {
      description: 'CartItem 컴포넌트를 의미합니다',
    },
    selectAll: {
      description: 'CartGroup의 Checkbox의 onChange 속성에 할당 될 함수입니다.',
    },
    isAllSelected: {
      description:
        'CartGroup의 Checkbox의 isChecked 속성에 할당 될 함수로 boolean 값을 반환합니다',
    },
  },
} satisfies Meta<typeof CartGroup>;

export default meta;

export const ExampleCartGroup: StoryObj<typeof CartGroup> = {
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
        story: '기본으로 사용되는 default CartGroup입니다.',
      },
    },
  },
  render: () => {
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
        accommodation_img:
          'https://avatars.githubusercontent.com/u/81469686?v=4',
      },
      {
        cart_id: 2,
        accommodation_id: 2,
        accommodation_name:
          'RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)',
        date: '2023.12.04(화) ~ 2023.12.05(수)',
        people_number: 2,
        address: '서울특별시 강남구 강남대로 364',
        cart_price: 129000,
        accommodation_img:
          'https://avatars.githubusercontent.com/u/81469686?v=4',
      },
    ];
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

    return (
      <CartGroup selectAll={selectAll} isAllSelected={isAllSelected}>
        <CartItem
          data={data[0]}
          handleSelectItem={handleSelectItem}
          isSelected={isSelected}
        />
      </CartGroup>
    );
  },
};
