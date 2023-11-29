'use client';
import React from 'react';
import styles from './signInForm.module.scss';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { TSignIn } from './signInType';

function SignInForm() {
  // api 전달 함수
  const signInSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    formData: TSignIn,
  ) => {
    event.preventDefault();
    // 폼 제출(submit) 이벤트 발생 시 실행할 api가 들어갈 자리
  };

  return (
    <form action="/v1/member/login" method="post">
      <div className={styles.form}>
        <div className={styles.info}>
          <Text color="primary" fontSize="xl" fontWeight="medium">
            로그인
          </Text>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <input type="email" placeholder="이메일" name="email" />
            <label className={styles.label} htmlFor="">
              이메일 상태 모시깽이
            </label>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <input type="password" placeholder="비밀번호" name="password" />
            <label htmlFor="">비밀번호 상태 모시깽이</label>
          </div>
        </div>
        <div className={styles.confirm}>
          <Button size="lg">
            <Text color="gray100" fontSize="xs-2" fontWeight="medium">
              로그인
            </Text>
          </Button>
        </div>
        <div className={styles.signInBtn}>
          <Button type="button" variant="text" href="/sign-up">
            <Text fontSize="xs-3" fontWeight="bold">
              아직 회원이 아니신가요?
            </Text>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignInForm;
