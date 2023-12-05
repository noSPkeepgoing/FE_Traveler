import { HTTP_BASE_URL } from '@/constants/api';
import axios from 'axios';
import { TOKEN_API } from './refresh-token';
import { useRouter } from 'next/navigation';

const isServer = typeof window === 'undefined';
let headers;
if (!isServer) {
  const accessToken = sessionStorage && sessionStorage.getItem('accessToken');
  headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
}

export const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  headers: headers,
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  (config) => {
    if (!isServer) {
      const accessToken =
        sessionStorage && sessionStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newToken = await TOKEN_API.tokenRefresh();
        sessionStorage.setItem('accessToken', newToken.data.data.accessToken);
        return axios(originalRequest);
      } catch (refreshError) {
        console.error('토큰 재발급 에러: ', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
