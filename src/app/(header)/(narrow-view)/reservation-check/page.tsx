'use client';

import Button from '@/components/atoms/button/index';
import React from 'react';
import styles from './reservationCheck.module.scss';
import Input from '@/components/atoms/input/index';
import Checkbox from '@/components/atoms/checkbox';
import Text from '@/components/atoms/text';
import { useRouter } from 'next/navigation';
import Subtitles from './_components/subtitles';
import SubtitlesContent from './_components/subtitles-content';
import checkmark from './checkmark.svg';
import Image from 'next/image';

const data = [
  {
    item_name: 'item name',
    total_price: 278000,
    purchase_date: '2023.12.04',
  },
];

function ReservationCheck() {
  const router = useRouter();

  return (
    <>
      <main className={styles.mainContent}>
        <Image src={checkmark} alt="Checkmark" width={100} height={100} />
        <Text fontSize="xl" fontWeight="semibold" color="primary">
          감사합니다
        </Text>
        <Text fontSize="md" fontWeight="normal" color="primary">
          주문이 성공적으로 완료되었습니다
        </Text>

        <div className={styles.leftContent}>
          <Subtitles text="상품명" />
          <SubtitlesContent text="상품명 외 1건" />
          <Subtitles text="결제 금액" />
          <SubtitlesContent text="결제 금액 278000원" />
          <Subtitles text="결제 날짜" />
          <SubtitlesContent text="결제 금액 278000원" />
        </div>

        <Button
          variant="default"
          size="xl"
          onClick={() => router.push('/reservation-check')}>
          <Text fontSize="xs" fontWeight="normal" color="white">
            확인
          </Text>
        </Button>
      </main>
    </>
  );
}

export default ReservationCheck;
