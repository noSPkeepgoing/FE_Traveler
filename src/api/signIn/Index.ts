import { isAxiosError } from 'axios';
import { instance } from '../';
import { Response, ErrorData } from '../type';
import { TSignInData } from './signInType';

export const SIGNIN_API = {
  userSignIn: async (userData: TSignInData) => {
    try {
      const response = await instance.post('/v1/member/login', userData);
      const code = response.data.code;
      const accessToken = response.data.data.accessToken;
      const refreshtoken = response.data.data.refreshtoken;
      // 1. 쿠키에 넣기(2개 다! 원래는 따로.)

      // 2. accessToken 주기에 맞춰서 쿠키에 넣기.
      return code;
    } catch (error) {
      if (isAxiosError<Response<ErrorData>>(error)) {
        if (error.response) {
          const code: number = error.response.data.code;
          return code;
        }
      }
    }
  },
};
