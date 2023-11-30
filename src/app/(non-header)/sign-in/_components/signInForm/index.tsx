'use client';
import React, { FormEvent, useState } from 'react';
import styles from './signInForm.module.scss';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { TSignIn } from './signInType';
import Input from '@/components/atoms/input';
import { SIGNIN_API } from '@/api/sign-in/Index';
import { RESPONSE_CODE } from '@/constants/api';
import { isAxiosError } from 'axios';
import { Response } from '@/api/type';
import { useRouter } from 'next/navigation';

function SignInForm() {
  const router = useRouter();

  // 각 Input 라벨 메세지용 state
  const [emailMessage, setEmailMessage] = useState({
    message: '',
    error: false,
  });
  const [passwordMessage, setPasswordMessage] = useState({
    message: '',
    error: false,
  });

  // 각 상태관리 함수 메세지값 전달용 함수
  const setMessageAndHideAfterDelay = (
    setMessage: Function,
    message: string,
    error: boolean,
  ) => {
    setMessage({ message, error });
    setTimeout(() => setMessage({ message: '', color: 'black' }), 3000); // 3초 후 메시지를 숨기는 용도.
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // form 데이터 Target함수
    const formData = new FormData(event.currentTarget);
    const userData: TSignIn = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    // 각 form 데이터 유효성 검사 실시
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 유효성 검사용 정규식

    if (!userData.email) {
      setMessageAndHideAfterDelay(
        setEmailMessage,
        '이메일을 입력해주세요.',
        true,
      );
      return;
    } else if (!emailRegex.test(userData.email)) {
      setMessageAndHideAfterDelay(
        setEmailMessage,
        '올바르지 않은 이메일 형식입니다.',
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
    }

    // 로그인 API 호출
    try {
      const response = await SIGNIN_API.userSignIn(userData);
      const accessToken = response.data.data.access_token;
      const refreshToken = response.data.data.refresh_token;
      const userName = response.data.data.name;
      const userEmail = response.data.data.email;

      // 세션 스토리지에 토큰 값 저장
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
      sessionStorage.setItem('userName', userName);
      sessionStorage.setItem('userEmail', userEmail);

      // response코드 저장
      const responseCode = response.data.code;
      switch (responseCode) {
        case RESPONSE_CODE.SIGNIN_SUCCESS:
          window.location.href = '/main';
          router.push('/main');
          break;
      }
    } catch (error: unknown) {
      if (isAxiosError<Response>(error)) {
        if (error.response) {
          const responseCode = error.response.data.code;
          switch (responseCode) {
            case RESPONSE_CODE.INCORRECT_ID:
              setMessageAndHideAfterDelay(
                setEmailMessage,
                '회원 아이디가 존재하지 않습니다.',
                true,
              );
              break;
            case RESPONSE_CODE.INCORRECT_PASSWORD:
              setMessageAndHideAfterDelay(
                setPasswordMessage,
                '비밀번호가 올바르지 않습니다.',
                true,
              );
              break;
            case RESPONSE_CODE.INVALID_FORMAT:
              setMessageAndHideAfterDelay(
                setEmailMessage,
                '잘못된 이메일 형식입니다. ',
                true,
              );
              break;
            default:
              alert('로그인에 실패했습니다. 서버와의 연결을 확인해주세요.');
              break;
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
            로그인
          </Text>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <Input
              variant="signRegular"
              type="email"
              placeholder="이메일"
              name="email"
              state={emailMessage.error ? 'invalid' : ''}
            />
            <div className={styles.labelArea}>
              <label className={styles.label} htmlFor="email">
                <Text
                  fontSize="xs-3"
                  fontWeight="normal"
                  color={emailMessage.error ? 'red100' : 'black'}>
                  {emailMessage.message || ''}
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
              placeholder="비밀번호"
              name="password"
              state={passwordMessage.error ? 'invalid' : ''}
            />
            <div className={styles.labelArea}>
              <label htmlFor="password">
                <Text
                  fontSize="xs-3"
                  fontWeight="normal"
                  color={passwordMessage.error ? 'red100' : 'black'}>
                  {passwordMessage.message || ''}
                </Text>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.confirm}>
          <Button size="lg" type="submit">
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
