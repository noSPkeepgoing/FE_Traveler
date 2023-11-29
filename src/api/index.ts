import { HTTP_BASE_URL } from '@/constants/api';
import axios from 'axios';

export const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJjbGllbnRfaWQiOiIxIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlzcyI6ImZjX21pbmkiLCJpYXQiOjE3MDEyMzg2NTksImV4cCI6MTcwMTI3NDY1OX0.IlsJyT25cwb7n5aRatRSzzuYVGKZRkkiIOBs4iD7Fk-f2rDKP9PT2V1AbW_xo2ZEBRqldMX4e58RefTQLzeW1w',
  },
});

// interceptor 코드
