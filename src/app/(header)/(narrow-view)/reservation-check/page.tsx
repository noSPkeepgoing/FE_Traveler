'use client';

import Button from '@/components/atoms/button/index';
import React from 'react';
import styles from './reservationCheck.module.scss';
import Input from '@/components/atoms/input/index';
import Checkbox from '@/components/atoms/checkbox';
import Text from '@/components/atoms/text';
import { useRouter } from 'next/navigation';

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
      <main className="main-content">
        <div className="confirmation-icon">✔</div>
        <h1 className="confirmation-title">감사합니다</h1>
        <p className="confirmation-message">주문이 성공적으로 완료되었습니다</p>

        <div className="order-details">
          <div className="order-item">상품명 외 1건</div>
          <div className="order-price">결제 금액 278000원</div>
          <div className="order-date">결제 날짜 2023.11.21</div>
        </div>

        <Button>확인</Button>
      </main>
    </>
  );
}

export default ReservationCheck;
