import type { StoryObj } from '@storybook/react';
import Layout from '../layout';
import ReservationListTitle from './_components/reservation-list-title/page';
import ReservationItem from './_components/reservation-item/page';
import styles from './reservationList.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const meta = {
  title: 'reservation-list/ReservationList',
  parameters: {
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
    const [items, setItems] = useState([
      {
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
      },
      {
        order_date: '2023-11-29',
        accommodation_id: 103,
        accommodation_name: '라마다앙코르 바이윈덤 김포한강호텔',
        accommodation_img:
          'http://tong.visitkorea.or.kr/cms/resource/76/2874676_image2_1.jpg',
        people_number: 2,
        start_date: '2023-12-03',
        end_date: '2023-12-04',
        representative_name: '홍길동',
        order_price: 280000,
      },
      {
        order_date: '2023-11-29',
        accommodation_id: 102,
        accommodation_name: '호텔M-Tower',
        accommodation_img:
          'http://tong.visitkorea.or.kr/cms/resource/05/2874705_image2_1.jpg',
        people_number: 2,
        start_date: '2023-12-03',
        end_date: '2023-12-04',
        representative_name: '홍길동',
        order_price: 60000,
      },
      {
        order_date: '2023-11-29',
        accommodation_id: 101,
        accommodation_name: '호텔오로라',
        accommodation_img:
          'http://tong.visitkorea.or.kr/cms/resource/36/2874836_image2_1.jpg',
        people_number: 2,
        start_date: '2023-12-03',
        end_date: '2023-12-04',
        representative_name: '홍길동',
        order_price: 70000,
      },
      {
        order_date: '2023-11-29',
        accommodation_id: 100,
        accommodation_name: '저스트슬립호텔 김포구래1호점',
        accommodation_img:
          'http://tong.visitkorea.or.kr/cms/resource/83/2874883_image2_1.jpg',
        people_number: 2,
        start_date: '2023-12-03',
        end_date: '2023-12-04',
        representative_name: '홍길동',
        order_price: 50000,
      },
      {
        order_date: '2023-11-29',
        accommodation_id: 99,
        accommodation_name: '호텔 라르 김포',
        accommodation_img:
          'http://tong.visitkorea.or.kr/cms/resource/04/2874904_image2_1.jpg',
        people_number: 2,
        start_date: '2023-12-03',
        end_date: '2023-12-04',
        representative_name: '홍길동',
        order_price: 700000,
      },
      {
        order_date: '2023-11-29',
        accommodation_id: 96,
        accommodation_name: '루브호텔',
        accommodation_img:
          'http://tong.visitkorea.or.kr/cms/resource/91/2877391_image2_1.jpg',
        people_number: 2,
        start_date: '2023-12-03',
        end_date: '2023-12-04',
        representative_name: '홍길동',
        order_price: 40000,
      },
      {
        order_date: '2023-11-29',
        accommodation_id: 95,
        accommodation_name: '라인플러스호텔',
        accommodation_img:
          'http://tong.visitkorea.or.kr/cms/resource/25/2877425_image2_1.jpg',
        people_number: 2,
        start_date: '2023-12-03',
        end_date: '2023-12-04',
        representative_name: '홍길동',
        order_price: 60000,
      },
    ]);
    const fetchMoreData = () => {
      setItems((prev) => [
        ...prev,
        ...[
          {
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
          },
          {
            order_date: '2023-11-29',
            accommodation_id: 103,
            accommodation_name: '라마다앙코르 바이윈덤 김포한강호텔',
            accommodation_img:
              'http://tong.visitkorea.or.kr/cms/resource/76/2874676_image2_1.jpg',
            people_number: 2,
            start_date: '2023-12-03',
            end_date: '2023-12-04',
            representative_name: '홍길동',
            order_price: 280000,
          },
          {
            order_date: '2023-11-29',
            accommodation_id: 102,
            accommodation_name: '호텔M-Tower',
            accommodation_img:
              'http://tong.visitkorea.or.kr/cms/resource/05/2874705_image2_1.jpg',
            people_number: 2,
            start_date: '2023-12-03',
            end_date: '2023-12-04',
            representative_name: '홍길동',
            order_price: 60000,
          },
          {
            order_date: '2023-11-29',
            accommodation_id: 101,
            accommodation_name: '호텔오로라',
            accommodation_img:
              'http://tong.visitkorea.or.kr/cms/resource/36/2874836_image2_1.jpg',
            people_number: 2,
            start_date: '2023-12-03',
            end_date: '2023-12-04',
            representative_name: '홍길동',
            order_price: 70000,
          },
          {
            order_date: '2023-11-29',
            accommodation_id: 100,
            accommodation_name: '저스트슬립호텔 김포구래1호점',
            accommodation_img:
              'http://tong.visitkorea.or.kr/cms/resource/83/2874883_image2_1.jpg',
            people_number: 2,
            start_date: '2023-12-03',
            end_date: '2023-12-04',
            representative_name: '홍길동',
            order_price: 50000,
          },
          {
            order_date: '2023-11-29',
            accommodation_id: 99,
            accommodation_name: '호텔 라르 김포',
            accommodation_img:
              'http://tong.visitkorea.or.kr/cms/resource/04/2874904_image2_1.jpg',
            people_number: 2,
            start_date: '2023-12-03',
            end_date: '2023-12-04',
            representative_name: '홍길동',
            order_price: 700000,
          },
          {
            order_date: '2023-11-29',
            accommodation_id: 96,
            accommodation_name: '루브호텔',
            accommodation_img:
              'http://tong.visitkorea.or.kr/cms/resource/91/2877391_image2_1.jpg',
            people_number: 2,
            start_date: '2023-12-03',
            end_date: '2023-12-04',
            representative_name: '홍길동',
            order_price: 40000,
          },
          {
            order_date: '2023-11-29',
            accommodation_id: 95,
            accommodation_name: '라인플러스호텔',
            accommodation_img:
              'http://tong.visitkorea.or.kr/cms/resource/25/2877425_image2_1.jpg',
            people_number: 2,
            start_date: '2023-12-03',
            end_date: '2023-12-04',
            representative_name: '홍길동',
            order_price: 60000,
          },
        ],
      ]);
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
            {items.map((item, index) => (
              <ReservationItem key={index} item={item} />
            ))}
          </section>
        </InfiniteScroll>
      </>
    );
  },
};
