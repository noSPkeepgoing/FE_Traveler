import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CartFooter from '.';
import Layout from '../../../layout';
import { TCartItem } from '@/api/cart/cartApiType';

const meta = {
  title: 'cart/CartFooter',
  component: CartFooter,
  parameters: {
    componentSubtitle:
      'CartFooter는 선택된 CartItem들의 totalPrice를 나타내고 예약하기 버튼이 존재하는 컴포넌트입니다. ',
    docs: {
      description: {
        component: `
- CartFooter의 선택된 CartItem 컴포넌트 개수와 totalPrice를 보여줍니다\n
- CartFooter의 예약하기 버튼을 통해 예약하기 페이지로 이동합니다.\n
`,
      },
    },
  },
  argTypes: {
    totalPrice: {
      description: '총 결제 금액을 나타내는 데이터입니다',
      table: {
        type: { summary: 'CartFooterTotalPrice' },
        defaultValue: { summary: 0 },
        control: {
          type: 'number',
        },
      },
    },
    selectedItemsLength: {
      description: '선택된 장바구니 상품의 개수를 의미하는 데이터입니다',
      table: {
        type: { summary: 'CartFooterTotalPrice' },
        defaultValue: { summary: 0 },
        control: {
          type: 'number',
        },
      },
    },
  },
} satisfies Meta<typeof CartFooter>;

export default meta;

export const ExampleCartFooter: StoryObj<typeof CartFooter> = {
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
        story: '기본으로 사용되는 default CartFooter입니다.',
      },
    },
  },
  render: (args) => {
    const handleReservation = () => {};

    return (
      <CartFooter
        totalPrice={args.totalPrice}
        selectedItemsLength={args.selectedItemsLength}
        handleReservation={handleReservation}></CartFooter>
    );
  },
};
