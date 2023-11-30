import { HTTP_BASE_URL } from '@/constants/api';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.gamsung.xyz',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJjbGllbnRfaWQiOiIzIiwiZW1haWwiOiJ0ZXN0QG5hdmVyLmNvbSIsImlzcyI6ImZjX21pbmkiLCJpYXQiOjE3MDEyODkyNTEsImV4cCI6MTcwMTMyNTI1MX0.n5Q6ltSH08NFHkx8tRxjo9hnKcbJXWDp1tXIEzspw27IxqrC6zn6OVc8I5WmLB5VqJ9Zs44ciiCdfMAB08GDKg',
  },
});

// interceptor 코드
