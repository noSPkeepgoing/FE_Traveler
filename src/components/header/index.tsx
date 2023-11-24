'use client';

import { useRouter } from 'next/navigation';
import styles from './header.module.scss';
import React from 'react';
import Button from '../button';
import Text from '../text';

function header() {
  const isOnline = false;
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.buttons}>
        {!isOnline ? (
          <>
            <div className={`${styles.buttons} ${styles.child}`}>
              <Button variant="text" onClick={() => router.push('/sign-in')}>
                <Text fontSize="xs" fontWeight="normal">
                  로그인
                </Text>
              </Button>
            </div>
            <div className={`${styles.buttons} ${styles.child}`}>
              <Button variant="text" onClick={() => router.push('/sign-up')}>
                <Text fontSize="xs" fontWeight="normal">
                  회원가입
                </Text>
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.buttons} ${styles.child}`}>
              <Button variant="text" onClick={() => router.push('/sign-in')}>
                <Text fontSize="xs" fontWeight="normal">
                  로그아웃
                </Text>
              </Button>
            </div>
            <div className={`${styles.buttons} ${styles.child}`}>
              <Button variant="text" onClick={() => router.push('/cart')}>
                <Text fontSize="xs" fontWeight="normal">
                  장바구니
                </Text>
              </Button>
            </div>
            <div className={`${styles.buttons} ${styles.child}`}>
              <Button
                variant="text"
                onClick={() => router.push('/reservation-list')}>
                <Text fontSize="xs" fontWeight="normal">
                  주문내역
                </Text>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default header;
