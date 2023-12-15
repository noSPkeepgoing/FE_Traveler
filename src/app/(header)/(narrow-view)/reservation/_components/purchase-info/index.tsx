import React from 'react';
import Text from '@/components/atoms/text';
import styles from '../../reservation.module.scss';

interface PurchaseInfoProps {
  price: string;
}

function PurchaseInfo({ price }: PurchaseInfoProps) {
  return (
    <div>
      <Text fontSize="md" fontWeight="bold">
        결제 정보
      </Text>
      <div className={styles.grayLine}></div>
      <div className={styles.totalPrice}>
        <Text fontSize="sm" fontWeight="medium" color="primary">
          총 결제 금액
        </Text>
        <Text fontSize="sm" fontWeight="medium" color="highlight">
          {`${price}원`}
        </Text>
      </div>
    </div>
  );
}

export default PurchaseInfo;
