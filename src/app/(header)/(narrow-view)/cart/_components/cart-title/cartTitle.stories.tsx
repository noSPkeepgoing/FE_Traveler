import type { Meta, StoryObj } from '@storybook/react';
import CartTitle from '.';
import Layout from '../../../layout';

const meta = {
  title: 'cart/CartTitle',
  component: CartTitle,
  parameters: {
    componentSubtitle: 'Cart page에서 title 컴포넌트입니다',
  },
} satisfies Meta<typeof CartTitle>;

export default meta;

export const ExampleCartTitle: StoryObj<typeof CartTitle> = {
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
        story: '기본으로 사용되는 default CartTitle입니다.',
      },
    },
  },
  render: () => {
    return <CartTitle />;
  },
};
