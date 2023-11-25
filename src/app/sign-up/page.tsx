'use client';

import React from 'react';
import styles from './signUp.module.scss';
import Button from '@/components/button';
import Text from '@/components/text';
import { useRouter } from 'next/navigation';

interface signUpType {
  email: string;
  password: string;
  passwordConfirm?: string;
  name: string;
}

function SignUp() {
  const router = useRouter();

  // api 전달 함수
  const signUpSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    formData: signUpType,
  ) => {
    event.preventDefault();
    // 폼 제출(submit) 이벤트 발생 시 실행할 api가 들어갈 자리
  };

  // form 제출 시 유효성 검사용 함수
  const MyFormComponent: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      // 이벤트 핸들러에서 폼 데이터를 수집하거나 사용할 수 있도록 로직 추가
      const formData: signUpType = {
        email: 'user@example.com',
        password: '1q2w3e4r!',
        name: '박준규',
      };

      signUpSubmit(event, formData);
    };
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
              <div className={styles.inputContainer}>
                <input type="email" placeholder="이메일" name="email" />
                <Button size="sm">
                  <Text color="gray100" fontSize="xs-5" fontWeight="medium">
                    중복 확인
                  </Text>
                </Button>
              </div>
              <label className={styles.label} htmlFor="">
                이메일 상태 모시깽이
              </label>
            </div>
            <div className={styles.inputContainer}></div>
            <div className={styles.inputBox}>
              <input type="password" placeholder="비밀번호" name="password" />
              <label htmlFor="">비밀번호 상태 모시깽이</label>
            </div>
            <div className={styles.inputBox}>
              <input
                type="password"
                placeholder="비밀번호 확인"
                name="passwordCheck"
              />
              <label htmlFor="">비밀번호 확인 상태 모시깽이</label>
            </div>
            <div className={styles.inputBox}>
              <input type="text" placeholder="이름" name="name" />
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
        <div className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerChild}>
              <Text color="black" fontSize="xl" fontWeight="thin">
                LOGO
              </Text>
            </div>
            <div className={styles.footerChild}>
              <Text color="sub" fontSize="xs-5" fontWeight="normal">
                Copyright
              </Text>
            </div>
            <div className={styles.footerChild}>
              <Text color="black" fontSize="xs-4" fontWeight="bold">
                © LOGO Corp.
              </Text>
            </div>
            <div className={styles.footerChild}>
              <Text color="sub" fontSize="xs-4" fontWeight="normal">
                All Rights Reserved.
              </Text>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default SignUp;
