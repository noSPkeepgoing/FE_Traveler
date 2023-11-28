'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './signUpForm.module.scss';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { TSignUp } from './signUpType';
import { SIGN_API } from '@api/signUp';
import { RESPONSE_CODE } from '@constants/api';

function SignUpForm() {
  // const [message, setMessage] = useState('');

  /* -------------------- 회원가입 submit 핸들러 함수 --------------------*/

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userData: TSignUp = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      name: formData.get('name') as string,
    };

    const code = await SIGN_API.userSignUp(userData); // 회원가입 API 호출

    // 응답 코드에 따른 처리
    switch (code) {
      case RESPONSE_CODE.SIGNUP_SUCCESS: // 회원가입 성공
        alert('회원 가입에 성공했습니다. 가입한 아이디로 로그인해주세요.');
        window.location.href = '/sign-in';
        break;
      case RESPONSE_CODE.INVALID_EMAIL: // 이메일 형식 오류
        alert('올바르지 않은 이메일 형식입니다.');
        break;
      case RESPONSE_CODE.INVALID_PASSWORD: // 비밀번호 형식 오류
        alert('비밀번호는 영문자와 숫자로 조합해야 합니다.');
        break;
      case RESPONSE_CODE.DUPLICATE_EMAIL:
        alert('이미 사용중인 이메일입니다.');
        break;
      default:
        alert('회원 가입에 실패했습니다.');
        break;
    }
  };

  /* -------------------- 이메일 중복확인 핸들러 함수 -------------------- */

  const checkEmailValid = async () => {
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement as HTMLFormElement);
    const email = formData.get('email') as string;

    // 이메일 형식 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('유효하지 않은 이메일 형식입니다.');
      return;
    }

    // 이메일 중복체크 API 호출
    const code = await SIGN_API.emailCheck(email);

    // 응답에 따른 처리
    switch (code) {
      case RESPONSE_CODE.VALID_EMAIL: // 이메일 사용 가능
        alert('사용 가능한 이메일입니다.');
        break;
      case RESPONSE_CODE.DUPLICATE_EMAIL: // 이메일 중복
        alert('이미 사용중인 이메일입니다.');
        break;
      case RESPONSE_CODE.INVALID_FORMAT:
        alert('올바르지 않은 이메일 형식입니다.');
        break;
    }
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
            <Button size="sm" type="button" onClick={checkEmailValid}>
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
          <Button size="lg" type="submit">
            <Text color="gray100" fontSize="xs-2" fontWeight="medium">
              가입하기
            </Text>
          </Button>
        </div>
        <div className={styles.signInBtn}>
          <Button type="button" variant="text" href="/sign-in">
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
