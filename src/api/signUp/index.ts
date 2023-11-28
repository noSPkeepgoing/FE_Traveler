import { instance } from '../';
import { TSignUpData, TResponse } from './types';

export const SIGN_API = {
  // 회원가입 API
  userSignUp: async (userData: TSignUpData): Promise<TResponse> => {
    try {
      const response = await instance.post('/v1/member/register', userData);
      const { code, data } = response.data;
      return { code, data };
    } catch (error) {
      throw new Error('서버와 통신중 에러가 발생했습니다.');
    }
  },

  // 이메일 중복체크 API
  emailCheck: async (email: string): Promise<TResponse> => {
    try {
      const response = await instance.get(
        `v1/member/register/check?email=${email}`,
      );
      const { code, data } = response.data;
      return { code, data };
    } catch (error) {
      throw new Error('서버와 통신중 에러가 발생했습니다.');
    }
  },
};
