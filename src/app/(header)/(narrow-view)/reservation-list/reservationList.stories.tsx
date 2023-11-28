import type { StoryObj } from '@storybook/react';
import Layout from '../layout';
import ReservationListTitle from './_components/reservation-list-title/page';
import ReservationItem from './_components/reservation-item/page';
import styles from './reservationList.module.scss';

const meta = {
  title: 'reservation-list/ReservationList',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Reservation List page에 사용되는 컴포넌트를 조합하는 컨테이너입니다 ',
  },
};

export default meta;

export const ExampleReservationList: StoryObj = {
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
    return (
      <>
        <ReservationListTitle />
        <section className={styles.reservationItemContainer}>
          <ReservationItem />
        </section>
      </>
    );
  },
};
