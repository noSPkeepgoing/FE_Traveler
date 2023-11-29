import { instance } from '../';
import { Response } from '../type';
import { TSignUpData } from './signUpType';

export const SIGN_API = {
  // 회원가입 API 수정용
  userSignUp: (userData: TSignUpData) =>
    instance.post<Response>('v1/member/register', userData),
  // 이메일 중복체크 api
  emailCheck: async (email: string) =>
    instance.get<Response>(`v1/member/register/check?email=${email}`),
};
