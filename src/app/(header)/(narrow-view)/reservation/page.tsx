'use client';

import Button from '@/components/atoms/button/index';
import React from 'react';
import styles from './reservation.module.scss';
import Input from '@/components/atoms/input/index';
import Checkbox from '@/components/atoms/checkbox';
import Text from '@/components/atoms/text';
import { useRouter } from 'next/navigation';
import { TReservation } from './reservationType';
import ReservationItem from './reservation-item/index';

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
    accommodation_img: 'https://avatars.githubusercontent.com/u/81469686?v=4',
  },
];

function Reservation() {
  const router = useRouter();

  const signUpSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    formData: TReservation,
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.parts}>
          <Text fontSize="md" fontWeight="normal">
            상품 정보
          </Text>
          <div className={styles.grayLine}></div>
          <Text fontSize="xs" fontWeight="normal">
            숙소
          </Text>
          {/* {data.map((item) => (
          <ReservationItem
            data={item}
          />
        ))} */}
        </div>

        <div className={styles.parts}>
          <div className={styles.container}>
            {/* <Text fontSize='md' color='black' /> */}
            <Text fontSize="md" fontWeight="normal">
              예약자 정보
            </Text>
            <div className={styles.container}>
              <div className={styles.booker}>예약자</div>
              <div className={styles.booker}>이메일</div>
            </div>
          </div>
        </div>

        <div className={styles.parts}>
          <div className={styles.container}>
            {/* <Text fontSize='md' color='black' /> */}
            <Text fontSize="md" fontWeight="normal">
              대표자 정보
            </Text>
            <div className={styles.container}>
              대표자 <Input variant="signRegular" placeholder="홍길동" />
              이메일 <Input variant="reservation" placeholder="abc@naver.com" />
            </div>
          </div>
        </div>

        <div className={styles.parts}>
          <Text fontSize="md" fontWeight="normal">
            결제 정보
          </Text>
          <div className={styles.grayLine}></div>
          <div className={styles.totalPrice}>
            <div>총 결제 금액</div>
            <div>270000원</div>
          </div>
        </div>

        <div className={styles.parts}>
          {/* <Checkbox onChange={} isChecked={}/> */}
          <Text fontSize="md" fontWeight="normal">
            필수약관 동의
          </Text>
        </div>

        <div className={styles.parts}>
          <Button
            variant="default"
            size="xl"
            onClick={() => router.push('/main')}>
            <Text fontSize="xs" fontWeight="normal" color="white">
              결제하기
            </Text>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Reservation;
