import { HTTP_BASE_URL } from '@/constants/api';
import axios from 'axios';

export const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  headers: {
    Authorization:
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJjbGllbnRfaWQiOiIzIiwiZW1haWwiOiJ0ZXN0QG5hdmVyLmNvbSIsImlzcyI6ImZjX21pbmkiLCJpYXQiOjE3MDEyNzg0MjAsImV4cCI6MTcwMTMxNDQyMH0.uLMTnEccO8pODr2pvtfgbuqF-cqkC4oY0j1wW1nH1oLnYTxe2eOdMHmAEEDNa93VXnUeaQBTddaPCqyyMSCziA',
  },
});

// interceptor 코드

