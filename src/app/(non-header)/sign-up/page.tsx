'use client';

import React from 'react';
import styles from './signUp.module.scss';
import Button from '@/components/atoms/button';
import Text from '@/components/atoms/text';
import Footer from '@/components/layouts/footer';
import { useRouter } from 'next/navigation';
import { TSignUpType } from './signUpType';

function SignUpPage() {
  const router = useRouter();

  // api 전달 함수
  const signUpSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    formData: TSignUpType,
  ) => {
    event.preventDefault();
    // 폼 제출(submit) 이벤트 발생 시 실행할 api가 들어갈 자리
  };

  // form 제출 시 유효성 검사용 함수
  // const MyFormComponent: React.FC = () => {
  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     // 이벤트 핸들러에서 폼 데이터를 수집하거나 사용할 수 있도록 로직 추가
  //     const formData: TSignUpType = {
  //       email: 'user@example.com',
  //       password: '1q2w3e4r!',
  //       name: '박준규',
  //     };

  //     signUpSubmit(event, formData);
  //   };
  // };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Text color="black" fontSize="xl" fontWeight="thin">
            LOGO
          </Text>
        </div>
        <div className={styles.form}>
          <div className={styles.info}>
            <Text color="primary" fontSize="xl" fontWeight="medium">
              회원가입
            </Text>
          </div>
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
          <div className={styles.inputContainer}>
            <div className={styles.inputBox}>
              <input type="password" placeholder="비밀번호" name="password" />
              <label htmlFor="">비밀번호 상태 모시깽이</label>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputBox}>
              <input
                type="password"
                placeholder="비밀번호 확인"
                name="passwordCheck"
              />
              <label htmlFor="">비밀번호 확인 상태 모시깽이</label>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputBox}>
              <input type="text" placeholder="이름" name="name" />
              <label htmlFor="">이름 상태 모시깽이</label>
            </div>
          </div>
          <div className={styles.confirm}>
            <Button size="lg">
              <Text color="gray100" fontSize="xs-2" fontWeight="medium">
                가입하기
              </Text>
            </Button>
          </div>
          <div className={styles.signInBtn}>
            <Button variant="text" onClick={() => router.push('/sign-in')}>
              <Text fontSize="xs-3" fontWeight="bold">
                이미 회원이신가요??
              </Text>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
