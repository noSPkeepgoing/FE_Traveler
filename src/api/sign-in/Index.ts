import { instance } from '..';
import { Response } from '../type';
import { TSignInData, TSignInResponseData } from './signInType';

export const SIGNIN_API = {
  // 로그인 api
  userSignIn: (userData: TSignInData) =>
    instance.post<Response<TSignInResponseData>>('v1/member/login', userData),
};
