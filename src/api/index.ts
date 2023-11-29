import { HTTP_BASE_URL } from '@/constants/api';
import axios from 'axios';

const accessToken = sessionStorage.getItem('access_token');
const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

export const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  headers: headers,
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('access_token'); // 세션 스토리지에서 accessToken 가져오기

    // accessToken이 존재하면 Authorization 헤더 설정
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
