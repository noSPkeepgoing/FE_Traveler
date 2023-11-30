'use client';

import Button from '@/components/atoms/button/index';
import React from 'react';
import styles from './reservationCheck.module.scss';
import Text from '@/components/atoms/text';
import Subtitles from './_components/subtitles';
import SubtitlesContent from './_components/subtitles-content';
import checkmark from './checkmark.svg';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { successProductsState } from '@/recoil/successProducts';
import Swal from 'sweetalert2';

function ReservationCheck() {
  const successProduct = useRecoilValue(successProductsState);
  const isReserved = !(successProduct.total_accommodation_num === 0);

  if (!isReserved) {
    Swal.fire('상품이 존재하지 않습니다');
    window.history.back();
  }
  const accommodation_name =
    successProduct.total_accommodation_num > 1
      ? `${successProduct.representative_accommodation_name} 외 ${
          successProduct.total_accommodation_num - 1
        }건`
      : `${successProduct.representative_accommodation_name}`;

  const date = new Date();
  const order_date = date.toLocaleDateString();
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
          <SubtitlesContent text={accommodation_name} />
          <Subtitles text="결제 금액" />
          <SubtitlesContent text={`${successProduct.total_price}원`} />
          <Subtitles text="결제 날짜" />
          <SubtitlesContent text={order_date} />
        </div>

        <Button variant="default" size="xl" href="/">
          <Text fontSize="xs" fontWeight="normal" color="white">
            확인
          </Text>
        </Button>
      </main>
    </>
  );
}

export default ReservationCheck;
