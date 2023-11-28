import { instance } from '../';
import { TSignUpData, TResponse } from './signUpType';
import { isAxiosError } from 'axios';

export const SIGN_API = {
  // 회원가입 API
  userSignUp: async (userData: TSignUpData) => {
    const response = await instance.post('/v1/member/register', userData);
    const { code, data } = response.data;
    return { code, data };
  },

  // 이메일 중복체크 API
  emailCheck: async (email: string) => {
    try {
      const response = await instance.get(
        `v1/member/register/check?email=${email}`,
      );
      console.log('respose: ', response);
      const { code, data } = response.data;
      return { code, data };
    } catch (error: unknown) {
      if (isAxiosError<TResponse>(error)) {
        const { code, data } = error.response!.data;
        return { code, data };
      }
    }
  },
};
