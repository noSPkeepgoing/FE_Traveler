import type { Meta, StoryObj } from '@storybook/react';
import CartLayout from '../../layout';
import CartTitle from '.';

const meta = {
  title: 'cart/CartTitle',
  component: CartTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle: 'Cart page에서 title 컴포넌트입니다',
  },
} satisfies Meta<typeof CartTitle>;

export default meta;

export const ExampleCartTitle: StoryObj<typeof CartTitle> = {
  decorators: [
    (Story) => (
      <CartLayout>
        <Story />
      </CartLayout>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 default CartTitle입니다.',
      },
    },
  },
  render: () => {
    return <CartTitle />;
  },
};
