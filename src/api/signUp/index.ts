import { instance } from '../';
import { TSignUpData, TResponse } from './signUpType';
import { isAxiosError } from 'axios';
import { Response } from '../type';

export const SIGN_API = {
  // 회원가입 API 수정용
  userSignUp: (userData: TSignUpData) =>
    instance.post<Response>('v1/member/register', userData),
  // 이메일 중복체크 api
  emailCheck: async (email: string) =>
    instance.get<Response>(`v1/member/register/check?email=${email}`),
};
