import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../../../layout';
import ReservationListTitle from './page';

const meta = {
  title: 'reservation-list/ReservationTitle',
  component: ReservationListTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle: 'Reservation List page에서 title 컴포넌트입니다',
  },
} satisfies Meta<typeof ReservationListTitle>;

export default meta;

export const ExampleReservationListTitle: StoryObj<
  typeof ReservationListTitle
> = {
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
        story: '기본으로 사용되는 default Reservation List Title입니다.',
      },
    },
  },
  render: () => {
    return <ReservationListTitle />;
  },
};
