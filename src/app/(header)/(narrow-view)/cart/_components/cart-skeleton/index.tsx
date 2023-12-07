import Skeleton from '@/components/layouts/skeleton';
import React from 'react';
import styles from '../cart-item/cartItem.module.scss';
import { VscChromeClose } from 'react-icons/vsc';

function CartSkeleton() {
  return (
    <div className={styles.cartItem}>
      <Skeleton width={20} height={20} borderRadius={0} />
      <div className={styles.itemInfo}>
        <Skeleton width={300} height={20} borderRadius={4} />
        <div className={styles.imageInfo}>
          <Skeleton width={80} height={80} borderRadius={8} />
          <div className={styles.detailInfo}>
            <Skeleton width={100} height={10} borderRadius={4} />
            <Skeleton width={100} height={10} borderRadius={4} />
          </div>
        </div>
      </div>
      <div className={styles.subCartInfo}>
        <VscChromeClose size="16" />
        <div>
          <Skeleton width={150} height={20} borderRadius={4} />
        </div>
      </div>
    </div>
  );
}

export default CartSkeleton;
