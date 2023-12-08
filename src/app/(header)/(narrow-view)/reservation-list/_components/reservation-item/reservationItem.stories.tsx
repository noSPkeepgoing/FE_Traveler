import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../../../layout';
import ReservationItem from './page';

const meta = {
  title: 'reservation-list/ReservationItem',
  component: ReservationItem,
  parameters: {
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
    const item = {
      order_date: '2023-11-29',
      accommodation_id: 104,
      accommodation_name: '킨텍스 바이 케이트리',
      accommodation_img:
        'http://tong.visitkorea.or.kr/cms/resource/12/2872912_image2_1.jpeg',
      people_number: 2,
      start_date: '2023-12-03',
      end_date: '2023-12-04',
      representative_name: '홍길동',
      order_price: 440000,
    };
    return <ReservationItem item={item} />;
  },
};
