import { HTTP_BASE_URL } from '@/constants/api';
import axios from 'axios';

const accessToken = sessionStorage.getItem('access_token');

export const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

// interceptor 코드
