import { instance } from '..';
import { Response } from '../type';
import { TSignUpData } from './signUpType';

export const SIGNUP_API = {
  userSignUp: (userData: TSignUpData) =>
    instance.post<Response>('v1/member/register', userData),

  emailCheck: async (email: string) =>
    instance.get<Response>(`v1/member/register/check?email=${email}`),
};
