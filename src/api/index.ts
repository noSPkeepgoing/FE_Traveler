import { HTTP_BASE_URL } from '@/constants/api';
import axios from 'axios';
import { TOKEN_API } from './refresh-token';

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
    console.log('응답인터셉터 에러');
    console.log(error.response.status);
    // 여기서는 토큰 만료 상태를 확인하여 재발급 로직을 처리.
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log('123123');
        // 토큰 재발급 함수 호출
        const newToken = await TOKEN_API.tokenRefresh();
        // 토큰 재발급 성공 시 세션 스토리지에 새로운 토큰 저장
        sessionStorage.setItem('accessToken', newToken.data.data.accessToken);

        // 기존 refreshToken값
        console.log(
          '기존 refreshToken: ',
          sessionStorage.getItem('refreshToken'),
        );

        /* 리프레시 토큰이 같이 딸려 오는 상황인데.. 이게 과연 필요할까요..??? */
        sessionStorage.setItem('refreshToken', newToken.data.data.refreshToken);

        // 새로 받은 refreshToken값
        console.log('새로운 refreshToken: ', newToken.data.data.refreshToken);

        // 이전 요청에 새로운 토큰을 적용하여 재시도
        originalRequest.headers.Authorization = `Bearer ${newToken.data.data.accessToken}`;

        return axios(originalRequest);
      } catch (refreshError) {
        console.error('토큰 재발급 에러: ', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
