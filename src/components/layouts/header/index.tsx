'use client';

import { useRouter } from 'next/navigation';
import styles from './header.module.scss';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Button from '../../atoms/button';
import Text from '../../atoms/text';
import { THeader } from './headerType';
import { instance } from '@/api';

function Header({ border = true }: THeader) {
  const router = useRouter();

  const [isOnline, setIsOnline] = useState(false);

  const containerClassName = classNames(styles.container, {
    [styles.border]: border,
  });

  const signOutHandler = async () => {
    try {
      const accessToken = sessionStorage.getItem('accessToken');
      if (accessToken) {
        const shouldLogout = window.confirm('로그아웃 하시겠습니까?');
        if (shouldLogout) {
          const headers = { Authorization: `Bearer ${accessToken}` };
          await instance.post<Response>('v1/member/logout', {}, { headers });

          sessionStorage.removeItem('accessToken');
          sessionStorage.removeItem('refreshToken');
          setIsOnline(false);
          router.push('/main');
        }
      }
    } catch (error) {
      throw new Error('로그아웃 실패.');
    }
  };

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      setIsOnline(true);
      console.log('로그인');
    } else {
      setIsOnline(false);
      console.log('로그아웃');
    }
  }, []);

  return (
    <div className={containerClassName}>
      <div className={styles.inner}>
        <div className={styles.logo} onClick={() => router.push('/main')}>
          <Text fontSize="xl" fontWeight="thin">
            Traveler
          </Text>
        </div>
        <div className={styles.buttons}>
          {!isOnline ? (
            <>
              <div className={`${styles.buttons} ${styles.child}`}>
                <Button variant="text" size="sm" href="/sign-in">
                  <Text fontSize="xs-2" fontWeight="semibold">
                    로그인
                  </Text>
                </Button>
              </div>
              <div className={`${styles.buttons} ${styles.child}`}>
                <Button variant="text" size="sm" href="/sign-up">
                  <Text fontSize="xs-2" fontWeight="semibold">
                    회원가입
                  </Text>
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className={`${styles.buttons} ${styles.child}`}>
                <Button variant="text" size="sm" onClick={signOutHandler}>
                  <Text fontSize="xs-2" fontWeight="semibold">
                    로그아웃
                  </Text>
                </Button>
              </div>
              <div className={`${styles.buttons} ${styles.child}`}>
                <Button variant="text" size="sm" href="/cart">
                  <Text fontSize="xs-2" fontWeight="semibold">
                    장바구니
                  </Text>
                </Button>
              </div>
              <div className={`${styles.buttons} ${styles.child}`}>
                <Button variant="text" size="sm" href="/reservation-list">
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
