import { HTTP_BASE_URL } from '@/constants/api';
import axios from 'axios';

export const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  headers: {},
});

// interceptor 코드
