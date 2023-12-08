import { instance } from '..';
import { Response } from '../type';
import { TSignInData, TSignInResponseData } from './signInType';

export const SIGNIN_API = {
  userSignIn: (userData: TSignInData) =>
    instance.post<Response<TSignInResponseData>>('v1/member/login', userData),
};
