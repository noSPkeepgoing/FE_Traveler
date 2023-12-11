import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { EMAIL_REGEX } from '@/constants/emailRegex';
import { SIGNIN_API } from '@/api/sign-in/Index';
import { RESPONSE_CODE } from '@/constants/api';
import { isAxiosError } from 'axios';
import { Response } from '@/api/type';
import { setSessionCookie } from '@/constants/cookie';
import Swal from 'sweetalert2';
import { sessionSet } from '@/utils/sessionStorage';
import {
  TLabelMessage,
  TSignIn,
} from '@/app/(non-header)/sign-in/_components/signInForm/signInType';

export function useSignInForm() {
  const router = useRouter();

  const [emailMessage, setEmailMessage] = useState<TLabelMessage>({
    message: '',
    error: false,
  });
  const [passwordMessage, setPasswordMessage] = useState<TLabelMessage>({
    message: '',
    error: false,
  });

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

    const formData = new FormData(event.currentTarget);
    const userData: TSignIn = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    if (!userData.email) {
      setMessageAndHideAfterDelay(
        setEmailMessage,
        '이메일을 입력해주세요.',
        true,
      );
      return;
    }
    if (!EMAIL_REGEX.test(userData.email)) {
      setMessageAndHideAfterDelay(
        setEmailMessage,
        '올바르지 않은 이메일 형식입니다.',
        true,
      );
      return;
    }
    if (!userData.password) {
      setMessageAndHideAfterDelay(
        setPasswordMessage,
        '비밀번호를 입력해주세요.',
        true,
      );
      return;
    }

    // 로그인 진행
    try {
      const response = await SIGNIN_API.userSignIn(userData);
      const apiData = response.data.data;
      const accessToken = apiData.access_token;
      const refreshToken = apiData.refresh_token;
      const userName = apiData.name;
      const userEmail = apiData.email;

      sessionSet({
        accessToken: accessToken,
        refreshToken: refreshToken,
        userName: userName,
        userEmail: userEmail,
      });
      setSessionCookie('refreshToken', refreshToken);

      const responseCode = response.data.code;
      switch (responseCode) {
        case RESPONSE_CODE.SIGNIN_SUCCESS:
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
              Swal.fire('로그인에 실패했습니다.\n잠시 후 다시 시도하세요.');
              break;
          }
        }
      }
    }
  };

  return {
    emailMessage,
    passwordMessage,
    handleSubmit,
  };
}
