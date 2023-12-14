import { useState, FormEvent, useEffect } from 'react';
import { TLabelMessage, TSignUp } from './signUpType';
import { SIGNUP_API } from '@/api/sign-up';
import { RESPONSE_CODE } from '@constants/api';
import { isAxiosError } from 'axios';
import { Response } from '@/api/type';
import { useRouter } from 'next/navigation';
import { EMAIL_REGEX, NAME_REGEX, PASSWORD_REGEX } from '@/constants/regex';
import Swal from 'sweetalert2';

export function useSignUpForm() {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [pwCheck, setPwCheck] = useState<string>('');
  const [name, setName] = useState<string>('');

  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPwValid, setIsPwValid] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);

  const [emailMessage, setEmailMessage] = useState<TLabelMessage>({
    message: '',
    error: false,
  });
  const [passwordMessage, setPasswordMessage] = useState<TLabelMessage>({
    message: '',
    error: false,
  });
  const [passwordCheckMessage, setPasswordCheckMessage] =
    useState<TLabelMessage>({
      message: '',
      error: false,
    });
  const [nameMessage, setNameMessage] = useState<TLabelMessage>({
    message: '',
    error: false,
  });

  useEffect(() => {
    setIsEmailValid(!email);

    if (!EMAIL_REGEX.test(email) && email.length > 0 && email.includes('@')) {
      setEmailMessage({
        message: '올바르지 않은 이메일 형식입니다.',
        error: true,
      });
      return;
    } else {
      setEmailMessage({
        message: '',
        error: false,
      });
    }
  }, [email]);

  useEffect(() => {
    setIsPwValid(!pw);
    if (pw.length === 0) {
      setPasswordMessage({
        message: '',
        error: false,
      });
      return;
    }

    if (!PASSWORD_REGEX.test(pw) && pw.length > 0) {
      setPasswordMessage({
        message:
          '비밀번호는 영문자와 숫자를 포함한 최소 5글자 이상이어야 합니다.',
        error: true,
      });
      setIsPwValid(false);
      return;
    }

    if (PASSWORD_REGEX.test(pw)) {
      setPasswordMessage({
        message: '사용가능한 비밀번호입니다.',
        error: false,
      });
      return;
    }
  }, [pw, pwCheck]);

  useEffect(() => {
    setIsPwValid(!pwCheck);
    if (pwCheck.length === 0) {
      setPasswordCheckMessage({
        message: '',
        error: false,
      });
      return;
    }

    if (pw !== pwCheck) {
      setPasswordCheckMessage({
        message: '입력된 비밀번호가 서로 다릅니다.',
        error: true,
      });
      setIsPwValid(false);
      return;
    }
    if (pw === pwCheck && pw.length >= 5) {
      setPasswordCheckMessage({
        message: '입력된 비밀번호가 일치합니다.',
        error: false,
      });
      setIsPwValid(true);
      return;
    }
  }, [pw, pwCheck]);

  useEffect(() => {
    setIsNameValid(!name);

    if (name.length === 0) {
      setNameMessage({
        message: '',
        error: false,
      });
      return;
    }

    if (!NAME_REGEX.test(name) && name.length > 1) {
      setNameMessage({
        message: '이름에는 자음+모음의 한글 또는 영문자만 사용할 수 있습니다.',
        error: true,
      });
      setIsNameValid(false);
      return;
    }

    if (!!name && name.length === 1) {
      setNameMessage({
        message: '이름을 2글자 이상 입력해주세요.',
        error: true,
      });
      setIsNameValid(false);
      return;
    }

    if (name.length >= 2) {
      setNameMessage({
        message: `반갑습니다, ${name}님!`,
        error: false,
      });
      setIsNameValid(true);
      return;
    }
  }, [name]);

  const checkEmailValid = async () => {
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement as HTMLFormElement);
    const email = formData.get('email');

    if (typeof email === 'string') {
      if (!EMAIL_REGEX.test(email)) {
        setEmailMessage({
          message: '올바르지 않은 이메일 형식입니다.',
          error: true,
        });
        return;
      }
      try {
        const response = await SIGNUP_API.emailCheck(email);
        const responseCode = response.data.code;

        switch (responseCode) {
          case RESPONSE_CODE.VALID_EMAIL:
            setEmailMessage({
              message: '사용 가능한 이메일입니다.',
              error: false,
            });
            setIsEmailValid(true);
            break;
        }
      } catch (error: unknown) {
        if (isAxiosError<Response>(error)) {
          if (error.response) {
            const responseCode = error.response.data.code;

            switch (responseCode) {
              case RESPONSE_CODE.DUPLICATE_EMAIL:
                setEmailMessage({
                  message: '이미 사용중인 이메일입니다.',
                  error: true,
                });

                break;
              case RESPONSE_CODE.INVALID_FORMAT:
                setEmailMessage({
                  message:
                    '유효하지 않은 이메일 형식입니다. 다시 입력해주세요.',
                  error: true,
                });
                break;
            }
          }
        }
      }
    }
  };

  const signUpHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userData: TSignUp = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      passwordCheck: formData.get('passwordCheck') as string,
      name: formData.get('name') as string,
    };

    const { passwordCheck, ...apiData } = userData;

    try {
      const response = await SIGNUP_API.userSignUp(apiData);
      const responseCode = response.data.code;
      switch (responseCode) {
        case RESPONSE_CODE.SIGNUP_SUCCESS:
          Swal.fire(
            '회원 가입에 성공했습니다.\n가입한 아이디로 로그인해주세요.',
          );
          router.push('/sign-in');
          break;
      }
    } catch (error) {
      if (isAxiosError<Response>(error)) {
        if (error.response) {
          const responseCode = error.response.data.code;
          switch (responseCode) {
            case RESPONSE_CODE.INVALID_EMAIL:
              setEmailMessage({
                message: '올바르지 않은 이메일 형식입니다.',
                error: true,
              });

              break;
            case RESPONSE_CODE.INVALID_PASSWORD:
              setPasswordMessage({
                message:
                  '비밀번호는 영문자와 숫자를 포함한 최소 5글자 이상이어야 합니다.',
                error: true,
              });
              break;
            case RESPONSE_CODE.DUPLICATE_EMAIL:
              setEmailMessage({
                message: '이미 사용중인 이메일입니다.',
                error: true,
              });
              break;
            default:
              Swal.fire('회원 가입에 실패했습니다.\n잠시 후 다시 시도하세요.');
              break;
          }
        }
      }
    }
  };

  return {
    email,
    setEmail,
    pw,
    setPw,
    pwCheck,
    setPwCheck,
    name,
    setName,
    isEmailValid,
    isPwValid,
    isNameValid,
    emailMessage,
    passwordMessage,
    passwordCheckMessage,
    nameMessage,
    checkEmailValid,
    signUpHandler,
  };
}
