import { instance } from '../';
import { TSignUpData, TResponse } from './signUpType';
import { isAxiosError } from 'axios';

export const SIGN_API = {
  // 회원가입 API
  userSignUp: async (userData: TSignUpData) => {
    try {
      const response = await instance.post('/v1/member/register', userData);
      const code = response.data.code;
      return code;
    } catch (error: unknown) {
      if (isAxiosError<TResponse>(error)) {
        const code: number = error.response!.data.code;
        return code;
      }
    }
  },

  // 이메일 중복체크 API
  emailCheck: async (email: string) => {
    try {
      const response = await instance.get(
        `v1/member/register/check?email=${email}`,
      );
      const code = response.data.code;
      return code;
    } catch (error: unknown) {
      if (isAxiosError<TResponse>(error)) {
        if (error.response) {
          const code: number = error.response.data.code;
          return code;
        }
      }
    }
  },
};
