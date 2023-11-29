'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import styles from './signUpForm.module.scss';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { TSignUp } from './signUpType';
import Input from '@/components/atoms/input';
import { SIGN_API } from '@api/signUp';
import { RESPONSE_CODE } from '@constants/api';
import { isAxiosError } from 'axios';
import { Response } from '@/api/type';

function SignUpForm() {
  // 이메일 중복확인 버튼 활성화용 state
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  // 각 Input 라벨 메세지용 state
  const [emailMessage, setEmailMessage] = useState({
    message: '',
    error: false,
  });
  const [passwordMessage, setPasswordMessage] = useState({
    message: '',
    error: false,
  });
  const [passwordCheckMessage, setPasswordCheckMessage] = useState({
    message: '',
    error: false,
  });
  const [nameMessage, setNameMessage] = useState({ message: '', error: false });

  // 각 상태관리 함수 메세지값 전달용 함수
  const setMessageAndHideAfterDelay = (
    setMessage: Function,
    message: string,
    error: boolean,
  ) => {
    setMessage({ message, error });
    setTimeout(() => setMessage({ message: '', color: 'black' }), 3000); // 3초 후 메시지를 숨기는 용도.
  };

  useEffect(() => {
    // 이메일 input 빈칸시
    setIsEmailValid(!email);
  }, [email]);

  /* -------------------- 회원가입 submit 핸들러 함수 --------------------*/

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // form 데이터 Target함수
    const formData = new FormData(event.currentTarget);
    const userData: TSignUp = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      passwordCheck: formData.get('passwordCheck') as string,
      name: formData.get('name') as string,
    };
    // 객체 분해 할당으로 비밀번호 확인만 제외하고 apiData라는 객체에 할당! (api 전달용)
    const { passwordCheck, ...apiData } = userData;

    // 각 form 데이터 유효성 검사 실시
    if (!userData.email) {
      setMessageAndHideAfterDelay(
        setEmailMessage,
        '이메일을 입력해주세요.',
        true,
      );
      return;
    } else if (!userData.password) {
      setMessageAndHideAfterDelay(
        setPasswordMessage,
        '비밀번호를 입력해주세요.',
        true,
      );
      return;
    } else if (!/(?=.*[a-zA-Z])(?=.*[0-9]).{5,}/.test(userData.password)) {
      setMessageAndHideAfterDelay(
        setPasswordMessage,
        '비밀번호는 영문자와 숫자를 포함한 최소 5글자 이상이어야 합니다.',
        true,
      );
      return;
    } else if (!userData.passwordCheck) {
      setMessageAndHideAfterDelay(
        setPasswordCheckMessage,
        '비밀번호 확인을 입력해주세요.',
        true,
      );
      return;
    } else if (userData.password !== userData.passwordCheck) {
      setMessageAndHideAfterDelay(
        setPasswordCheckMessage,
        '입력된 비밀번호가 서로 다릅니다. 다시 확인해주세요.',
        true,
      );
      return;
    } else if (!userData.name) {
      setMessageAndHideAfterDelay(setNameMessage, '이름을 입력해주세요.', true);
      return;
    }

    // 회원가입 API 호출
    try {
      const response = await SIGN_API.userSignUp(apiData);
      const responseCode = response.data.code;
      switch (responseCode) {
        case RESPONSE_CODE.SIGNUP_SUCCESS: // 회원가입 성공
          alert('회원 가입에 성공했습니다. 가입한 아이디로 로그인해주세요.');
          window.location.href = '/sign-in';
          break;
        case RESPONSE_CODE.INVALID_EMAIL: // 이메일 형식 오류
          setMessageAndHideAfterDelay(
            setEmailMessage,
            '올바르지 않은 이메일 형식입니다.',
            true,
          );
          break;
      }
    } catch (error: unknown) {
      if (isAxiosError<Response>(error)) {
        if (error.response) {
          const responseCode = error.response.data.code;
          switch (responseCode) {
            case RESPONSE_CODE.INVALID_EMAIL: // 이메일 형식 오류
              setMessageAndHideAfterDelay(
                setEmailMessage,
                '올바르지 않은 이메일 형식입니다.',
                true,
              );
              break;
            case RESPONSE_CODE.INVALID_PASSWORD: // 비밀번호 형식 오류
              setMessageAndHideAfterDelay(
                setPasswordMessage,
                '비밀번호는 영문자와 숫자를 포함한 최소 5글자 이상이어야 합니다.',
                true,
              );
              break;
            case RESPONSE_CODE.DUPLICATE_EMAIL:
              setMessageAndHideAfterDelay(
                setEmailMessage,
                '이미 사용중인 이메일입니다.',
                true,
              );
              break;
            default:
              alert('회원 가입에 실패했습니다. 서버와의 연결을 확인해주세요.');
              break;
          }
        }
      }
    }
  };

  /* -------------------- 이메일 중복확인 핸들러 함수 -------------------- */

  const checkEmailValid = async () => {
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement as HTMLFormElement);
    const email = formData.get('email');

    if (typeof email === 'string') {
      // 이메일 형식 유효성 검사
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setMessageAndHideAfterDelay(
          setEmailMessage,
          '올바르지 않은 이메일 형식입니다.',
          true,
        );
        return;
      }

      // 이메일 중복체크 API 호출

      try {
        const response = await SIGN_API.emailCheck(email);
        const responseCode = response.data.code;

        switch (responseCode) {
          case RESPONSE_CODE.VALID_EMAIL: // 이메일 사용 가능
            setMessageAndHideAfterDelay(
              setEmailMessage,
              '사용 가능한 이메일입니다.',
              false,
            );
            break;
        }
      } catch (error: unknown) {
        if (isAxiosError<Response>(error)) {
          if (error.response) {
            const responseCode = error.response.data.code;

            switch (responseCode) {
              case RESPONSE_CODE.DUPLICATE_EMAIL: // 이메일 중복
                setMessageAndHideAfterDelay(
                  setEmailMessage,
                  '이미 사용중인 이메일입니다.',
                  true,
                );
                break;
              case RESPONSE_CODE.INVALID_FORMAT:
                setMessageAndHideAfterDelay(
                  setEmailMessage,
                  '유효하지 않은 이메일 형식입니다. 다시 입력해주세요.',
                  true,
                );
                break;
            }
          }
        }
      }
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
            <Input
              variant="signShort"
              type="email"
              placeholder="이메일"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              state={emailMessage.error ? 'invalid' : ''}
            />
            <Button
              size="sm"
              type="button"
              onClick={checkEmailValid}
              disabled={isEmailValid}>
              <Text color="gray100" fontSize="xs-4" fontWeight="medium">
                중복 확인
              </Text>
            </Button>
          </div>
          <div className={styles.labelArea}>
            <label className={styles.label} htmlFor="email">
              <Text
                fontSize="xs-3"
                fontWeight="normal"
                color={emailMessage.error ? 'red100' : 'green'}>
                {emailMessage.message || ''}
              </Text>
            </label>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <Input
              variant="signRegular"
              type="password"
              placeholder="비밀번호"
              name="password"
              state={passwordMessage.error ? 'invalid' : ''}
            />
            <div className={styles.labelArea}>
              <label htmlFor="password">
                <Text
                  fontSize="xs-3"
                  fontWeight="normal"
                  color={passwordMessage.error ? 'red100' : 'green'}>
                  {passwordMessage.message || ''}
                </Text>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <Input
              variant="signRegular"
              type="password"
              placeholder="비밀번호 확인"
              name="passwordCheck"
              state={passwordCheckMessage.error ? 'invalid' : ''}
            />
            <div className={styles.labelArea}>
              <label htmlFor="passwordCheck">
                <Text
                  fontSize="xs-3"
                  fontWeight="normal"
                  color={passwordCheckMessage.error ? 'red100' : 'green'}>
                  {passwordCheckMessage.message || ''}
                </Text>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <Input
              variant="signRegular"
              type="text"
              placeholder="이름"
              name="name"
              state={nameMessage.error ? 'invalid' : ''}
            />
            <div className={styles.labelArea}>
              <label htmlFor="name">
                <Text
                  fontSize="xs-3"
                  fontWeight="normal"
                  color={nameMessage.error ? 'red100' : 'green'}>
                  {nameMessage.message || ''}
                </Text>
              </label>
            </div>
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
