import { instance } from '..';
import { Response } from '../type';

export const SIGNOUT_API = {
  // 로그아웃 API
  userSignOut: () => instance.post<Response>('v1/member/logout'),
};
