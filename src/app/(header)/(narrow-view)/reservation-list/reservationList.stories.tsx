import type { StoryObj } from '@storybook/react';
import Layout from '../layout';
import ReservationListTitle from './_components/reservation-list-title/page';
import ReservationItem from './_components/reservation-item/page';
import styles from './reservationList.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

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
    const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6]);
    const fetchMoreData = () => {
      // 새로운 데이터를 가져와서 state 업데이트
      setItems((prev) => [...prev, 0, 1, 2, 3, 4, 5, 6]);
    };

    return (
      <>
        <ReservationListTitle />
        <InfiniteScroll
          dataLength={items.length}
          scrollThreshold={0.95}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
          <section className={styles.reservationItemContainer}>
            {items.map((_, index) => (
              <ReservationItem key={index} />
            ))}
          </section>
        </InfiniteScroll>
      </>
    );
  },
};
