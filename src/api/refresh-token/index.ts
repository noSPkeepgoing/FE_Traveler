import { instance } from '..';
import { Response } from '../type';
import { TTokenResponse } from './refreshTokenType';

export const TOKEN_API = {
  tokenRefresh: () =>
    instance.post<Response<TTokenResponse>>('v1/member/refresh'),
};
