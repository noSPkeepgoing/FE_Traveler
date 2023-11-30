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
      // 세션 스토리지에서 accessToken 가져오기.
      const accessToken =
        sessionStorage && sessionStorage.getItem('accessToken');
      if (accessToken) {
        // accessToken이 존재하면 Authorization 헤더 설정.
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

    // 여기서는 토큰 만료 상태를 확인하여 재발급 로직을 처리.
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      // if (!sessionStorage.getItem('refreshToken')) {
      //   alert('로그인이 필요한 서비스입니다!');
      //   return;
      // }

      try {
        // 토큰 재발급 함수 호출
        const newToken = await TOKEN_API.tokenRefresh();
        // 토큰 재발급 성공 시 세션 스토리지에 새로운 토큰 저장
        sessionStorage.setItem('accessToken', newToken.data.data.accessToken);

        // 기존 refreshToken값

        // 이전 요청에 새로운 토큰을 적용하여 재시도
        // originalRequest.headers.Authorization = `Bearer ${newToken.data.data.accessToken}`;

        return axios(originalRequest);
      } catch (refreshError) {
        console.error('토큰 재발급 에러: ', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
