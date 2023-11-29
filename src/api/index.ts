import { HTTP_BASE_URL } from '@/constants/api';
import axios from 'axios';

export const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  // headers: {
  //   Authorization:
  //     'Bearer eyJhbGciOiJIUzUxMiJ9.eyJjbGllbnRfaWQiOiIyIiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlzcyI6ImZjX21pbmkiLCJpYXQiOjE3MDExNjM3MzYsImV4cCI6MTcwMTE5OTczNn0.fSDhmD8alzdyXK64obHEp-CSclULpWWnT2IPlH2Cu_k8QPdXcPEGlN3ptoFkJnXFdNjxgJLQQeApLZeVy27tVQ',
  // },
});

// interceptor 코드
