'use client';

import Button from '@/components/atoms/button/index';
import React from 'react';
import styles from './reservation.module.scss';
import Text from '@/components/atoms/text';
import { useRouter } from 'next/navigation';
import { TReservation } from './reservationType';
import Input from '@/components/atoms/input/index';

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
        <div className={styles.reservationCard}>
          <div className={styles.itemDetails}>
            RIHGA Royal Laguna Guam Resort(리가 로얄 라구나 괌 리조트)
            <div>2023.12.04(월) - 2023.12.05(화) / 29</div>
          </div>
          <div className={styles.itemPrice}>139000원</div>
        </div>

        <div className={styles.container}>
          <label className={styles.labels} htmlFor="input">
            대표자 정보
          </label>
          <div>
            대표자 <Input variant="reservation" placeholder="abc@naver.com" />
          </div>
        </div>

        <div className={styles.totalPrice}>
          <div>총 결제 금액</div>
          <div>270000원</div>
        </div>

        <Button
          variant="text"
          onClick={() => router.push('/reservation-check')}>
          <Text fontSize="xs" fontWeight="normal">
            예약하기
          </Text>
        </Button>
      </div>
    </>
  );
}

export default Reservation;
