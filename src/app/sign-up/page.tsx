'use client';

import React from 'react';
import styles from './signUp.module.scss';
import Button from '@/components/button';
import Text from '@/components/text';
import { useRouter } from 'next/navigation';

function Cart() {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Text color="black" fontSize="xl" fontWeight="thin">
            LOGO
          </Text>
        </div>
        <div className={styles.form}>
          <Text color="primary" fontSize="xl" fontWeight="medium">
            회원가입
          </Text>
          <div className={styles.inputBox}>
            <input type="text" placeholder="이메일" />
            <Button size="sm">
              <Text color="gray100" fontSize="xs-5" fontWeight="medium">
                중복 확인
              </Text>
            </Button>
            <label htmlFor="">이메일 상태 모시깽이</label>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="비밀번호" />
            <label htmlFor="">비밀번호 상태 모시깽이</label>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="비밀번호 확인" />
            <label htmlFor="">비밀번호 확인 상태 모시깽이</label>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="이름" />
            <label htmlFor="">이메일 상태 모시깽이</label>
          </div>
          <div className={styles.confirm}>
            <Button size="lg">
              <Text color="gray100" fontSize="xs-2" fontWeight="medium">
                가입하기
              </Text>
            </Button>
          </div>
          <div>
            <Button variant="text" onClick={() => router.push('/sign-in')}>
              <Text fontSize="xs" fontWeight="normal">
                이미 회원이신가요??
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
