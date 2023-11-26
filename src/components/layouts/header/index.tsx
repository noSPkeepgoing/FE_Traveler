'use client';

import { useRouter } from 'next/navigation';
import styles from './header.module.scss';
import classNames from 'classnames';
import React from 'react';
import Button from '../../atoms/button';
import Text from '../../atoms/text';
import { THeader } from './headerType';

function Header({ border = true }: THeader) {
  const containerClassName = classNames(styles.container, {
    [styles.border]: border,
  });

  const isOnline = false;
  const router = useRouter();

  return (
    <div className={containerClassName}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Button variant="text" onClick={() => router.push('/main')}>
            <Text fontSize="xl" fontWeight="thin">
              LOGO
            </Text>
          </Button>
        </div>
        <div className={styles.buttons}>
          {!isOnline ? (
            <>
              <div className={`${styles.buttons} ${styles.child}`}>
                <Button variant="text" onClick={() => router.push('/sign-in')}>
                  <Text fontSize="xs-2" fontWeight="semibold">
                    로그인
                  </Text>
                </Button>
              </div>
              <div className={`${styles.buttons} ${styles.child}`}>
                <Button variant="text" onClick={() => router.push('/sign-up')}>
                  <Text fontSize="xs-2" fontWeight="semibold">
                    회원가입
                  </Text>
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className={`${styles.buttons} ${styles.child}`}>
                <Button variant="text" onClick={() => router.push('/sign-in')}>
                  <Text fontSize="xs-2" fontWeight="semibold">
                    로그아웃
                  </Text>
                </Button>
              </div>
              <div className={`${styles.buttons} ${styles.child}`}>
                <Button variant="text" onClick={() => router.push('/cart')}>
                  <Text fontSize="xs-2" fontWeight="semibold">
                    장바구니
                  </Text>
                </Button>
              </div>
              <div className={`${styles.buttons} ${styles.child}`}>
                <Button
                  variant="text"
                  onClick={() => router.push('/reservation-list')}>
                  <Text fontSize="xs-2" fontWeight="semibold">
                    주문내역
                  </Text>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
