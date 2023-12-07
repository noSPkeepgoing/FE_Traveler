'use client';

import Button from '@/components/atoms/button/index';
import React from 'react';
import styles from './reservationCheck.module.scss';
import Text from '@/components/atoms/text';
import DetailTitles from './_components/detail-titles';
import DetailContents from './_components/detail-contents';
import checkmark from './checkmark.svg';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { successProductsState } from '@/recoil/successProducts';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

function ReservationCheck() {
  const successProduct = useRecoilValue(successProductsState);
  const isReserved = successProduct.total_accommodation_num !== 0;

  if (!isReserved && typeof window !== 'undefined') {
    Swal.fire('상품이 존재하지 않습니다');
    const router = useRouter();
    router.push('/main');
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
      </main>

      <div className={styles.leftContent}>
        <DetailTitles text="상품명" />
        <DetailContents text={accommodation_name} />
        <DetailTitles text="결제 금액" />
        <DetailContents
          text={`${successProduct.total_price.toLocaleString()}원`}
        />
        <DetailTitles text="결제 날짜" />
        <DetailContents text={order_date} />
      </div>

      <main className={styles.mainContent}>
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
