'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './signUpForm.module.scss';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { TSignUp } from './signUpType';
import { SIGN_API } from '@api/signUp';

function SignUpForm() {
  // const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userData: TSignUp = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      name: formData.get('name') as string,
    };

    try {
      console.log(userData);
      const { code, data } = await SIGN_API.userSignUp(userData);
      console.log({ code, data });
      // 응답 코드에 따른 처리
      switch (code) {
        case 1003: // 회원가입 성공
          console.log(code, data.message);
          break;
        case 1004: // 이메일 형식 오류
          console.log(code, data.message);
          break;
        case 1005: // 비밀번호 형식 오류
          console.log(code, data.message);
          break;
        default:
          console.log('알 수 없는 오류가 발생했습니다.');
          break;
      }
    } catch (error) {
      console.log('회원가입에 실패했습니다..!');
      console.error(error);
    }
  };

  const sayHello = () => {
    return console.log('hello');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <div className={styles.info}>
          <Text color="primary" fontSize="xl" fontWeight="medium">
            회원가입
          </Text>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.inputContainer}>
            <input type="email" placeholder="이메일" name="email" />
            <Button size="sm" type="Link" onClick={sayHello}>
              <Text color="gray100" fontSize="xs-4" fontWeight="medium">
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
          <Button type="Link" variant="text" href="/sign-in">
            <Text fontSize="xs-3" fontWeight="bold">
              이미 회원이신가요??
            </Text>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
