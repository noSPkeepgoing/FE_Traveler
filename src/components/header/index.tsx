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
    <div className={styles.body}>
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
              <a className={`${styles.buttons} ${styles.child}`} href="/main">
                로그아웃
              </a>
              <a
                className={`${styles.buttons} ${styles.child}`}
                href="/reservation-list">
                장바구니
              </a>
              <a
                className={`${styles.buttons} ${styles.child}`}
                href="/reservation-check">
                주문내역
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default header;
