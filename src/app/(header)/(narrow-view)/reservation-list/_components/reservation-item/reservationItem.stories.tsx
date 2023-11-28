import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../../../layout';
import ReservationItem from './page';

const meta = {
  title: 'reservation-list/ReservationItem',
  component: ReservationItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle: 'Reservation List page에서 title 컴포넌트입니다',
  },
} satisfies Meta<typeof ReservationItem>;

export default meta;

export const ExampleReservationItem: StoryObj<typeof ReservationItem> = {
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
        story: '기본으로 사용되는 default Reservation Item 입니다.',
      },
    },
  },
  render: () => {
    return <ReservationItem />;
  },
};
